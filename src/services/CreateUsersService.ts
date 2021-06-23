import { User } from '../entities/User'
import { UsersRepository } from '../repositories/UsersRepository'

interface IUserRequest {
  name: string
  email: string
  isAdmin: boolean
}

export class CreateUserService {
  async execute ({ name, email, isAdmin }: IUserRequest): Promise<User> {
    const usersRepository = new UsersRepository()

    const userExists = await usersRepository.findOne({ email })

    if (userExists) throw new Error('User already exists')

    if (!email) throw new Error('Invalid email')

    const user = usersRepository.create({
      name,
      email,
      isAdmin
    })

    await usersRepository.save(user)

    return user
  }
}
