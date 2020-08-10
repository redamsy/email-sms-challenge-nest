export class CreateEmailDto {
    readonly SEmail: string;//sender email
    readonly REmail: string;//receiver email
    readonly subject: string;
    readonly text: string;
}