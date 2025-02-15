"use client"

import { analyzeATSResume, generateTemplate } from "@/shared/lib/actions"
import { cn } from "@/shared/lib/utils"

import { isValidCustomization, selectResume, useResumeActions } from "@/entities/resume"
import { useProfile } from "@/entities/user"
import { useAppSelector } from "@/shared/lib/store"
import { CustomizationEntity, IMessage } from "@/shared/types"
import {
  Badge,
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  InfoMessage
} from "@rndm/ui/components"
import { SparklesIcon } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { TypeAnimation } from "react-type-animation"
import { useIntelligence } from "../useIntelligence"

type Action = {
  name: string
  onClick: () => Promise<void>
}

const ChatMessage = ({ message, profileImage }: { message: IMessage; profileImage?: string }) => (
  <div
    className={cn(
      "bg-secondary flex w-1/2 flex-wrap items-center gap-2 self-end text-pretty rounded-md px-3 py-1 font-medium",
      { "bg-primary/15 text-foreground w-full self-start": message.role === "assistant" }
    )}
  >
    {profileImage && (
      <Image
        src={message.role === "assistant" ? "/purple.svg" : profileImage}
        className="rounded"
        alt="Avatar"
        width={30}
        height={30}
      />
    )}
    <TypeAnimation
      sequence={[message.content]}
      wrapper="span"
      repeat={0}
      cursor={false}
      speed={99}
    />
  </div>
)

const ActionBadges = ({ actions }: { actions: Action[] }) => (
  <div className="mt-4 flex w-full flex-wrap gap-2">
    {actions.map((action) => (
      <Badge
        onClick={action.onClick}
        key={action.name}
        variant="outline"
        className="hover:bg-primary/10 cursor-pointer"
      >
        {action.name}
        <SparklesIcon className="ml-2 h-3 w-3" />
      </Badge>
    ))}
  </div>
)

const ChatModal = () => {
  const { messages, setMessages } = useIntelligence()
  const [prompt, setPrompt] = useState("")
  const { profile } = useProfile()
  const { updateFullCustomization } = useResumeActions()
  const [template, setTemplate] = useState<CustomizationEntity>()
  const resume = useAppSelector(selectResume)

  const addMessage = (role: IMessage["role"], content: string) => {
    setMessages((prev) => [...prev, { role, content }])
  }

  const sendTemplatePrompt = async () => {
    addMessage("user", "Generate template")
    const result = await generateTemplate(prompt)

    const assistantMessage = result.message || JSON.stringify(Object.values(result)[0], null, 2)

    if (result.customization) {
      setTemplate(result.customization)
    }
    addMessage("assistant", assistantMessage)
  }

  const sendATSAnalysis = async () => {
    addMessage("user", "Analyze ATS resume")
    const result = await analyzeATSResume(JSON.stringify(resume))

    let assistantMessage = result.message || "Ответ от AI отсутствует"

    if (result.errors?.length) {
      const errorsText = result.errors.map((err: any) => `• ${err.description}`).join("\n")
      assistantMessage += `\n\nОшибки:\n${errorsText}`
    }

    addMessage("assistant", assistantMessage)
  }

  const actions: Action[] = [
    { name: "ATS Optimization", onClick: sendATSAnalysis },
    { name: "Generate template", onClick: sendTemplatePrompt }
  ]

  const onClick = async (prompt: string) => {
    console.log("@prompt", prompt)
  }

  return (
    <Dialog>
      <DialogTrigger asChild className="w-fit">
        <Button
          size={"lg"}
          className={
            "relative z-10 inline-flex border-red-900 bg-gradient-to-br from-purple-500 via-red-500 to-pink-700 transition-all hover:scale-105 active:scale-105"
          }
        >
          <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-b from-red-500/70 to-red-600 opacity-75 blur-md" />
          <SparklesIcon className="mr-2" size={18} />
          Ask AI
        </Button>
      </DialogTrigger>
      <DialogContent hasCloseButt={false} className="gap-1 rounded-xl border p-6">
        <InfoMessage text="Scroll area" className="text-center" />
        <section className="flex max-h-72 flex-col gap-2 overflow-hidden overflow-y-scroll py-4 text-sm">
          {messages.map((message) => (
            <ChatMessage key={message.content} message={message} profileImage={profile?.image} />
          ))}
        </section>
        {/* FIXME: REMOVE CODE */}
        {/* <div className="grid grid-cols-[1fr_auto] gap-4">
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt..."
            className="w-full"
          />

          <Button onClick={() => onClick(prompt)}>GENERATE</Button>
        </div> */}
        <Button
          size={"sm"}
          disabled={!isValidCustomization(template)}
          onClick={() => updateFullCustomization(template!)}
        >
          Apply
        </Button>
        <div className="px-2 text-xs">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-500 bg-clip-text font-bold text-transparent">
            RNDM Intelligence
          </span>{" "}
          is experimental so double-check the info
        </div>
        <ActionBadges actions={actions} />
        <DialogFooter />
      </DialogContent>
    </Dialog>
  )
}

export { ChatModal }
