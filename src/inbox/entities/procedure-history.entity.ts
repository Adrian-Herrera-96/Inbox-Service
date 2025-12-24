import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { WorkflowArea } from '../../workflows/entities/workflow-area.entity';
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

  @ManyToOne(() => WorkflowArea)
  @JoinColumn({ name: 'current_wf_area_id' })
  currentWfArea: WorkflowArea;

  @ManyToOne(() => WorkflowArea)
  @JoinColumn({ name: 'next_wf_area_id' })
  nextWfArea: WorkflowArea;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
