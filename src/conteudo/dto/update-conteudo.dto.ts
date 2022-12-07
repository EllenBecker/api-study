import { PartialType } from '@nestjs/mapped-types';
import { CreateConteudoDto } from './create-conteudo.dto';

export class UpdateConteudoDto extends PartialType(CreateConteudoDto) {}
