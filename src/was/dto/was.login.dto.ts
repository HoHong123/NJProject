import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class EmailLoginReq {
    @ApiProperty({ example: "example@email.com", description: "Email"})
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: 'password123', description: 'The password of the user' })
    @IsString()
    @IsNotEmpty()
    password: string;
}

export class EmailLoginRes {
    email: string;
}
