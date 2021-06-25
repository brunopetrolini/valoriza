import { getCustomRepository } from 'typeorm'
import { Tag } from '../entities/Tag'
import { TagsRepository } from '../repositories/TagsRepository'

export class ListTagsService {
  async execute (): Promise<Tag[]> {
    const tagsRepository = getCustomRepository(TagsRepository)
    return await tagsRepository.find()
  }
}
