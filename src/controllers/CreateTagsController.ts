import { Request, Response } from 'express'
import { CreateTagsService } from '../services/CreateTagsService'

export class CreateTagsController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { name } = request.body

    const createTagsService = new CreateTagsService()

    const tag = await createTagsService.execute(name)

    return response.status(201).json(tag)
  }
}
