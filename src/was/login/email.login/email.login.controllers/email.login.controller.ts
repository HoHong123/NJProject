import { Controller, Post, Body, Inject, UseGuards } from '@nestjs/common';
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { DuckException } from 'src/commons/exception/default.exception';
import { ResponseCode } from 'src/commons/enum/error-code.enum';
import { WasService } from 'src/was/was.service';
import { EmailLoginEntity } from 'src/was/entities/was.login.entity';


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
  @ApiProperty({ example: "UUID", description: "Cached Key"})
  cacheId: string;

  constructor(uuid: string) {
    this.cacheId = uuid;
  }
}


@Controller('login/email')
export class EmailLoginController {
  constructor(
    private readonly wasService: WasService,
  ) {}

  //@UseGuards(SessionAuthGuard)
  @Post()
  async login(
    @Body() body: EmailLoginReq,
  ) : Promise<EmailLoginRes> {
    const entity = new EmailLoginEntity(body.email, body.password);

    if (!entity.isValid) throw new DuckException(ResponseCode.Validation, "Check your information.");

    const uid = await this.wasService.emailLogin(entity);
    
    return { cacheId: uid };
  }
}
