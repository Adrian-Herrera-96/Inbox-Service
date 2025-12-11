import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { InboxService } from './inbox.service';
import { WorkflowItem } from './entities/workflow-item.entity';

@Controller()
export class InboxController {
  constructor(private readonly inboxService: InboxService) {}

  @MessagePattern('inbox.test')
  test(@Payload() data: any) {
    console.log('Message received in inbox-asdasdasd:', data);
    return { message: 'Hola soy yo desde el inbox ssdsacontroller' };
  }

  @MessagePattern('workflow_item.create')
  createWorkflowItem(@Payload() workflowItem: Partial<WorkflowItem>) {
    return this.inboxService.createWorkflowItem(workflowItem);
  }

  @MessagePattern('workflow_item.findAll')
  findAllWorkflowItems() {
    return this.inboxService.findAllWorkflowItems();
  }

  @MessagePattern('workflow_item.findOne')
  findOneWorkflowItem(@Payload() id: string) {
    return this.inboxService.findOneWorkflowItem(id);
  }

  @MessagePattern('workflow_item.update')
  updateWorkflowItem(@Payload() { id, workflowItem }: { id: string; workflowItem: Partial<WorkflowItem> }) {
    return this.inboxService.updateWorkflowItem(id, workflowItem);
  }

  @MessagePattern('workflow_item.remove')
  removeWorkflowItem(@Payload() id: string) {
    return this.inboxService.removeWorkflowItem(id);
  }
}
