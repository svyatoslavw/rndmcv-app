import chromium from "@sparticuz/chromium-min"
import { type NextRequest, NextResponse } from "next/server"
import puppeteer, { type Browser } from "puppeteer"
import puppeteerCore, { type Browser as BrowserCore } from "puppeteer-core"

export const dynamic = "force-dynamic"
export const maxDuration = 60

export async function POST(req: NextRequest) {
  const { html, title } = await req.json()

  if (!html) {
    return new NextResponse("No HTML provided", { status: 400 })
  }

  // PUPPETEER CORE LOGIC
  try {
    let browser: Browser | BrowserCore

    if (process.env.NODE_ENV === "production" || process.env.VERCEL_ENV === "production") {
      const executablePath = await chromium.executablePath(
        "https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar"
      )
      browser = await puppeteerCore.launch({
        executablePath,
        args: chromium.args,
        headless: chromium.headless,
        defaultViewport: chromium.defaultViewport
      })
    } else {
      browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
      })
    }

    const page = await browser.newPage()

    await page.setContent(
      `
        <html>
        <head>
            <title>${title}</title>
            <script src="https://cdn.tailwindcss.com"></script>
          </head>
          <body>
            ${html}
          </body>
        </html>
      `,
      { waitUntil: "networkidle0" }
    )

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true
    })

    await browser.close()

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          process.env.NODE_ENV === "production"
            ? `attachment; filename="${title}.pdf"`
            : `inline; filename="${title}.pdf"`
      }
    })
  } catch (error) {
    return NextResponse.json({ message: "Failed to generate PDF" })
  }
}
