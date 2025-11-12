import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS for all routes
  await app.listen(3000);
  console.log('NestJS server is running on http://localhost:3000');
}

bootstrap().catch((error) => {
  console.error('Failed to start the application:', error);
  process.exit(1);
});