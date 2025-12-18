import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { WorkflowSequence } from './workflow-sequence.entity';

@Entity('workflows')
export class Workflow {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'module_id', type: 'varchar', nullable: false })
  moduleId: string;

  @Column({ name: 'name', type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ name: 'shortened', type: 'varchar', length: 100, nullable: false })
  shortened: string;

  @OneToMany(() => WorkflowSequence, (sequence) => sequence.workflow)
  sequences: WorkflowSequence[];
}
