import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MessagesService {
    constructor(private configService: ConfigService) {}
    
    sendMessage(message): Promise<any> {
        return new Promise(resolve => {
            var body = message.body
            if(body.length<=480){
                //twilio code
                const accountSid = this.configService.get('twilio-accountSid');
                const authToken = this.configService.get('twilio-authToken');
                const client = require('twilio')(accountSid, authToken); 
                
                client.messages.create({ 
                        body: body,
                        from: message.SPNumber,       
                        to: message.RPNumber 
                }).then(result => resolve(result)) 
                    .done();
            }
        });
    }
}
