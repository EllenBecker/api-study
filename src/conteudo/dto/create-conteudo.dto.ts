import { IsNotEmpty, IsString } from 'class-validator';
import { EnumTipoTecnologia } from 'src/enum/EnumTipoTecnologia';

export class CreateConteudoDto {
    @IsNotEmpty()
    @IsString()
    tipoTecnologia: EnumTipoTecnologia;

    @IsNotEmpty()
    @IsString()
    descricao: string;
}
