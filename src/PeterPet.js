import { useChat } from "ai/react"
import { AssistantRuntimeProvider } from "@assistant-ui/react"
import { useVercelUseChatRuntime } from "@assistant-ui/react-ai-sdk"
import React from "react"

export function MyRuntimeProvider(children) {
  const chat = useChat({
    api: "/api/chat",
  })

  const runtime = useVercelUseChatRuntime(chat)

  return <AssistantRuntimeProvider runtime={runtime}>{children}</AssistantRuntimeProvider>
}