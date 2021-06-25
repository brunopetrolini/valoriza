import { NextFunction, Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository'

export async function ensureAdmin (request: Request, response: Response, next: NextFunction): Promise<any> {
  const { userId } = request

  const usersRepository = getCustomRepository(UsersRepository)

  const user = await usersRepository.findOne(userId)
  if (user?.isAdmin) return next()

  return response.status(401).json({
    error: 'Unauthorized'
  })
}
