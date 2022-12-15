import { EnumTipoTecnologia } from 'src/enum/EnumTipoTecnologia';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('conteudo', { synchronize: true })
export class Conteudo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'tipo_tecnologia' })
    tipoTecnologia: EnumTipoTecnologia;

    @Column()
    titulo: string;

    @Column()
    descricao: string;

    @CreateDateColumn({ name: 'created_date' })
    createdDate: Date;

    @UpdateDateColumn({ name: 'update_date' })
    updateDate: Date;
}
