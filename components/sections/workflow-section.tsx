import { ArrowRight, Upload, Brain, Download } from "lucide-react"

export function WorkflowSection() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Data",
      description: "Import research papers, datasets, and documents from various sources",
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our AI processes and analyzes your content to extract key insights",
    },
    {
      icon: Download,
      title: "Get Results",
      description: "Receive comprehensive reports, visualizations, and actionable insights",
    },
  ]

  return (
    <section className="py-24 research-gradient-bg text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Get started with our research tools in three simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="research-card rounded-xl p-8 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-white/60" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
