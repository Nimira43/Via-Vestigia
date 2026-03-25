import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common'
import { Request, Response } from 'express'

@Catch(HttpException)
export class GenericExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctxt = host.switchToHttp()
    const response = ctxt.getResponse<Response>()
    const request = ctxt.getRequest<Request>()
    const status = exception.getStatus()
    console.log(JSON.stringify(exception, null, 2))

    response.status(status).json({
      status,
      timestamp: Date.now(),
      path: request.url,
      message: exception.message,
    })
  }
}