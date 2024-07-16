/** @format */

export enum ErrorCode {
	Validation 			= 400,
	TypeError 			= 401,
	Forbidden 			= 403,
	NotFound 			= 404,
	MethodNotAllowed 	= 405,
	NotAcceptable		= 406,
	ProxyRequired 		= 407,
	Timeout				= 408,
	Conflict 			= 409,
	Gone 				= 410,

	InternalError 		= 500,
	NotImplemented 		= 501,
	BadGateway 			= 502,
	ServiceUnavaliable 	= 503,
}

export enum SuccessCode {
	Success 			= 200,
	SuccessWithResult 	= 201,
}

export default interface Testing {
	help: Response;
}

// 다국어 처리
// + 클라이언트가 따로 있는 구조에서는 클라이언트가 다국어를 지원해 줄 수 있다.