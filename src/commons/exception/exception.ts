/** @format */

import { ErrorCode } from 'src/commons/enum/error-code.enum';

export class MyException extends Error {
	code: ErrorCode;

	constructor(code: ErrorCode, message: string) {
		super(message);
		this.code = code;
	}
}
