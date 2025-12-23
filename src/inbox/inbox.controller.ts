import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FindProcedureStateDto } from './dtos/find-procedure-state.dto';
import { InboxService } from './inbox.service';

@Controller()
export class InboxController {
  constructor(private readonly inboxService: InboxService) {}

  @MessagePattern('procedure.findCurrentState')
  findProcedureCurrentState(@Payload() data: FindProcedureStateDto) {
    return this.inboxService.findProcedureCurrentState(data);
  }
}
