import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { Tag } from './Tag'
import { User } from './User'

@Entity('compliments')
export class Compliment {
  @PrimaryColumn()
  readonly id: string

  @Column()
  userSender: string

  @OneToOne(() => User)
  @JoinColumn({ name: 'userSender' })
  sender: User

  @Column()
  userReceiver: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userReceiver' })
  receiver: User

  @Column()
  tagId: string

  @JoinColumn({ name: 'tagId' })
  @ManyToOne(() => Tag)
  tag: Tag

  @Column()
  message: string

  @CreateDateColumn()
  createdAt: Date

  constructor () {
    if (!this.id) this.id = uuidv4()
  }
}
