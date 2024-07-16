/** @format */

import { ErrorCode } from 'src/commons/enum/error-code.enum';

export class DuckException extends Error {
	public readonly code: ErrorCode;

	constructor(code: ErrorCode, message: string) {
		super(message);
		this.code = code;
	}
}
