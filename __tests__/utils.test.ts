import { isDate } from "@/shared/lib/utils"

describe("isDate", () => {
  test("Should return true", () => {
    expect(isDate(new Date())).toBe(true)
    expect(isDate(new Date(0))).toBe(true)
  })
  test("Should return false", () => {
    expect(isDate(0)).toBe(false)
    expect(isDate({})).toBe(false)
    expect(isDate("2020-01-01")).toBe(false)
  })
})
