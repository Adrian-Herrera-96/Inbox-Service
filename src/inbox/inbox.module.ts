import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InboxController } from './inbox.controller';
import { InboxService } from './inbox.service';
import { Procedure } from './entities/procedure.entity';
import { ProcedureHistory } from './entities/procedure-history.entity';
import { WorkflowsModule } from '../workflows/workflows.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Procedure, ProcedureHistory]),
    WorkflowsModule,
  ],
  controllers: [InboxController],
  providers: [InboxService],
  exports: [InboxService],
})
export class InboxModule {}
