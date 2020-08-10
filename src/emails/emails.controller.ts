import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { CreateEmailDto } from './create-email.dto';

@Controller('emails')
export class EmailsController {
    constructor(private emailsService: EmailsService) {}

    @Post()
    async sendEmail(@Body() createEmailDto: CreateEmailDto) {
        const email = await  this.emailsService.sendEmail(createEmailDto);
        return email;
    }
}
