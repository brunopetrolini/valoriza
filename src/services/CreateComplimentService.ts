import { getCustomRepository } from 'typeorm'
import { Compliment } from '../entities/Compliment'
import { ComplimentsRepository } from '../repositories/ComplimentsRepository'
import { UsersRepository } from '../repositories/UsersRepository'

interface IComplimentRequest {
  tagId: string
  userSender: string
  userReceiver: string
  message: string
}

export class CreateComplimentService {
  async execute ({ tagId, userSender, userReceiver, message }: IComplimentRequest): Promise<Compliment> {
    const complimentsRepository = getCustomRepository(ComplimentsRepository)
    const usersRepository = getCustomRepository(UsersRepository)

    const userReceiverExists = await usersRepository.findOne(userReceiver)

    if (userSender === userReceiver) throw new Error('Incorrect user receiver')

    if (!userReceiverExists) throw new Error('User receiver does not exists')

    const compliment = complimentsRepository.create({
      tagId,
      userSender,
      userReceiver,
      message
    })

    await complimentsRepository.save(compliment)

    return compliment
  }
}
