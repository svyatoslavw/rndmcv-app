export const formatToPrice = (price: number) => Number((price / 100).toFixed(2))

const statuses = {
  0: "BASIC",
  300: "STANDART",
  500: "PREMIUM"
}

export const getTypeFromPrice = (price: number) => {
  return statuses[price]
}

export const setSubscriptionDate = () => new Date(new Date().setMonth(new Date().getMonth() + 1))
