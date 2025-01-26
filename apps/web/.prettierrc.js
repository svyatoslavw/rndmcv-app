import { prettier } from "@rndm/prettier"

export default {
  ...prettier,
  importOrder: ["<THIRD_PARTY_MODULES>", "^./src/(.*)$", "^../(.*)", "^./(.*)", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["prettier-plugin-tailwindcss", "@trivago/prettier-plugin-sort-imports"]
}
