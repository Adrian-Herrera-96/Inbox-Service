import { HttpStatus, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindProcedureStateDto } from './dtos/find-procedure-state.dto';
import { ProcedureStateDto } from './dtos/procedure-state.dto';
import { Procedure } from './entities/procedure.entity';

@Injectable()
export class InboxService {
  constructor(
    @InjectRepository(Procedure)
    private readonly procedureRepository: Repository<Procedure>,
  ) {}

  async findProcedureCurrentState(
    data: FindProcedureStateDto,
  ): Promise<ProcedureStateDto> {
    const { typeId, type } = data;
    const procedure = await this.procedureRepository.findOne({
      where: { typeId, type },
      relations: ['currentWfState'],
    });

    if (!procedure || !procedure.currentWfState) {
      throw new RpcException({
        message: `No se pudo encontrar el estado actual para el procedimiento con typeId #${typeId} y type '${type}'`,
        code: HttpStatus.NOT_FOUND,
      });
    }

    return {
      name: procedure.currentWfState.name,
      shortened: procedure.currentWfState.firstShortened,
    };
  }
}
