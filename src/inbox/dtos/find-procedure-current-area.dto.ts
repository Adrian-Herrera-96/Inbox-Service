import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class FindProcedureCurrentAreaDto {
  @IsNumber()
  @IsNotEmpty()
  typeId: number;

  @IsString()
  @IsNotEmpty()
  type: string;
}
