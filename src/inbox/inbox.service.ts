import { HttpStatus, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindProcedureStateDto } from './dtos/find-procedure-state.dto';
import { Procedure } from './entities/procedure.entity';
import { ProcedureCurrentArea } from './interfaces/procedure-current-area';

@Injectable()
export class InboxService {
  constructor(
    @InjectRepository(Procedure)
    private readonly procedureRepository: Repository<Procedure>,
  ) {}

  async findProcedureCurrentState(
    data: FindProcedureStateDto,
  ): Promise<ProcedureCurrentArea> {
    const { typeId, type } = data;
    const procedure = await this.procedureRepository.findOne({
      where: { typeId, type },
      relations: ['currentWfArea'],
    });

    if (!procedure || !procedure.currentWfArea) {
      throw new RpcException({
        message: `No se pudo encontrar el estado actual para el trámite con id ${typeId} y tipo de trámite '${type}'`,
        code: HttpStatus.NOT_FOUND,
      });
    }

    return {
      name: procedure.currentWfArea.name,
      shortened: procedure.currentWfArea.Shortened,
    };
  }
}
