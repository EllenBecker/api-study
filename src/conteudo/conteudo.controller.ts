import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConteudoService } from './conteudo.service';
import { CreateConteudoDto } from './dto/create-conteudo.dto';
import { UpdateConteudoDto } from './dto/update-conteudo.dto';

@Controller('conteudo')
export class ConteudoController {
  constructor(private readonly conteudoService: ConteudoService) {}

  @Post()
  create(@Body() createConteudoDto: CreateConteudoDto) {
    return this.conteudoService.create(createConteudoDto);
  }

  @Get()
  findAll() {
    return this.conteudoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conteudoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConteudoDto: UpdateConteudoDto
  ) {
    return this.conteudoService.update(+id, updateConteudoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conteudoService.remove(+id);
  }
}
