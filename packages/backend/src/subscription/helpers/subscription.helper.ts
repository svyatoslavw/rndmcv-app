export const formatToPrice = (price: number) => Number((price / 100).toFixed(2))

const statuses = {
  0: "BASIC",
  300: "STANDART",
  500: "PREMIUM"
}

export const getTypeFromPrice = (price: number) => {
  return statuses[price]
}

export const setSubscriptionDate = (type: "BASIC" | "STANDART" | "PREMIUM") => {
  if (type !== "BASIC") {
    return new Date(new Date().setMonth(new Date().getMonth() + 1))
  }
  return new Date(new Date().setFullYear(new Date().getFullYear() + 10))
}
