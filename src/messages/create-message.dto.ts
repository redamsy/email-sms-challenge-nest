export class CreateMessageDto {
    readonly SPNumber: number;//sender number
    readonly RPNumber: number;//receiver number
    readonly body: string;
}