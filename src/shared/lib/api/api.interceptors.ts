import axios from "axios"

export const axiosClassic = axios.create({ baseURL: "/api" })
