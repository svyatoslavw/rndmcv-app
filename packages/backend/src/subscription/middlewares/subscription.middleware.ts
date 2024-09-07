import { json } from "body-parser"
import { Request, Response } from "express"

export interface RequestWithRawBody extends Request {
  rawBody: Buffer
}

const ENDPOINT = "/api/subscriptions"

function rawBodyMiddleware() {
  return json({
    verify: (request: RequestWithRawBody, response: Response, buffer: Buffer) => {
      if (request.url === ENDPOINT && Buffer.isBuffer(buffer)) {
        request.rawBody = Buffer.from(buffer)
      }
      return true
    }
  })
}

export default rawBodyMiddleware
