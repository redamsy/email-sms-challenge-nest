import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({//this was an empty object before making the controller
  controllers: [UsersController], providers: [UsersService]
})
export class UsersModule {}
