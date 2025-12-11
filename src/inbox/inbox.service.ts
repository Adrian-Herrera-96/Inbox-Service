import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkflowItem } from './entities/workflow-item.entity';

@Injectable()
export class InboxService {
  constructor(
    @InjectRepository(WorkflowItem)
    private readonly workflowItemRepository: Repository<WorkflowItem>,
  ) {}

  async createWorkflowItem(workflowItem: Partial<WorkflowItem>): Promise<WorkflowItem> {
    const newWorkflowItem = this.workflowItemRepository.create(workflowItem);
    return this.workflowItemRepository.save(newWorkflowItem);
  }

  async findAllWorkflowItems(): Promise<WorkflowItem[]> {
    return this.workflowItemRepository.find();
  }

  async findOneWorkflowItem(id: string): Promise<WorkflowItem> {
    return this.workflowItemRepository.findOneBy({ id });
  }

  async updateWorkflowItem(id: string, workflowItem: Partial<WorkflowItem>): Promise<WorkflowItem> {
    await this.workflowItemRepository.update(id, workflowItem);
    return this.workflowItemRepository.findOneBy({ id });
  }

  async removeWorkflowItem(id: string): Promise<void> {
    await this.workflowItemRepository.delete(id);
  }
}
