export const formatToPrice = (price: number) => Number((price / 100).toFixed(2))

const statuses = {
  0: "BASIC",
  300: "STANDART",
  500: "PREMIUM",
  3000: "STANDART",
  5000: "PREMIUM"
}

export const getTypeFromPrice = (price: number) => {
  return statuses[price]
}

export const setSubscriptionDate = (type: "BASIC" | "STANDART" | "PREMIUM", price: number) => {
  const currentDate = new Date()

  if (type !== "BASIC") {
    // Если цена 3000 или 5000, добавляем 1 год
    if (price === 3000 || price === 5000) {
      return new Date(currentDate.setFullYear(currentDate.getFullYear() + 1))
    }
    // Иначе добавляем 1 месяц
    return new Date(currentDate.setMonth(currentDate.getMonth() + 1))
  }

  // Для BASIC добавляем 10 лет
  return new Date(currentDate.setFullYear(currentDate.getFullYear() + 10))
}
