import { Request, Response } from 'express';
import { DuckException } from 'src/commons/exception/default.exception';
import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, Logger } from '@nestjs/common';
import errors from 'src/configs/error.config';

@Catch(DuckException)
export class DuckExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger("Duckception");

  catch(exception: DuckException, host: ArgumentsHost) {
    const ctx        = host.switchToHttp();
    const response   = ctx.getResponse<Response>();
    const request    = ctx.getRequest<Request>();
    const status     = exception.code;

    // Log the exception before response
    this.logger.error(`${request.method} ${ctx} : ${exception.message} \'${request.originalUrl}\'`);

    response.status(status).json({
      code: status,
      path: request.url,
      error: errors[status],
      message: exception.message,
      timestamp: new Date().toISOString(),
    });
  }
}
