import { Controller, Post, Body } from '@nestjs/common';
import { WasService } from '../was.service';
import { EmailLoginEntity } from '../entities/was.login.entity';
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

// TODO : Dto로 따로 작성하여도 되지만, API와 Dto를 1대1 관계로 유지하는 것이 개발을 효율적으로 만든다.
class EmailLoginReq {
  @ApiProperty({ example: "example@email.com", description: "Email"})
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'password123', description: 'The password of the user' })
  @IsString()
  @IsNotEmpty()
  password: string;
}

class EmailLoginRes {
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
  async login(
    @Body() body: EmailLoginReq
  ) : Promise<EmailLoginRes> {
    const entity = new EmailLoginEntity(body.email, body.password);
    const res = await this.wasService.emailLogin(entity);
    return { email: res };
  }
}
