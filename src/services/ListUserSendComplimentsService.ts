import { getCustomRepository } from 'typeorm'
import { Compliment } from '../entities/Compliment'
import { ComplimentsRepository } from '../repositories/ComplimentsRepository'

export class ListUserSendComplimentsService {
  async execute (userId: string): Promise<Compliment[]> {
    const complimentsRepository = getCustomRepository(ComplimentsRepository)

    const compliments = await complimentsRepository.find({
      where: {
        userSender: userId
      }
    })

    return compliments
  }
}
