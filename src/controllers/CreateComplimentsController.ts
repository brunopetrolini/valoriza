import { Request, Response } from 'express'
import { CreateComplimentService } from '../services/CreateComplimentService'

export class CreateComplimentsController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { tagId, userReceiver, message } = request.body
    const { userId } = request

    const createComplimentService = new CreateComplimentService()

    const compliment = await createComplimentService.execute({
      tagId,
      userSender: userId,
      userReceiver,
      message
    })

    return response.status(201).json(compliment)
  }
}
