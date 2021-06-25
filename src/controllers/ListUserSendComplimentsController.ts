import { Request, Response } from 'express'
import { ListUserSendComplimentsService } from '../services/ListUserSendComplimentsService'

export class ListUserSendComplimentsController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { userId } = request

    const listUserSendComplimentsService = new ListUserSendComplimentsService()

    const compliments = await listUserSendComplimentsService.execute(userId)
    return response.status(200).json(compliments)
  }
}
