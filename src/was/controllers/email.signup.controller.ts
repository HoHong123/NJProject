import { Controller, Post, Body } from '@nestjs/common';
import { WasService } from '../was.service';
import { EmailLoginEntity as EmailLoginEntity } from '../entities/was.login.entity';

@Controller('signup/email')
export class EmailSignupController {
  constructor(private readonly wasService: WasService) {}
  
  @Post()
  async signup(@Body() body: EmailLoginReq){
    let entity = new EmailLoginEntity(body.email, body.password);
    return await this.wasService.emailSignup(entity);
  }
}
