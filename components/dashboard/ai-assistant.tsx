"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Bot, Send, User, ExternalLink } from "lucide-react"
import Link from "next/link"

interface AIAssistantProps {
  className?: string
}

export function AIAssistant({ className }: AIAssistantProps) {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your research assistant. How can I help you today?",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I've found several relevant papers on that topic. Would you like me to summarize them?",
        "Based on your research interests, you might want to explore these related concepts.",
        "I can help you analyze that data. What specific insights are you looking for?",
        "That's an interesting question. Let me provide some context from recent research.",
      ]

      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      setMessages((prev) => [...prev, { role: "assistant", content: randomResponse }])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <Card className={cn("col-span-3 flex flex-col border-accent/20", className)}>
      <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 flex flex-row items-center justify-between">
        <div>
          <CardTitle>AI Research Assistant</CardTitle>
          <CardDescription>Ask questions about your research or get help with analysis</CardDescription>
        </div>
        <Link href="/dashboard/research">
          <Button variant="outline" size="sm" className="gap-1 border-accent/20 text-accent hover:bg-accent/10">
            <ExternalLink className="h-3 w-3" />
            Research Tools
          </Button>
        </Link>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                message.role === "user"
                  ? "ml-auto bg-primary text-primary-foreground"
                  : "bg-accent/10 text-foreground border border-accent/20",
              )}
            >
              <div className="flex items-center gap-2">
                {message.role === "assistant" ? <Bot className="h-4 w-4 text-accent" /> : <User className="h-4 w-4" />}
                <span className="font-semibold">{message.role === "assistant" ? "Assistant" : "You"}</span>
              </div>
              <div>{message.content}</div>
            </div>
          ))}
          {isLoading && (
            <div className="flex w-max max-w-[80%] flex-col gap-2 rounded-lg bg-accent/10 border border-accent/20 px-3 py-2 text-sm">
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-accent" />
                <span className="font-semibold">Assistant</span>
              </div>
              <div className="flex gap-1">
                <span className="animate-pulse-custom text-accent">•</span>
                <span className="animate-pulse-custom delay-75 text-accent">•</span>
                <span className="animate-pulse-custom delay-150 text-accent">•</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-4 border-t">
        <div className="flex w-full items-center space-x-2">
          <Input
            placeholder="Ask a question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            className="border-primary/20 focus-visible:ring-primary/50"
          />
          <Button
            size="icon"
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-primary hover:bg-primary/90"
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
