import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FindProcedureCurrentAreaDto } from './dtos/find-procedure-current-area.dto';
import { InboxService } from './inbox.service';

@Controller()
export class InboxController {
  constructor(private readonly inboxService: InboxService) {}

  @MessagePattern('procedure.findCurrentState')
  findProcedureCurrentState(@Payload() data: FindProcedureCurrentAreaDto) {
    return this.inboxService.findProcedureCurrentArea(data);
  }
}
