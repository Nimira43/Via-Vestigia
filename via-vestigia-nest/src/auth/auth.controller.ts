import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthRequest } from './dto/auth-request.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  
  @Post()
  @HttpCode(HttpStatus.OK)
  handleAuth(@Body() body: AuthRequest) {
    this.authService.handleAuth(body)
  }

}
