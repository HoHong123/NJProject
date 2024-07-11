/** @format */

import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import errors from 'configs/error.config';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
	// Add Logger later
    private readonly logger = new Logger("HttpException");

	catch(exception: HttpException, host: ArgumentsHost) {
		const context 	= host.switchToHttp();
		const response 	= context.getResponse<Response>();
		const request 	= context.getRequest<Request>();
		const ctxStatus = exception.getStatus();

		// Log the exception before response
		this.logger.error(`${request.method} ${ctxStatus} : ${exception.message} \'${request.originalUrl}\'`);

		const errorDetail = errors[ctxStatus] || errors.default;
		response.status(ctxStatus).json({
			code: errorDetail.code,
			path: request.url,
			error: errorDetail.error,
			message: errorDetail.message,	
			timestamp: new Date().toISOString(),
		});
	}
}

// MyException 전용 스크립트 작성
// + 서버 내부 로직 에러를 핸들링 해야함
// + 코어 에러 처리
// + Node 에러 처리

// 에러를 위한 필터링
// + 외부 라이브러리로 인한 에러를 처리하는 필터 기능 필수