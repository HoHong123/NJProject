import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class PostIdLoginDto {
    @ApiProperty({ example: "example@email.com", description: "Email"})
    @IsEmail()
    @IsNotEmpty()
    id: string;

    @ApiProperty({ example: 'password123', description: 'The password of the user' })
    @IsString()
    @IsNotEmpty()
    password: string;
}
