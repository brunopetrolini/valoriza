import { Request, Response } from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService'

export class AuthenticateUserController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    const authenticateUserService = new AuthenticateUserService()

    const token = await authenticateUserService.authenticate({ email, password })

    return response.status(200).json({ token })
  }
}
