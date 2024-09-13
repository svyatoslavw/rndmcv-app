import en from "./src/shared/lib/dictionaries/en.json"

type Messages = typeof en

declare global {
  interface IntlMessages extends Messages {}
}
