import {
  Alegreya,
  Aleo,
  Amiri,
  Asap,
  Barlow,
  Crimson_Pro,
  Fira_Sans,
  IBM_Plex_Mono,
  Inconsolata,
  Jost,
  Karla,
  Lora,
  Mulish,
  Nunito,
  Roboto,
  Rubik,
  Source_Code_Pro,
  Source_Sans_3,
  Space_Mono,
  Titillium_Web,
  Ubuntu_Mono,
  Vollkorn,
  Work_Sans
} from "next/font/google"

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})
const vollkorn = Vollkorn({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})
const lora = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})
const alegreya = Alegreya({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})
const aleo = Aleo({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})
const crimson_pro = Crimson_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})

const source_sans = Source_Sans_3({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})
const karla = Karla({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})
const work_sans = Work_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap"
})
const rubik = Rubik({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})
const fira_sans = Fira_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap"
})
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})
const barlow = Barlow({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})
const nunito = Nunito({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})
const jost = Jost({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})
const mulish = Mulish({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})
const asap = Asap({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})
const titillium_web = Titillium_Web({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})

const source_code_pro = Source_Code_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})
const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})
const space_mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})
const inconsolata = Inconsolata({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})
const ubuntu = Ubuntu_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false
})

export const FONTS_SANS = {
  source_sans,
  karla,
  work_sans,
  rubik,
  fira_sans,
  roboto,
  barlow,
  nunito,
  jost,
  mulish,
  asap,
  titillium_web
}

export const FONTS_SERIF = {
  amiri,
  vollkorn,
  lora,
  alegreya,
  aleo,
  crimson_pro
}

export const FONTS_MONO = {
  source_code_pro,
  ibm_plex_mono,
  space_mono,
  inconsolata,
  ubuntu
}
