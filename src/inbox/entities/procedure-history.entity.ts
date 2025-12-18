import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
} from 'typeorm';
import { WorkflowState } from '../../workflows/entities/workflow-state.entity';

@Entity('procedure_history', { schema: 'inbox' })
export class ProcedureHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'role_id' })
  roleId: number;

  @Column({ name: 'type', type: 'text' })
  type: string;

  @Column({ name: 'type_id', type: 'text' })
  typeId: string;

  @Column({ name: 'procedure_status_id' })
  procedureStatusId: number;

  @ManyToOne(() => WorkflowState)
  @JoinColumn({ name: 'current_wf_state_id' })
  currentWfState: WorkflowState;

  @ManyToOne(() => WorkflowState)
  @JoinColumn({ name: 'next_wf_state_id' })
  nextWfState: WorkflowState;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
