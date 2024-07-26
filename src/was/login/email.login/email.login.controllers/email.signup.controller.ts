import { Controller, Post, Body } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { DuckException } from 'src/commons/exception/default.exception';
import { ResponseCode } from 'src/commons/enum/error-code.enum';
import { WasService } from 'src/was/was.service';
import { EmailLoginEntity, EmailSignupEntity } from 'src/was/entities/was.login.entity';

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
    const entity = new EmailSignupEntity('UNKNOWN', body.email, body.password);
    
    if (!entity.isValid) throw new DuckException(ResponseCode.Validation, "Check your information.");

    const res = await this.wasService.emailSignup(entity);
    return { email: res };
  }
}
