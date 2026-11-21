import { Injectable } from '@nestjs/common';
import * as SmMail from '@sendgrid/mail';
import { AppEnvironment, NodeEnvironment } from 'app.environment';
import * as TwilioSDK from 'twilio';

export interface SendEmailParams {
  from: string;
  to: string | string[];
  subject: string;
  text: string;
  html?: string;
  attachments?: any;
  cc?: string | string[];
  bcc?: string | string[];
}

@Injectable()
export class EmailService {
  private readonly twilioClient: TwilioSDK.Twilio;

  constructor(private readonly appEnvironment: AppEnvironment) {
    SmMail.setApiKey(appEnvironment.sendGrid);
    this.twilioClient = TwilioSDK(
      appEnvironment.twilioAccountSid,
      appEnvironment.twilioAuthToken,
    );
  }

  send2Email(params: any) {
    try {
      if (this.appEnvironment.nodeEnvironment === NodeEnvironment.Development) {
        console.log(`Email to ${params.to} cc ${params.cc}  bcc ${params.bcc}`);
        params.to = this.appEnvironment.devEmail;
      }
      params.from = {
        name: 'Bonenza',
        email: this.appEnvironment.mainMail,
      };
      return SmMail.send({
        ...params,
      });
    } catch (e) {
      console.log('Email Error', params, e);
      return null;
    }
  }

  async send2Phone(params: any) {
    try {
      if (this.appEnvironment.nodeEnvironment === NodeEnvironment.Development) {
        params.to = this.appEnvironment.devPhone;
      }
      return this.twilioClient.messages
        .create({
          ...params,
        })
        .then((res) => res)
        .catch((e) => {
          return null;
        });
    } catch (error) {
      console.log('Phone Error', params, error);
      return null;
    }
  }
}
