import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('procedure_status', { schema: 'inbox' })
export class ProcedureStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;
}