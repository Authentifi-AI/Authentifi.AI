"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Search, FileText, BookOpen, LinkIcon, Loader2 } from "lucide-react"

export function ResearchTool() {
  const [isSearching, setIsSearching] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [summarizeText, setSummarizeText] = useState("")
  const [summary, setSummary] = useState("")
  const [isSummarizing, setIsSummarizing] = useState(false)
  const [url, setUrl] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [urlAnalysis, setUrlAnalysis] = useState("")

  const handleSearch = () => {
    if (!searchQuery.trim()) return

    setIsSearching(true)
    setSearchResults([])

    // Simulate search results
    setTimeout(() => {
      const mockResults = [
        {
          title: "The Impact of Climate Change on Global Ecosystems",
          authors: "Smith, J., Johnson, A., et al.",
          journal: "Environmental Science Journal",
          year: "2023",
          abstract:
            "This study examines the long-term effects of climate change on various ecosystems around the world...",
        },
        {
          title: "Renewable Energy Solutions for Sustainable Development",
          authors: "Garcia, M., Lee, S., et al.",
          journal: "Sustainable Energy Review",
          year: "2022",
          abstract:
            "An analysis of current renewable energy technologies and their potential for addressing global energy needs...",
        },
        {
          title: "Artificial Intelligence in Healthcare: Opportunities and Challenges",
          authors: "Williams, R., Chen, L., et al.",
          journal: "Journal of Medical Informatics",
          year: "2023",
          abstract:
            "This paper explores the applications of AI in healthcare settings and discusses ethical considerations...",
        },
      ]

      setSearchResults(mockResults)
      setIsSearching(false)
    }, 2000)
  }

  const handleSummarize = () => {
    if (!summarizeText.trim()) return

    setIsSummarizing(true)
    setSummary("")

    // Simulate AI summarization
    setTimeout(() => {
      setSummary(
        "This text discusses the importance of sustainable development and renewable energy sources. The main points include:\n\n" +
          "1. The urgent need to transition away from fossil fuels\n" +
          "2. The economic benefits of renewable energy investments\n" +
          "3. The technological advancements making renewable energy more accessible\n" +
          "4. Policy recommendations for governments to accelerate adoption",
      )
      setIsSummarizing(false)
    }, 2000)
  }

  const handleAnalyzeUrl = () => {
    if (!url.trim()) return

    setIsAnalyzing(true)
    setUrlAnalysis("")

    // Simulate URL analysis
    setTimeout(() => {
      setUrlAnalysis(
        "Website Analysis:\n\n" +
          "• Source credibility: High (Academic institution)\n" +
          "• Content type: Research paper\n" +
          "• Publication date: March 2023\n" +
          "• Citation count: 47\n" +
          "• Key topics: Climate science, Environmental policy, Sustainability\n\n" +
          "This appears to be a peer-reviewed publication from a reputable source.",
      )
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <Tabs defaultValue="search" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-background border border-primary/20">
        <TabsTrigger value="search" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
          <Search className="mr-2 h-4 w-4" />
          Semantic Search
        </TabsTrigger>
        <TabsTrigger value="summarize" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
          <FileText className="mr-2 h-4 w-4" />
          Text Summarization
        </TabsTrigger>
        <TabsTrigger value="analyze" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
          <LinkIcon className="mr-2 h-4 w-4" />
          URL Analysis
        </TabsTrigger>
      </TabsList>

      <TabsContent value="search" className="mt-6">
        <Card className="border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardTitle>Semantic Research Search</CardTitle>
            <CardDescription>Search for academic papers and research using natural language</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex w-full items-center space-x-2">
              <Input
                placeholder="Enter your research query..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                disabled={isSearching}
                className="border-primary/20 focus-visible:ring-primary/50"
              />
              <Button
                onClick={handleSearch}
                disabled={isSearching || !searchQuery.trim()}
                className="bg-primary hover:bg-primary/90"
              >
                {isSearching ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Searching
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </>
                )}
              </Button>
            </div>

            {searchResults.length > 0 && (
              <div className="mt-6 space-y-6">
                <h3 className="text-lg font-medium">Results</h3>
                <div className="space-y-4">
                  {searchResults.map((result, index) => (
                    <Card key={index} className="border-accent/20">
                      <CardContent className="p-4">
                        <h4 className="text-base font-semibold">{result.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {result.authors} • {result.journal} • {result.year}
                        </p>
                        <p className="mt-2 text-sm">{result.abstract}</p>
                        <div className="mt-4 flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-accent/20 text-accent hover:bg-accent/10"
                          >
                            <BookOpen className="mr-2 h-4 w-4" />
                            Read
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-primary/20 text-primary hover:bg-primary/10"
                          >
                            Save
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="summarize" className="mt-6">
        <Card className="border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardTitle>AI Text Summarization</CardTitle>
            <CardDescription>Paste text to generate a concise summary</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <div className="space-y-2">
              <Label htmlFor="text">Text to summarize</Label>
              <Textarea
                id="text"
                placeholder="Paste your text here..."
                className="min-h-[200px] border-primary/20 focus-visible:ring-primary/50"
                value={summarizeText}
                onChange={(e) => setSummarizeText(e.target.value)}
                disabled={isSummarizing}
              />
            </div>
            <Button
              onClick={handleSummarize}
              disabled={isSummarizing || !summarizeText.trim()}
              className="w-full bg-primary hover:bg-primary/90"
            >
              {isSummarizing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Summarizing...
                </>
              ) : (
                "Generate Summary"
              )}
            </Button>

            {summary && (
              <div className="mt-6 space-y-2">
                <Label htmlFor="summary">Summary</Label>
                <div
                  id="summary"
                  className="rounded-md border border-accent/20 bg-accent/5 p-4 text-sm whitespace-pre-line"
                >
                  {summary}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="analyze" className="mt-6">
        <Card className="border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardTitle>URL Analysis</CardTitle>
            <CardDescription>Analyze the credibility and content of a research URL</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <div className="flex w-full items-center space-x-2">
              <Input
                placeholder="Enter URL to analyze..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={isAnalyzing}
                className="border-primary/20 focus-visible:ring-primary/50"
              />
              <Button
                onClick={handleAnalyzeUrl}
                disabled={isAnalyzing || !url.trim()}
                className="bg-primary hover:bg-primary/90"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing
                  </>
                ) : (
                  "Analyze"
                )}
              </Button>
            </div>

            {urlAnalysis && (
              <div className="mt-6 space-y-2">
                <Label htmlFor="analysis">Analysis Results</Label>
                <div
                  id="analysis"
                  className="rounded-md border border-accent/20 bg-accent/5 p-4 text-sm whitespace-pre-line"
                >
                  {urlAnalysis}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
