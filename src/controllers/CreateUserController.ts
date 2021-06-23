import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUsersService'

export class CreateUserController {
  async handle (request: Request, response: Response): Promise<Response> {
    const createUserService = new CreateUserService()

    const { name, email, isAdmin } = request.body

    const user = await createUserService.execute({ name, email, isAdmin })

    return response.status(201).json(user)
  }
}
