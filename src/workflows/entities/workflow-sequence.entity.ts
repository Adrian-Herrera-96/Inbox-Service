import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WorkflowArea } from './workflow-area.entity';
import { Workflow } from './workflow.entity';

@Entity('workflow_sequences')
export class WorkflowSequence {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  action: string;

  @ManyToOne(() => Workflow, (workflow) => workflow.sequences, { nullable: false })
  @JoinColumn({ name: 'workflow_id' })
  workflow: Workflow;

  @ManyToOne(() => WorkflowArea, { nullable: false })
  @JoinColumn({ name: 'from_wf_state_id' })
  fromWfState: WorkflowArea;

  @ManyToOne(() => WorkflowArea, { nullable: false })
  @JoinColumn({ name: 'to_wf_state_id' })
  toWfState: WorkflowArea;
}
