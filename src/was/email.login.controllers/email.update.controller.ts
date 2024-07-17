import { Controller, Post, Body } from '@nestjs/common';
import { WasService } from '../was.service';
import { EmailLoginEntity } from '../entities/was.login.entity';
import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString } from "class-validator";

class EmailUpdateReq {
  @ApiProperty({ example: "MyName01", description: "Nickname"})
  @IsAlphanumeric()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "example@email.com", description: "Email"})
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'password123', description: 'The password of the user' })
  @IsString()
  @IsNotEmpty()
  password: string;
}

class EmailUpdateRes {
  @ApiProperty({ example: "example@email.com", description: "Email"})
  email: string;

  constructor(email: string) {
    this.email = email;
  }
}


@Controller('login/email')
export class EmailLoginController {
  constructor(private readonly wasService: WasService) {}

  @Post()
  async update(
    @Body() body: EmailUpdateReq
  ) : Promise<EmailUpdateRes> {
    const entity = new EmailLoginEntity(body.email, body.password);
    const res = await this.wasService.emailLogin(entity);
    return { email: res };
  }
}
