import { getCustomRepository } from 'typeorm'
import { User } from '../entities/User'
import { UsersRepository } from '../repositories/UsersRepository'
import { hash } from 'bcryptjs'

interface IUserRequest {
  name: string
  email: string
  password: string
  isAdmin: boolean
}

export class CreateUserService {
  async execute ({ name, email, password, isAdmin }: IUserRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository)

    const userExists = await usersRepository.findOne({ email })

    if (userExists) throw new Error('User already exists')

    if (!email) throw new Error('Invalid email')

    const passwordHash = await hash(password, 12)

    const user = usersRepository.create({
      name,
      email,
      password: passwordHash,
      isAdmin
    })

    await usersRepository.save(user)

    return user
  }
}
