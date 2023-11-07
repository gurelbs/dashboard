import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env['PORT'] || 3000;
  const chalk = (await import('chalk')).default;

  await app.listen(PORT, () => console.log(
    chalk.bold.green(`\nserver is app and running on`,
    chalk.bold.underline.green(`http://localhost:${PORT}.`),
    chalk.hex('#0000ff').italic.bold('Happy coding!')
  )));
}
bootstrap();
