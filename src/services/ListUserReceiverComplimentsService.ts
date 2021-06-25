import { getCustomRepository } from 'typeorm'
import { Compliment } from '../entities/Compliment'
import { ComplimentsRepository } from '../repositories/ComplimentsRepository'

export class ListUserReceiverComplimentsService {
  async execute (userId: string): Promise<Compliment[]> {
    const complimentsRepository = getCustomRepository(ComplimentsRepository)

    const compliments = await complimentsRepository.find({
      where: {
        userReceiver: userId
      },
      relations: ['sender', 'receiver', 'tag']
    })

    return compliments
  }
}
