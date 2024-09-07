import { NestFactory } from "@nestjs/core"

import { Logger } from "@nestjs/common"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import * as cookieParser from "cookie-parser"
import * as session from "express-session"
import * as passport from "passport"
import { AppModule } from "./app.module"
import rawBodyMiddleware from "./subscription/middlewares/subscription.middleware"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix("api")

  app.use(cookieParser())
  app.use(
    session({
      name: "sessionToken",
      secret: process.env.SESSION_SECRET,
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 0
      }
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(rawBodyMiddleware())

  app.enableCors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type, Authorization, Access-Control-Allow-Origin"],
    credentials: true,
    exposedHeaders: ["set-cookie"]
  })

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
  Logger.log(
    `🚀 Application is running on: http://localhost:${process.env.PORT || 4000}/api`,
    "NestApplication"
  )
}
bootstrap()
