import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { EmailsModule } from './emails/emails.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), UsersModule, MessagesModule, EmailsModule, HttpModule],//this was empty before making new module
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
