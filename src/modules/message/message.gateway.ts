import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { config as dotenvConfig } from 'dotenv';
import { Server, Socket } from 'socket.io';

dotenvConfig({ path: '.env' });

@WebSocketGateway({
  cors: {
    origin: process.env.WEBSITE_ORIGIN,
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
export class MessageGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  afterInit(server: Server) {
    console.log(new Date(), 'Socket server initialized');
    // server.emit('test', 'ping');
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log(new Date(), `Socket client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(new Date(), `Socket client disconnected: ${client.id}`);
  }

  broadcastBet(data: any) {
    this.server.emit('bets', data);
  }

  broadcastRewards(data: any) {
    this.server.emit('rewards', data);
  }

  broadcastChat(data: any) {
    this.server.emit('chat', data);
  }

  broadcastPrice(data: any) {
    this.server.emit('price', data);
  }

  broadcastTest(data: string) {
    this.server.emit('private_websocket_test', data);
  }

  //  User Data
  emitBalance(user_id: string, data: any) {
    this.server.emit(`${user_id}:balance`, data);
  }

  emitWithdraw(user_id: string, data: any) {
    this.server.emit(`${user_id}:withdraw`, data);
  }

  emitTip(user_id: string, data: any) {
    this.server.emit(`${user_id}:tip`, data);
  }

  emitBonus(user_id: string, data: any) {
    this.server.emit(`${user_id}:bonus`, data);
  }
}
