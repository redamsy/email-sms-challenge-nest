import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './create-message.dto';

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService) {}

    @Post()
    async sendMessage(@Body() createMessageDto: CreateMessageDto) {//Dto data transfer object custom object defines the structure of the data handed by the body
        const message = await this.messagesService.sendMessage(createMessageDto);
        return message;
    }
}
