import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3210;

  const config = new DocumentBuilder()
    .setTitle('Todo Documentation')
    .setDescription('A documentation for CRUD Todo Application')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apidocs', app, document);

  await app.listen(process.env.PORT ?? PORT);

  console.log(`Server running on port ${PORT}`);
}
bootstrap();
