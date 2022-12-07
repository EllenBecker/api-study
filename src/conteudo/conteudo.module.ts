import { Module } from '@nestjs/common';
import { ConteudoService } from './conteudo.service';
import { ConteudoController } from './conteudo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conteudo } from './entities/conteudo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Conteudo])],
  controllers: [ConteudoController],
  providers: [ConteudoService],
  exports: [ConteudoService]
})
export class ConteudoModule {}
