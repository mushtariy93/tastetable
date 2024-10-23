import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as cookieParser from "cookie-parser";

async function start() {
  try {
    const API_PORT = process.env.API_PORT;
    const app = await NestFactory.create(AppModule);
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix("/api");
    const config = new DocumentBuilder()
      .setTitle("TasteTable project")
      .setDescription("TasteTable project ReS API")
      .setVersion("1.0")
      .addTag("NestJs")
      .addTag("Validation")
      .addTag("Swagger")
      .addTag("Guard")
      .addTag("Sequelize")
      .addTag("PG")
      .addTag("Mailer")
      .addTag("Bot")
      .addTag("SMS")
      .addTag("Cookie")
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api/docs", app, document);
    await app.listen(API_PORT, () => {
      console.log(`Server running at port ${API_PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
