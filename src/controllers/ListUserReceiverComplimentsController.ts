import { Request, Response } from 'express'
import { ListUserReceiverComplimentsService } from '../services/ListUserReceiverComplimentsService'

export class ListUserReceiverComplimentsController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { userId } = request

    const listUserReceiverComplimentsService = new ListUserReceiverComplimentsService()

    const compliments = await listUserReceiverComplimentsService.execute(userId)
    return response.status(200).json(compliments)
  }
}
