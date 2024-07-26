import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { DuckException } from 'src/commons/exception/default.exception';
import { ResponseCode } from 'src/commons/enum/error-code.enum';
import { WasService } from 'src/was/was.service';
import { SessionAuthGuard } from '../../session.login/session.login.guard/session.guard';
import { SessionLoginEntity } from 'src/was/entities/was.login.entity';


// TODO : Dto로 따로 작성하여도 되지만, API와 Dto를 1대1 관계로 유지하는 것이 개발을 효율적으로 만든다.
class SessionReq {
  @ApiProperty({ example: "UUID", description: "Cached Key"})
  @IsNotEmpty()
  cacheId: string;
}

class SessionRes {
  @ApiProperty({ example: "UUID", description: "Cached Key"})
  cacheId: string;

  constructor(uuid: string) {
    this.cacheId = uuid;
  }
}


@Controller('login/session')
export class EmailLoginController {
  constructor(
    private readonly wasService: WasService,
  ) {}

  @UseGuards(SessionAuthGuard)
  @Post()
  async login(
    @Body() body: SessionReq,
  ) : Promise<SessionRes> {
    const entity = new SessionLoginEntity(body.cacheId);

    if (!entity.isValid) throw new DuckException(ResponseCode.Validation, "Check your information.");

    const uid = await this.wasService.sessionLogin(entity);
    
    return { cacheId: uid };
  }
}
