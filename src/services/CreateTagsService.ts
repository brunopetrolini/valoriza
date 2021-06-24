import { getCustomRepository } from 'typeorm'
import { Tag } from '../entities/Tag'
import { TagsRepository } from '../repositories/TagsRepository'

export class CreateTagsService {
  async execute (name: string): Promise<Tag> {
    const tagsRepository = getCustomRepository(TagsRepository)

    if (!name) throw new Error('Invalid name')

    const tagExists = await tagsRepository.findOne({ name })

    if (tagExists) throw new Error('Tag name already exists')

    const tag = tagsRepository.create({ name })

    const result = await tagsRepository.save(tag)

    return result
  }
}
