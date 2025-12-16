import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from './user.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Controller('users')
export class UserController {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {

  }
  
  @Post()
  @HttpCode(HttpStatus.OK)
  async createUser(
    @Body()
    body: any 
  ) {
    const user = {
      name: body.email.split('@')[0],
      handle: body.email.split('@')[0],
      email: body.email,
    }
    await this.userRepository.save(user)
    return 'Success'
  }
}
