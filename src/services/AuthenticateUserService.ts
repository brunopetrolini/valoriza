import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface IAuthenticateRequest {
  email: string
  password: string
}

export class AuthenticateUserService {
  async authenticate ({ email, password }: IAuthenticateRequest): Promise<string> {
    const usersRepository = getCustomRepository(UsersRepository)

    const user = await usersRepository.findOne({ email })
    if (!user) throw new Error('Email/Password incorrect')

    const passwordCompare = await compare(password, user.password)
    if (!passwordCompare) throw new Error('Email/Password incorrect')

    const token = sign(
      { email: user.email },
      String(process.env.JWT_SECRET),
      { subject: user.id, expiresIn: '1d' }
    )

    return token
  }
}
