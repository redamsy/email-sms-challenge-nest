import { Injectable, HttpService, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class EmailsService {
    constructor(private configService: ConfigService, private httpService: HttpService) {}
    async shortenUrl(longUrl){
        try {
            var accessToken = this.configService.get('Bitly_ACCESS_TOKEN')
            var dataString = {"long_url":longUrl,"group_guid":"Bk89eFahWRh"};
            let response = await axios({
                method:'post',
                url:'https://api-ssl.bitly.com/v4/shorten',
                headers: {
                'Authorization': 'Bearer '+accessToken,
                'Content-Type': 'application/json'
                },
                data:dataString
            })
            return response.data.link
        } catch (error) {
            Logger.log(error)
            
        }       
    }
    async sendEmail(email){
        const text = email.text;
        if(text.length<=480){
            var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
            const promises = [];
            text.replace(urlRegex, (longUrl, ...args) => {
                const promise = this.shortenUrl(longUrl)
                promises.push(promise);
            });
            const data = await Promise.all(promises);
            var newText = text.replace(urlRegex, () => data.shift());
            
            //sendgrid code
            const apiKey = this.configService.get('SENDGRID_API_KEY');
            const sgMail = require('@sendgrid/mail');
            sgMail.setApiKey(apiKey);
            const msg = {
            to: email.REmail,
            from: email.SEmail,
            subject: email.subject,
            text: newText,
            };
            var r = sgMail.send(msg).then((r)=> {
                return r
            }).catch(error => {
            });

            return r
        }        
    }
}
