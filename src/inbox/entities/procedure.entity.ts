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
import { Workflow } from '../../workflows/entities/workflow.entity';
import { ProcedureStatus } from './procedure-status.entity';

@Entity('procedures', { schema: 'inbox' })
export class Procedure {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'type', type: 'text' })
  type: string;

  @Column({ name: 'type_id', type: 'int' })
  typeId: number;

  @ManyToOne(() => Workflow)
  @JoinColumn({ name: 'workflow_id' })
  workflow: Workflow;

  @ManyToOne(() => WorkflowArea)
  @JoinColumn({ name: 'current_wf_area_id' })
  currentWfArea: WorkflowArea;

  @ManyToOne(() => ProcedureStatus)
  @JoinColumn({ name: 'procedure_status_id' })
  procedureStatus: ProcedureStatus;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'role_id' })
  roleId: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
