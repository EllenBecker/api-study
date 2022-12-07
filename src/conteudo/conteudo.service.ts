import { Injectable } from '@nestjs/common';
import { CreateConteudoDto } from './dto/create-conteudo.dto';
import { UpdateConteudoDto } from './dto/update-conteudo.dto';
import { Conteudo } from './entities/conteudo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ConteudoService {
  constructor(
    @InjectRepository(Conteudo)
    private conteudoRepository: Repository<Conteudo>
  ) {}
  async create(createConteudoDto: CreateConteudoDto): Promise<Conteudo> {
    return await this.conteudoRepository.save(createConteudoDto);
  }

  findAll(): Promise<Array<Conteudo>> {
    return this.conteudoRepository.find();
  }

  findOne(id: number): Promise<Conteudo> {
    return this.conteudoRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateConteudoDto: UpdateConteudoDto
  ): Promise<Conteudo> {
    const conteudo = await this.conteudoRepository.findOne({ where: { id } });

    return this.conteudoRepository.save({ ...conteudo, ...updateConteudoDto });
  }

  async remove(id: number): Promise<Conteudo> {
    const conteudo = await this.conteudoRepository.findOne({ where: { id } });

    return this.conteudoRepository.remove(conteudo);
  }
}
