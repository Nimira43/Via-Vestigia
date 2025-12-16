import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Repository } from 'typeorm'
import { CreateUser } from './dto/create-user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}
  
  async createUser(
    body: CreateUser
  ): Promise<void> {
    const user = {
      name: body.email.split('@')[0],
      handle: body.email.split('@')[0],
      email: body.email,
    }
    await this.userRepository.save(body)
  }
}
