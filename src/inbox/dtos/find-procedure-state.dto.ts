import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class FindProcedureStateDto {
  @IsNumber()
  @IsNotEmpty()
  typeId: number;

  @IsString()
  @IsNotEmpty()
  type: string;
}
