import { Module, HttpModule } from '@nestjs/common';
import { EmailsController } from './emails.controller';
import { EmailsService } from './emails.service';

@Module({
  imports: [HttpModule],
  controllers: [EmailsController],
  providers: [EmailsService]
})
export class EmailsModule {}
