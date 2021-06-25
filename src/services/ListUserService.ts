import { getCustomRepository } from 'typeorm'
import { classToPlain } from 'class-transformer'
import { UsersRepository } from '../repositories/UsersRepository'

export class ListUserService {
  async execute (): Promise<any> {
    const usersRepository = getCustomRepository(UsersRepository)

    const users = await usersRepository.find()
    return classToPlain(users)
  }
}
