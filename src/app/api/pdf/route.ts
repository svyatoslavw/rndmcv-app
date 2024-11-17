import { NextRequest, NextResponse } from "next/server"
import puppeteer from "puppeteer"

export async function POST(req: NextRequest) {
  try {
    const { html } = await req.json()

    if (!html) {
      return new NextResponse("No HTML provided", { status: 400 })
    }

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    })

    const page = await browser.newPage()
    const script = '<script src="https://cdn.tailwindcss.com"></script>'

    await page.setContent(
      `
        <html>
          <head>
            ${script}
          </head>
          <body>
            ${html}
          </body>
        </html>
      `,
      { waitUntil: "domcontentloaded" }
    )

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true
    })

    await browser.close()

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=resume.pdf"
      }
    })
  } catch (error) {
    return NextResponse.json({ message: "Failed to generate PDF" })
  }
}
