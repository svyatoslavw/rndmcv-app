import Groq from "groq-sdk"

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY, dangerouslyAllowBrowser: true })

export const CompletionAIModel = async (content: string) => {
  const response = await groq.chat.completions.create({
    model: "llama3-8b-8192",
    temperature: 0.8,
    messages: [{ role: "user", content }],
    max_tokens: 1024,
    stop: ["\n\n"]
  })

  return response.choices[0].message.content?.trim() || {}
}
