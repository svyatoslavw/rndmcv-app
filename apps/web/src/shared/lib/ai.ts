import Groq from "groq-sdk"
import { ATS_SYSTEM_MESSAGE, SYSTEM_MESSAGE } from "./prompts"

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY, dangerouslyAllowBrowser: true })

export const CompletionAIModel = async (content: string) => {
  const response = await groq.chat.completions.create({
    model: "llama3-8b-8192",
    temperature: 0.8,
    messages: [
      {
        role: "user",
        content
      }
    ],
    max_tokens: 1024,
    response_format: { type: "json_object" },
    stop: ["\n\n"]
  })

  return response.choices[0].message.content?.trim() || {}
}

export const TemplateAIModel = async (prompt: string) => {
  const response = await groq.chat.completions.create({
    model: "llama3-8b-8192",
    temperature: 0.9,
    messages: [
      {
        role: "system",
        content: SYSTEM_MESSAGE
      },
      {
        role: "user",
        content: prompt
      }
    ],
    max_tokens: 1024,
    response_format: { type: "json_object" },
    stop: ["\n\n"]
  })

  return response.choices[0].message.content?.trim() || {}
}

export const ATSAIModel = async (prompt: string) => {
  const response = await groq.chat.completions.create({
    model: "llama3-8b-8192",
    temperature: 0.9,
    messages: [
      {
        role: "system",
        content: ATS_SYSTEM_MESSAGE
      },
      {
        role: "user",
        content: prompt
      }
    ],
    max_tokens: 1024,
    response_format: { type: "json_object" },
    stop: ["\n\n"]
  })
  return response.choices[0].message.content?.trim() || {}
}
