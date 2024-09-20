import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { BadRequestException, Injectable } from "@nestjs/common"

import { ConfigService } from "@nestjs/config"
@Injectable()
export class UploadService {
  constructor(private readonly configService: ConfigService) {}

  private readonly region = this.configService.getOrThrow("AWS_S3_REGION")

  private readonly s3Client = new S3Client({
    region: this.region,
    credentials: {
      accessKeyId: this.configService.getOrThrow("AWS_ACCESS_KEY_ID"),
      secretAccessKey: this.configService.getOrThrow("AWS_SECRET_ACCESS_KEY")
    }
  })

  async upload(fileName: string, file: Buffer) {
    const contentType = fileName.split(".")[1] === "png" ? "png" : "jpeg"
    const bucket = "rndmcv-uploader"

    const image = await this.s3Client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: fileName,
        Body: file,
        ContentType: `image/${contentType}`,
        ContentDisposition: "attachment",
        ACL: "public-read"
      })
    )

    if (!image) throw new BadRequestException("Image not uploaded")

    // const command = new GetObjectCommand({
    //   Bucket: bucket,
    //   Key: fileName,
    //   ResponseContentType: `application/octet-stream`,
    //   ResponseContentDisposition: "inline"
    // })

    // const url = await getSignedUrl(this.s3Client, command, { expiresIn: 604800  }) // 7 days

    const url = `https://${bucket}.s3.${this.region}.amazonaws.com/${fileName}`

    return { url }
  }
}
