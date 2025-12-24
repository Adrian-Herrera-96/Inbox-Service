import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkflowArea } from './entities/workflow-area.entity';
import { WorkflowSequence } from './entities/workflow-sequence.entity';
import { Workflow } from './entities/workflow.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Workflow, WorkflowArea, WorkflowSequence]),
  ],
  exports: [TypeOrmModule],
})
export class WorkflowsModule {}