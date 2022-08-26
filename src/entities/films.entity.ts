import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Actors } from './actors.entity'

@Entity()
export class Films {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false, type: 'varchar', length: 64 })
  title: string

  @ManyToOne(() => Actors, (actor) => actor.films, {
    onDelete: 'CASCADE',
  })
  actor: Actors
}
