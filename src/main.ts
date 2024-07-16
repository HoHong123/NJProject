import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


// Swagger setting
function loadAPIDocumentSettings(app: INestApplication) {
  if (
    process.env.ENVIRONMENT === 'local' ||
    process.env.ENVIRONMENT === 'dev'
  ) {
    const config = new DocumentBuilder()
      .setTitle('PKH example')
      .setDescription('The PKH API description')
      .setVersion('1.0')
      .addTag('PKH')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // swagger
  loadAPIDocumentSettings(app);

  await app.listen(3000);
}
bootstrap();
