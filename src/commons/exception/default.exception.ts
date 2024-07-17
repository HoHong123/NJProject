/** @format */

import { ResponseCode } from 'src/commons/enum/error-code.enum';

export class DuckException extends Error {
	public readonly code: ResponseCode;

	constructor(code: ResponseCode, message: string) {
		super(message);
		this.code = code;
	}
}
