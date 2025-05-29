"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  MessageSquare,
  FileText,
  BarChart2,
  Share2,
  Search,
  Check,
  AlertTriangle,
  LinkIcon,
  Send,
  Home,
  Plus,
  Clock,
  MoreHorizontal,
  Trash2,
  Edit,
} from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { formatRelativeTime } from "@/lib/date"
import { Label } from "@/components/ui/label"
import { CardFooter } from "@/components/ui/card"

// Session type definition
interface Session {
  id: string
  name: string
  model: string
  createdAt: Date
  updatedAt: Date
  messages: {
    role: "user" | "assistant"
    content: string
  }[]
}

export function ResearchWorkspace({ projectId = "1", projectName = "Research Project" }) {
  const [message, setMessage] = useState("")
  const [isCreatingSession, setIsCreatingSession] = useState(false)
  const [newSessionModel, setNewSessionModel] = useState("Claude")
  const [newSessionName, setNewSessionName] = useState("")

  // Sample sessions data
  const [sessions, setSessions] = useState<Session[]>([
    {
      id: "1",
      name: "Climate Change Impacts",
      model: "Claude",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
      updatedAt: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
      messages: [
        {
          role: "user",
          content: "What are the most significant recent advances in large language model research?",
        },
        {
          role: "assistant",
          content:
            "Recent significant advances in large language model research include:\n\n1. **Mixture of Experts (MoE)** - Efficient scaling by routing inputs to specialized sub-models\n2. **Chain-of-Thought Prompting** - Improving reasoning by breaking problems into steps\n3. **Retrieval Augmented Generation (RAG)** - Enhancing responses with external knowledge",
        },
      ],
    },
    {
      id: "2",
      name: "Renewable Energy Solutions",
      model: "GPT-4",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
      updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      messages: [
        {
          role: "user",
          content: "What are the most promising renewable energy technologies for addressing climate change?",
        },
        {
          role: "assistant",
          content:
            "The most promising renewable energy technologies include:\n\n1. **Solar Photovoltaics** - Rapidly decreasing costs and increasing efficiency\n2. **Wind Power** - Both onshore and offshore installations\n3. **Green Hydrogen** - For energy storage and hard-to-electrify sectors\n4. **Advanced Battery Storage** - Critical for grid stability with intermittent renewables",
        },
      ],
    },
    {
      id: "3",
      name: "Policy Recommendations",
      model: "Gemini",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1), // 1 day ago
      updatedAt: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      messages: [
        {
          role: "user",
          content: "What policy frameworks have been most effective in reducing carbon emissions?",
        },
        {
          role: "assistant",
          content:
            "The most effective policy frameworks for reducing carbon emissions include:\n\n1. **Carbon Pricing** - Either through carbon taxes or cap-and-trade systems\n2. **Renewable Portfolio Standards** - Requiring utilities to source increasing percentages of energy from renewables\n3. **Vehicle Emission Standards** - Gradually increasing fuel efficiency requirements\n4. **Green Building Codes** - Mandating energy efficiency in new construction",
        },
      ],
    },
  ])

  const [activeSessionId, setActiveSessionId] = useState(sessions[0]?.id || "")
  const activeSession = sessions.find((session) => session.id === activeSessionId) || sessions[0]

  // Sample data for charts
  const trustScoreData = [
    { name: "Session 1", score: 85 },
    { name: "Session 2", score: 92 },
    { name: "Session 3", score: 78 },
    { name: "Session 4", score: 90 },
  ]

  const sourceTypes = [
    { name: "Academic Journals", value: 45 },
    { name: "Books", value: 15 },
    { name: "Conference Papers", value: 20 },
    { name: "Websites", value: 10 },
    { name: "Other", value: 10 },
  ]

  const timelineData = [
    { date: "Mar 10", queries: 5, citations: 12 },
    { date: "Mar 11", queries: 8, citations: 23 },
    { date: "Mar 12", queries: 12, citations: 31 },
    { date: "Mar 13", queries: 6, citations: 15 },
    { date: "Mar 14", queries: 9, citations: 27 },
    { date: "Mar 15", queries: 14, citations: 42 },
    { date: "Mar 16", queries: 10, citations: 29 },
  ]

  const COLORS = ["#7b68ee", "#9d4edd", "#FFBB28", "#FF8042", "#a569bd"]

  // Simulated recent citations
  const recentCitations = [
    {
      id: 1,
      title: "Attention Is All You Need",
      authors: "Vaswani et al.",
      year: 2017,
      source: "NeurIPS",
      trustScore: 0.95,
    },
    {
      id: 2,
      title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
      authors: "Devlin et al.",
      year: 2018,
      source: "NAACL",
      trustScore: 0.92,
    },
    {
      id: 3,
      title: "Language Models are Few-Shot Learners",
      authors: "Brown et al.",
      year: 2020,
      source: "NeurIPS",
      trustScore: 0.93,
    },
  ]

  const handleSendMessage = () => {
    if (!message.trim() || !activeSession) return

    // Create a new message
    const newMessage = {
      role: "user" as const,
      content: message,
    }

    // Update the session with the new message
    const updatedSessions = sessions.map((session) => {
      if (session.id === activeSessionId) {
        return {
          ...session,
          messages: [...session.messages, newMessage],
          updatedAt: new Date(),
        }
      }
      return session
    })

    setSessions(updatedSessions)
    setMessage("")

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        role: "assistant" as const,
        content: `Thank you for your question about "${message}". Here's what I found:\n\n1. Recent research suggests multiple approaches to this topic\n2. The most cited papers include work by Smith et al. (2022) and Johnson (2023)\n3. There are several methodological considerations to keep in mind`,
      }

      const updatedSessionsWithResponse = updatedSessions.map((session) => {
        if (session.id === activeSessionId) {
          return {
            ...session,
            messages: [...session.messages, newMessage, aiResponse],
            updatedAt: new Date(),
          }
        }
        return session
      })

      setSessions(updatedSessionsWithResponse)
    }, 1500)
  }

  const createNewSession = () => {
    if (sessions.length >= 5) {
      alert("You've reached the maximum limit of 5 sessions per project.")
      return
    }

    setIsCreatingSession(true)
    setNewSessionModel("Claude") // Default selection
  }

  const confirmNewSession = () => {
    const sessionName = newSessionName.trim() ? newSessionName : `New Research Session ${sessions.length + 1}`

    const newSession: Session = {
      id: `session-${Date.now()}`,
      name: sessionName,
      model: newSessionModel,
      createdAt: new Date(),
      updatedAt: new Date(),
      messages: [],
    }

    setSessions([...sessions, newSession])
    setActiveSessionId(newSession.id)
    setIsCreatingSession(false)
  }

  const deleteSession = (sessionId: string) => {
    if (sessions.length <= 1) {
      alert("You must have at least one session.")
      return
    }

    const updatedSessions = sessions.filter((session) => session.id !== sessionId)
    setSessions(updatedSessions)

    // If the active session was deleted, set the first available session as active
    if (sessionId === activeSessionId) {
      setActiveSessionId(updatedSessions[0].id)
    }
  }

  const renameSession = (sessionId: string, newName: string) => {
    const updatedSessions = sessions.map((session) => {
      if (session.id === sessionId) {
        return {
          ...session,
          name: newName,
        }
      }
      return session
    })

    setSessions(updatedSessions)
  }

  if (isCreatingSession) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <Card className="w-full max-w-md mx-4">
          <CardHeader>
            <CardTitle>Create New Session</CardTitle>
            <CardDescription>Select an AI model for this session. This cannot be changed later.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="session-name">Session Name</Label>
                <Input
                  id="session-name"
                  placeholder="New Research Session"
                  defaultValue={`New Research Session ${sessions.length + 1}`}
                  onChange={(e) => {
                    // Store the name temporarily
                    setNewSessionName(e.target.value)
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label>Select AI Model</Label>
                <div className="grid gap-2">
                  {["Claude", "GPT-4", "Gemini", "Yi (Local)"].map((model) => (
                    <div
                      key={model}
                      className={`flex items-center justify-between p-3 rounded-md border cursor-pointer ${
                        newSessionModel === model ? "border-primary bg-primary/5" : "border-input"
                      }`}
                      onClick={() => setNewSessionModel(model)}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-4 h-4 rounded-full mr-2 ${
                            newSessionModel === model ? "bg-primary" : "bg-muted"
                          }`}
                        />
                        <span>{model}</span>
                      </div>
                      {model === "Claude" && <Badge variant="outline">Recommended</Badge>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setIsCreatingSession(false)}>
              Cancel
            </Button>
            <Button onClick={confirmNewSession}>Create Session</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{projectName}</h1>
        <Button variant="outline" size="sm" className="gap-1 border-primary/20 text-primary hover:bg-primary/10">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </div>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="dashboard" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="workspace" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Research with AI
          </TabsTrigger>
          <TabsTrigger value="citations" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Citation Explorer
          </TabsTrigger>
          <TabsTrigger value="analysis" className="flex items-center gap-2">
            <BarChart2 className="h-4 w-4" />
            Authentifi Analysis
          </TabsTrigger>
        </TabsList>

        {/* Dashboard Tab */}
        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Research Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <span>+12% from last month</span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Average Trust Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">86%</div>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <span>+4% from last month</span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Citations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">342</div>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <span>+18% from last month</span>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Research Activity Timeline</CardTitle>
                <CardDescription>Queries and citations over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={timelineData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <RechartsTooltip />
                      <Legend />
                      <Line type="monotone" dataKey="queries" stroke="#7b68ee" />
                      <Line type="monotone" dataKey="citations" stroke="#9d4edd" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Citation Sources</CardTitle>
                <CardDescription>Breakdown by source type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sourceTypes}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#7b68ee"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {sourceTypes.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <RechartsTooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Citations</CardTitle>
              <CardDescription>Latest academic sources referenced in your research</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentCitations.map((citation) => (
                  <div key={citation.id} className="flex items-start p-3 border rounded-lg">
                    <div className="mr-4 mt-1">
                      {citation.trustScore > 0.9 ? (
                        <div className="bg-green-100 p-1 rounded-full">
                          <Check size={16} className="text-green-600" />
                        </div>
                      ) : (
                        <div className="bg-yellow-100 p-1 rounded-full">
                          <AlertTriangle size={16} className="text-yellow-600" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{citation.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {citation.authors} ({citation.year}) - {citation.source}
                      </p>
                    </div>
                    <div className="text-sm font-medium">{Math.round(citation.trustScore * 100)}%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Research Workspace Tab */}
        <TabsContent value="workspace" className="min-h-[calc(100vh-12rem)]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sessions sidebar */}
            <div className="md:col-span-1">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Sessions</CardTitle>
                    <Button
                      onClick={createNewSession}
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      disabled={sessions.length >= 5}
                    >
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">New Session</span>
                    </Button>
                  </div>
                  <CardDescription>{sessions.length}/5 sessions used</CardDescription>
                </CardHeader>
                <CardContent className="px-2">
                  <div className="space-y-2">
                    {sessions.map((session) => (
                      <div
                        key={session.id}
                        className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-colors ${
                          session.id === activeSessionId ? "bg-primary/10 text-primary" : "hover:bg-muted"
                        }`}
                        onClick={() => setActiveSessionId(session.id)}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-2 flex-shrink-0" />
                            <p className="font-medium truncate">{session.name}</p>
                          </div>
                          <div className="flex items-center mt-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
                            <span className="truncate">{formatRelativeTime(session.updatedAt)}</span>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => {
                                const newName = prompt("Enter new session name:", session.name)
                                if (newName) renameSession(session.id, newName)
                              }}
                            >
                              <Edit className="h-4 w-4 mr-2" />
                              Rename
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600" onClick={() => deleteSession(session.id)}>
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Remove the model selection card and replace with a simple display */}
              {/* Session info card */}
              <Card className="mt-4">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Session Info</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col space-y-1">
                      <span className="text-sm text-muted-foreground">AI Model</span>
                      <div className="flex items-center">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
                          {activeSession?.model || "Claude"}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-1">
                      <span className="text-sm text-muted-foreground">Created</span>
                      <span className="text-sm">
                        {activeSession?.createdAt ? formatRelativeTime(activeSession.createdAt) : ""}
                      </span>
                    </div>

                    <div className="flex flex-col space-y-1">
                      <span className="text-sm text-muted-foreground">Messages</span>
                      <span className="text-sm">{activeSession?.messages.length || 0} messages</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat window */}
            <div className="md:col-span-3">
              <Card className="flex-1 flex flex-col overflow-hidden h-full">
                <CardHeader className="pb-3 flex flex-row justify-between items-center">
                  <div>
                    <CardTitle>{activeSession?.name || "Research Session"}</CardTitle>
                    <CardDescription>
                      Using {activeSession?.model || "Claude"} • {activeSession?.messages.length || 0} messages
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const updatedSessions = sessions.map((session) => {
                        if (session.id === activeSessionId) {
                          return {
                            ...session,
                            messages: [],
                            updatedAt: new Date(),
                          }
                        }
                        return session
                      })
                      setSessions(updatedSessions)
                    }}
                  >
                    Clear Chat
                  </Button>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col p-0 h-full">
                  <div className="flex-1 overflow-auto p-6 space-y-4 bg-muted/30">
                    {activeSession?.messages.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-full text-center p-6 text-muted-foreground">
                        <MessageSquare className="h-12 w-12 mb-4 text-primary/40" />
                        <h3 className="text-lg font-medium">Start a new conversation</h3>
                        <p className="max-w-md mt-2">
                          Ask questions about your research topic, request summaries of papers, or get help analyzing
                          data.
                        </p>
                      </div>
                    ) : (
                      activeSession?.messages.map((msg, index) => (
                        <div key={index} className="flex gap-4">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-medium shrink-0 ${
                              msg.role === "user" ? "bg-primary" : "bg-accent"
                            }`}
                          >
                            {msg.role === "user" ? "JS" : "AI"}
                          </div>
                          <div
                            className={`p-3 rounded-lg shadow-sm ${
                              msg.role === "user" ? "bg-background" : "bg-background max-w-3xl"
                            }`}
                          >
                            <p className="whitespace-pre-line">{msg.content}</p>
                            {msg.role === "assistant" && (
                              <div className="flex items-center text-xs text-primary mt-2">
                                <LinkIcon size={12} className="mr-1" />
                                <span>Sources: 3 academic papers, 1 dataset</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="p-4 border-t bg-background">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1">
                        <Input
                          type="text"
                          placeholder="Ask a research question..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                              e.preventDefault()
                              handleSendMessage()
                            }
                          }}
                          className="w-full border-primary/20 focus-visible:ring-primary/50"
                        />
                      </div>
                      <Button
                        onClick={handleSendMessage}
                        disabled={!message.trim()}
                        className="bg-primary hover:bg-primary/90"
                      >
                        <Send className="h-4 w-4" />
                        <span className="ml-2">Send</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Citation Explorer Tab */}
        <TabsContent value="citations" className="space-y-6">
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search citations..."
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base">
                    {
                      [
                        "Attention Is All You Need",
                        "BERT: Pre-training of Deep Bidirectional Transformers",
                        "Language Models are Few-Shot Learners",
                        "Scaling Laws for Neural Language Models",
                        "Training language models to follow instructions",
                        "GPT-4 Technical Report",
                        "Llama 2: Open Foundation and Fine-Tuned Chat Models",
                        "Gemini: A Family of Highly Capable Multimodal Models",
                        "Constitutional AI: Harmlessness from AI Feedback",
                      ][i]
                    }
                  </CardTitle>
                  <CardDescription>
                    {
                      [
                        "Vaswani et al. (2017)",
                        "Devlin et al. (2018)",
                        "Brown et al. (2020)",
                        "Kaplan et al. (2020)",
                        "Ouyang et al. (2022)",
                        "OpenAI (2023)",
                        "Meta AI (2023)",
                        "Google (2023)",
                        "Anthropic (2022)",
                      ][i]
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      {
                        [
                          "NeurIPS",
                          "NAACL",
                          "NeurIPS",
                          "arXiv",
                          "arXiv",
                          "Technical Report",
                          "arXiv",
                          "Technical Report",
                          "arXiv",
                        ][i]
                      }
                    </div>
                    <div
                      className={`text-sm font-semibold px-2 py-1 rounded-full ${
                        i % 3 === 0
                          ? "bg-green-100 text-green-800"
                          : i % 3 === 1
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {i % 3 === 0 ? "High Trust" : i % 3 === 1 ? "Medium Trust" : "Primary Source"}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Authentifi Analysis Tab */}
        <TabsContent value="analysis" className="space-y-6">
          <div className="flex justify-between items-center mb-6">
            <Button className="bg-primary hover:bg-primary/90">Create New Chart</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Trust Score by Research Session</CardTitle>
                <CardDescription>Measuring trust and reliability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={trustScoreData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 100]} />
                      <RechartsTooltip />
                      <Bar dataKey="score" fill="#7b68ee" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Source Distribution</CardTitle>
                <CardDescription>Types of sources referenced in research</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sourceTypes}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#7b68ee"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {sourceTypes.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <RechartsTooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Advanced Visualization Tools</CardTitle>
              <CardDescription>Create custom visualizations from your research data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Select data sources and visualization types to create custom charts and graphs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-1">
                      <CardTitle className="text-sm">Data Correlation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="/placeholder.svg?height=160&width=300"
                        alt="Data correlation"
                        className="w-full rounded-md"
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-1">
                      <CardTitle className="text-sm">Network Graph</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="/placeholder.svg?height=160&width=300"
                        alt="Network graph"
                        className="w-full rounded-md"
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-1">
                      <CardTitle className="text-sm">Citation Map</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="/placeholder.svg?height=160&width=300"
                        alt="Citation map"
                        className="w-full rounded-md"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
