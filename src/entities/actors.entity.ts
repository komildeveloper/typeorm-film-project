import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Films } from './films.entity'

@Entity()
export class Actors {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false, type: 'varchar', length: 255 })
  name: string

  @Column({ nullable: false, type: 'bigint' })
  age: number

  @OneToMany(() => Films, (film) => film.actor)
  films: Films[]
}
