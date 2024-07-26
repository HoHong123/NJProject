import { ResponseCode } from "src/commons/enum/error-code.enum";

// TODO : code를 enum으로 변경
const errors = {
	400: {
	  code: ResponseCode.Validation,
	  error: 'Bad Request',
	  message: 'Validation failed.',
	},
	401: {
	  code: ResponseCode.TypeError,
	  error: 'Type Mismatch',
	  message: 'Require correct input type.',
	},
	404: {
	  code: ResponseCode.NotFound,
	  error: 'Not Found',
	  message: 'Cannot find data.',
	},
	408: {
	  code: ResponseCode.Timeout,
	  error: 'Request Timeout',
	  message: 'Fail to respond.',
	},
	default: {
	  code: ResponseCode.InternalError,
	  error: 'Internal Server Error',
	  message: 'Internal server error',
	},
	validationFailed: {
		code: ResponseCode.Validation,
		error: 'Bad Request',
		message: 'Validation failed.',
	},
	typeError: {
		code: ResponseCode.TypeError,
		error: 'Type Mismatch',
		message: 'Require correct input type.',
	},
	notFoundError: {
		code: ResponseCode.NotFound,
		error: 'Not Found',
		message: 'Cannot find data.',
	},
	timeOutError: {
		code: ResponseCode.Timeout,
		error: 'Request Timeout',
		message: 'Fail to respond.',
	},
};

export default errors;