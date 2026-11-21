import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PublicChat, User } from 'entities';
import { LeaveMessage } from 'entities/leave-message.entity';
import { isExceedMessageCount } from 'errors';
import { MessageGateway } from 'modules/message/message.gateway';
import { MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class ChatService {
  constructor(
    private readonly messageGateway: MessageGateway,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(PublicChat)
    private PublicChatRepository: Repository<PublicChat>,
    @InjectRepository(LeaveMessage)
    private LeaveMessageRepository: Repository<LeaveMessage>,
  ) {}

  async getLatestChatHistory(limit: number = 20, offset: number = 0) {
    return await this.PublicChatRepository.createQueryBuilder('t_pc')
      .select([
        't_u.id as user_id',
        't_u.name as user_name',
        't_u.avatar as user_avatar',
        't_u.vip_level as user_vip_level',
        'EXTRACT(EPOCH FROM t_pc.created_at) as time',
        't_pc.id as id',
        't_pc.text as text',
        'r_u.id as reply_user_id',
        'r_u.name as reply_user_name',
        'r_u.avatar as reply_user_avatar',
        'r_u.vip_level as reply_user_vip_level',
        'EXTRACT(EPOCH FROM r_c.created_at) as reply_time',
        'r_c.id as reply_id',
        'r_c.text as reply_text',
      ])
      .leftJoin(PublicChat, 'r_c', 'r_c.id = t_pc.reply_id')
      .leftJoin(User, 't_u', 't_u.id = t_pc.user_id')
      .leftJoin(User, 'r_u', 'r_u.id = r_c.user_id')
      .orderBy('t_pc.created_at', 'DESC')
      .offset(offset)
      .limit(limit)
      .getRawMany();
  }

  async addChatByUserId(user_id: string, text: string, reply_id: string) {
    const user = await this.UserRepository.findOneBy({ id: user_id });

    const replyChat = reply_id
      ? await this.PublicChatRepository.findOneBy({
          id: reply_id,
        })
      : undefined;
    const _newChat = this.PublicChatRepository.create({
      user: { id: user_id },
      text,
      reply_chat: replyChat,
    });

    const newChat = await this.PublicChatRepository.save(_newChat);

    const fullChatData = await this.PublicChatRepository.createQueryBuilder(
      't_pc',
    )
      .select([
        't_u.id as user_id',
        't_u.name as user_name',
        't_u.avatar as user_avatar',
        't_u.vip_level as user_vip_level',
        'EXTRACT(EPOCH FROM t_pc.created_at) as time',
        't_pc.id as id',
        't_pc.text as text',
        'r_u.id as reply_user_id',
        'r_u.name as reply_user_name',
        'r_u.avatar as reply_user_avatar',
        'r_u.vip_level as reply_user_vip_level',
        'EXTRACT(EPOCH FROM r_c.created_at) as reply_time',
        'r_c.id as reply_id',
        'r_c.text as reply_text',
      ])
      .leftJoin(PublicChat, 'r_c', 'r_c.id = t_pc.reply_id')
      .leftJoin(User, 't_u', 't_u.id = t_pc.user_id')
      .leftJoin(User, 'r_u', 'r_u.id = r_c.user_id')
      .where({ id: newChat.id })
      .orderBy('t_pc.created_at', 'DESC')
      .getRawOne();
    this.messageGateway.broadcastChat(
      JSON.stringify({
        user_id: user.id,
        user_name: user.name,
        user_avatar: user.avatar,
        user_vip_level: user.vip_level,
        time: Math.floor(Date.now() / 1000),
        text: text,
        id: newChat.id,
        reply_id: fullChatData.reply_id,
        reply_text: fullChatData.reply_text,
        reply_time: fullChatData.reply_time,
        reply_user_id: fullChatData.reply_user_id,
        reply_user_name: fullChatData.reply_user_name,
        reply_user_vip_level: fullChatData.reply_user_vip_level,
      }),
    );

    return newChat;
  }

  async leaveMessage(text: string, ip: string, deviceInfo: string) {
    // check limit
    const now = new Date();

    now.setHours(0, 0, 0, 0);

    const startTime = Math.floor(now.getTime()); // today start

    const cnt = await this.LeaveMessageRepository.countBy({
      ip,
      created_at: MoreThanOrEqual(new Date(startTime)),
    });

    if (cnt >= 5)
      throw new HttpException(
        isExceedMessageCount.error,
        isExceedMessageCount.code,
      );

    const _newMessage = this.LeaveMessageRepository.create({
      text: text,
      ip: ip,
      device: deviceInfo,
    });
    await this.LeaveMessageRepository.save(_newMessage);
    return true;
  }
}
