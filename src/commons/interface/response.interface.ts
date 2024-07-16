/** @format */

import Testing, { ErrorCode, SuccessCode } from 'src/commons/enum/error-code.enum';

export default interface Response {
	code: ErrorCode;
	code2: SuccessCode;
	test: Testing;
	message: string;
	data: any; // any 주의, 컨트롤러나 모듈에서는 사용을 금한다.
}
