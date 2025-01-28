import pkg from "@rndm/prettier"

export default {
  ...pkg.prettier,
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^./src/(.*)$",
    "^@app/(.*)$",
    "^@entities/(.*)$",
    "^@pages_/(.*)$",
    "^@shared/(.*)$",
    "^@widgets/(.*)$",
    "^@features/(.*)$",
    "^../(.*)",
    "^./(.*)",
    "^[./]"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"]
}
