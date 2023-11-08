import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/config';

(async () => {
  const app = await NestFactory.create(AppModule);
  const { PORT } = config.args;
  await app
    .listen(PORT)
    .catch((err: Error) => console.error(err.stack))
    .finally(async () => {
      const chalk = (await import('chalk')).default;
      console.log(
        chalk.bold.green(
          `\nServer is app and running on`,
          chalk.bold.underline.green(`http://localhost:${PORT}/scraper/fibi.`),
          chalk.hex('#0000ff').italic.bold('Happy coding!'),
        ),
      );
    });
})();
