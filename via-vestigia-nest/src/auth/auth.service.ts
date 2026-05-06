import { Injectable } from '@nestjs/common'
import { AuthRequest } from './dto/auth-request.dto'

@Injectable()
export class AuthService {
  handleAuth(request: AuthRequest) {
    
  }
}
