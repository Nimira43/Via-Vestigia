import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { GenericResponse } from 'src/shared'
import { UserService } from './user.service'
import { CreateUser } from './dto/create-user.dto'

@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
  ) {} 

  @Post()
  @HttpCode(HttpStatus.OK)
  async createUser(
    @Body()
    body: CreateUser
  ): Promise<GenericResponse> {
    const user = {
      name: body.email.split('@')[0],
      handle: body.email.split('@')[0],
      email: body.email,
    }
    await this.userService.createUser(user)
    return new GenericResponse('Please check your email.')
  }
}
