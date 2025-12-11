import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InboxController } from './inbox.controller';
import { InboxService } from './inbox.service';
import { WorkflowItem } from './entities/workflow-item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkflowItem]),
  ],
  controllers: [InboxController],
  providers: [InboxService],
  exports: [InboxService],
})
export class InboxModule {}
