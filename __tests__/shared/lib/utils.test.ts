import {
  convertValueFromObject,
  debounce,
  formatLocation,
  formatSeconds,
  isDate,
  toSizeObject
} from "@/shared/lib/utils"
import { TypeSize } from "@/shared/types"

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

describe("convertValueFromObject", () => {
  const sizeMap: Record<number, TypeSize> = {
    1: "S",
    2: "M",
    3: "L",
    4: "XL"
  }

  test.each([
    [1, "S"],
    [2, "M"],
    [3, "L"],
    [4, "XL"]
  ])("Should return mapped value for valid key %p", (key, expected) => {
    expect(convertValueFromObject(key, sizeMap)).toBe(expected)
  })

  test.each([
    [0, "unknown"],
    [5, "unknown"],
    [-1, "unknown"]
  ])("Should return 'unknown' for invalid key %p", (key, expected) => {
    expect(convertValueFromObject(key, sizeMap)).toBe(expected)
  })

  test("Should return 'unknown' for empty map", () => {
    const emptyMap: Record<number, TypeSize> = {}
    expect(convertValueFromObject(1, emptyMap)).toBe("unknown")
  })
})

describe("debounce", () => {
  jest.useFakeTimers()

  test("Should return a function", () => {
    const func = jest.fn()

    const debouncedFunc = debounce(func, 100)

    expect(typeof debouncedFunc).toBe("function")
  })

  test("Should call the function after the specified delay", () => {
    const func = jest.fn()
    const debouncedFunc = debounce(func, 100)

    debouncedFunc()

    expect(func).not.toHaveBeenCalled()

    jest.advanceTimersByTime(100)

    expect(func).toHaveBeenCalledTimes(1)
  })
})

describe("formatSeconds", () => {
  test.each([
    [0, "0s"],
    [15, "15s"],
    [30, "30s"],
    [45, "45s"],
    [60, "1m"],
    [120, "2m"],
    [180, "3m"]
  ])("Should return %p for %p", (seconds, expected) => {
    expect(formatSeconds(seconds)).toBe(expected)
  })
})

describe("formatLocation", () => {
  test.each([
    ["Kharkiv", "Ukraine", "Kharkiv, Ukraine"],
    ["Kharkiv", "", "Kharkiv"],
    ["", "Ukraine", "Ukraine"],
    ["", "", ""]
  ])("Should format '%p' and '%p' as '%p'", (city, country, expected) => {
    expect(formatLocation(city, country)).toBe(expected)
  })
})

describe("toSizeObject", () => {
  test.each([
    {
      description: "Should map array of keys to TypeSize without mapper",
      input: [0, 4, 8, 12],
      mapper: undefined,
      expected: {
        0: "XS",
        4: "S",
        8: "M",
        12: "L"
      }
    },
    {
      description: "Should apply objectMapper to array elements",
      input: ["a", "b", "c"],
      mapper: (value: string | number) => `mapped_${value}`,
      expected: {
        mapped_a: "XS",
        mapped_b: "S",
        mapped_c: "M"
      }
    },
    {
      description: "Should repeat TypeSize values if array length exceeds typeSizes length",
      input: [0, 1, 2, 3, 4, 5],
      mapper: undefined,
      expected: {
        0: "XS",
        1: "S",
        2: "M",
        3: "L",
        4: "XL",
        5: "XS"
      }
    },
    {
      description: "Should return empty object for empty array",
      input: [],
      mapper: undefined,
      expected: {}
    }
  ])("$description", ({ input, mapper, expected }) => {
    expect(toSizeObject(input, mapper)).toEqual(expected)
  })
})
