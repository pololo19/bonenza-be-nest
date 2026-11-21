import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import * as bodyParserXml from 'body-parser-xml';
import helmet from 'helmet';
import * as requestIp from 'request-ip';

import { RedisIoAdapter } from './adapters/redisIoAdapter';
import { AppEnvironment } from './app.environment';
import { AppModule } from './app.module';

bodyParserXml(bodyParser);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appEnvironment = app.get(AppEnvironment);

  //  Attach redis adapter
  const redisIoAdapter = new RedisIoAdapter(app);
  await redisIoAdapter.connectToRedis();

  app.useWebSocketAdapter(redisIoAdapter);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  if (!appEnvironment.isDevelopment()) {
    app.enableCors({
      origin: appEnvironment.isProduction()
        ? [
            appEnvironment.websiteOrigin,
            appEnvironment.blockchainWalletSystemURL,
          ]
        : [
            appEnvironment.websiteOrigin,
            appEnvironment.blockchainWalletSystemURL,
            appEnvironment.websiteLocal,
            appEnvironment.websiteTest,
          ],
      credentials: false,
    });
    app.use(
      helmet({
        crossOriginResourcePolicy: false,
      }),
    );
  }
  app.enableVersioning({
    type: VersioningType.URI,
  });

  const rawBodyBuffer = (req, res, buf, encoding) => {
    if (buf && buf.length) {
      req.rawBody = buf; // buf.toString(encoding || 'utf8')
    }
  };

  app.use(bodyParser.json({ limit: '1mb', verify: rawBodyBuffer }));

  app.use(
    bodyParser.xml({
      limit: '1mb',
      xmlParseOptions: {
        attrkey: 'att',
      },
    }),
  );
  app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));

  app.use(requestIp.mw());

  if (!appEnvironment.isProduction()) {
    const config = new DocumentBuilder()
      .setTitle('Bonenza Apis')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('documentation', app, document);
  }

  await app.listen(appEnvironment.port);
}
bootstrap();
