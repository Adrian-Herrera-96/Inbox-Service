import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Workflow } from './workflow.entity';
import { WorkflowState } from './workflow-state.entity';

@Entity('workflow_sequences')
export class WorkflowSequence {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  action: string;

  @ManyToOne(() => Workflow, (workflow) => workflow.sequences, { nullable: false })
  @JoinColumn({ name: 'workflow_id' })
  workflow: Workflow;

  @ManyToOne(() => WorkflowState, { nullable: false })
  @JoinColumn({ name: 'from_wf_state_id' })
  fromWfState: WorkflowState;

  @ManyToOne(() => WorkflowState, { nullable: false })
  @JoinColumn({ name: 'to_wf_state_id' })
  toWfState: WorkflowState;
}
