import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workflow } from './entities/workflow.entity';
import { WorkflowState } from './entities/workflow-state.entity';
import { WorkflowSequence } from './entities/workflow-sequence.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Workflow, WorkflowState, WorkflowSequence]),
  ],
  exports: [TypeOrmModule],
})
export class WorkflowsModule {}