import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Workflow } from '../../workflows/entities/workflow.entity';
import { WorkflowState } from '../../workflows/entities/workflow-state.entity';

@Entity('procedures', { schema: 'inbox' })
export class Procedure {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'type', type: 'text' })
  type: string;

  @Column({ name: 'type_id', type: 'text' })
  typeId: string;

  @ManyToOne(() => Workflow)
  @JoinColumn({ name: 'workflow_id' })
  workflow: Workflow;

  @ManyToOne(() => WorkflowState)
  @JoinColumn({ name: 'current_wf_state_id' })
  currentWfState: WorkflowState;

  @Column({ name: 'inbox_status_id' })
  inboxStatusId: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'role_id' })
  roleId: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
