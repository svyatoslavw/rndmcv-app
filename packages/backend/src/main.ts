import { NestFactory } from "@nestjs/core"

import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { AppModule } from "./app.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix("api")

  const config = new DocumentBuilder()
    .setTitle("RNDMCV Builder")
    .setDescription("RNDMCV API")
    .setVersion("1.0")
    .setContact("Svyatoslavw", "https://github.com/svyatoslavw", "sviatoslavvww@gmail.com")
    .setLicense("MIT License", "https://github.com/svyatoslavw/cv-editor/blob/main/LICENSE")
    .addBearerAuth({ in: "header", type: "http" })
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api/docs", app, document)

  await app.listen(process.env.PORT || 4000)
}
bootstrap()
