import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { Expose } from 'class-transformer'
import { v4 as uuidv4 } from 'uuid'

@Entity('tags')
export class Tag {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @Expose({ name: 'nameCustom' })
  nameCustom (): string {
    return `#${this.name}`
  }

  constructor () {
    if (!this.id) this.id = uuidv4()
  }
}
