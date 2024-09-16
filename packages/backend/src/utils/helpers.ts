const translit = (str: string) => {
  const ru =
    "А-а-Б-б-В-в-Г-г-Д-д-Е-е-Ё-ё-Ж-ж-З-з-И-и-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я".split(
      "-"
    )
  const en =
    "A-a-B-b-V-v-G-g-D-d-E-e-E-e-Zh-zh-Z-z-I-i-Y-y-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-Kh-kh-Ts-ts-Ch-ch-Sh-sh-Sh-sh-Y-y-Y-y-E-e-Yu-yu-Ya-ya".split(
      "-"
    )
  let res = ""
  for (let i = 0, l = str.length; i < l; i++) {
    const s = str.charAt(i)
    const n = ru.indexOf(s)
    if (n >= 0) {
      res += en[n]
    } else {
      res += s
    }
  }
  return res
}

export function generateSlug(str: string): string {
  let url: string = str.replace(/[\s]+/gi, "-")

  url = translit(url)

  url = url
    .replace(/[^0-9a-z_\-]+/gi, "-")
    .replace(/[-]+/gi, "-")
    .toLowerCase()
  return url
}

export function getEmailHtml(code: string): string {
  return `
          <div style="font-family: Arial, sans-serif; background-color: #ffffff; padding: 10px; text-align: center;">
              <div style="background-color: #ffffff; padding: 20px 40px; border-radius: 16px; display: inline-block;">
                  <h1 style="color: #333333;">Your Verification Code</h1>
                  <p style="color: #666666; font-size: 12px;">Use the following code to login to your account:</p>
                  <p style="color: #7c3aed; font-size: 36px; font-weight: bold;">${code}</p>
                  <p style="color: #666666; text-decoration: underline;">This code will expire in 5 minutes.</p>
              </div>
          </div>
      `
}
