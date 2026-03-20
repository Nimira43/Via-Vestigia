import { Body, Controller, HttpCode, HttpStatus, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common'
import { GenericExceptionFilter, GenericResponse } from 'src/shared'
import { UserService } from './user.service'
import { CreateUser } from './dto/create-user.dto'

@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
  ) {} 

  @Post()
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe())
  @UseFilters(new GenericExceptionFilter)
  async createUser(@Body() body: CreateUser): Promise<GenericResponse> {
    await this.userService.createUser(body)
    return new GenericResponse('Please check your email.')
  }
}
