import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3210;

  await app.listen(process.env.PORT ?? PORT);

  console.log(`Server running on port ${PORT}`);
}
bootstrap();
