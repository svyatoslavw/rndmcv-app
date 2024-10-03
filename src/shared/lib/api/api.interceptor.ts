import axios, { CreateAxiosDefaults } from "axios"

const options: CreateAxiosDefaults = {
  baseURL: "https://api.openai.com/v1/chat/completions",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`
  },
  withCredentials: true
}

const axiosInstance = axios.create({ baseURL: "/api" })

const axiosWithAI = axios.create(options)

export { axiosInstance, axiosWithAI }
