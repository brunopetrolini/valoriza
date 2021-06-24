import { Repository } from 'typeorm'
import { Tag } from '../entities/Tag'

export class TagsRepository extends Repository<Tag> {}
