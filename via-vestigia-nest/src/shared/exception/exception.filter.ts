import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common'
import { Request, Response } from 'express'

@Catch(HttpException)
export class GenericExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const context = host.switchToHttp()
    const response = context.getResponse<Response>()
    const request = context.getRequest<Request>()
    const status = exception.getStatus()

    response.status(status).json({
      status,
      timestamp: Date.now(),
      path: request.url,
      message: exception.message,
    })
  }
}