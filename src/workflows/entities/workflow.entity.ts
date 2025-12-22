import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { WorkflowSequence } from './workflow-sequence.entity';

@Entity('workflows')
export class Workflow {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'module_id', type: 'int', nullable: false })
  moduleId: number;

  @Column({ name: 'name', type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ name: 'shortened', type: 'varchar', length: 100, nullable: false })
  shortened: string;

  @OneToMany(() => WorkflowSequence, (sequence) => sequence.workflow)
  sequences: WorkflowSequence[];
}
