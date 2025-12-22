import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { WorkflowState } from '../../workflows/entities/workflow-state.entity';
import { ProcedureStatus } from './procedure-status.entity';

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

  @ManyToOne(() => ProcedureStatus)
  @JoinColumn({ name: 'procedure_status_id' })
  procedureStatus: ProcedureStatus;

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
