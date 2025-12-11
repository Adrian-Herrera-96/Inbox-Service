import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('workflow_items', { schema: 'inbox' })
export class WorkflowItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'wf_id' })
  wfId: string;

  @Column({ name: 'ref_id'})
  refId: string;

  @Column({ name: 'ref_type', type: 'varchar', length: 50 })
  refType: string;

  @Column({ name: 'current_step_id' })
  currentStepId: string;

  @Column({ type: 'varchar', length: 50 })
  state: string;

  @Column({ name: 'assigned_user_id', nullable: true })
  assignedUserId: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
