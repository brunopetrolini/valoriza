import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUsersService'

export class CreateUserController {
  async handle (req: Request, res: Response): Promise<Response> {
    const createUserService = new CreateUserService()

    const { name, email, isAdmin } = req.body

    const user = await createUserService.execute({ name, email, isAdmin })

    return res.status(201).json(user)
  }
}
