export function HowItWorksSection() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            How AuthentifiAI Works
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Our streamlined process makes document verification simple and reliable
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-slate-200 dark:bg-slate-800"></div>

            {/* Steps */}
            <div className="relative z-10 space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 text-white">
                    {index + 1}
                  </div>
                  <div className="mt-6 rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800 sm:p-8 md:max-w-xl">
                    <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    title: "Upload Your Document",
    description:
      "Simply upload the document you want to verify. We support all major file formats including PDF, DOCX, and plain text.",
  },
  {
    title: "AI Analysis",
    description:
      "Our advanced AI analyzes the document's writing style, patterns, and structure to create a unique authorship fingerprint.",
  },
  {
    title: "Verification Results",
    description:
      "Receive a detailed report showing authorship confidence score, stylistic analysis, and potential inconsistencies.",
  },
  {
    title: "Secure Certification",
    description:
      "Generate a tamper-proof certificate of authenticity that can be shared with institutions, publishers, or colleagues.",
  },
]
