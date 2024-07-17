import { Controller, Post, Body } from '@nestjs/common';
import { WasService } from '../was.service';
import { EmailLoginEntity as EmailLoginEntity } from '../entities/was.login.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

class EmailSignupReq {
  @ApiProperty({ example: "example@email.com", description: "Email"})
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'password123', description: 'The password of the user' })
  @IsString()
  @IsNotEmpty()
  password: string;
}

class EmailSignupRes {
  @ApiProperty({ example: "example@email.com", description: "Email"})
  email: string;

  constructor(email: string) {
    this.email = email;
  }
}


@Controller('signup/email')
export class EmailSignupController {
  constructor(private readonly wasService: WasService) {}
  
  @Post()
  async signup(
    @Body() body: EmailSignupReq
  ) : Promise<EmailSignupRes> {
    const entity = new EmailLoginEntity(body.email, body.password);
    const res = await this.wasService.emailSignup(entity);
    return { email: res };
  }
}
