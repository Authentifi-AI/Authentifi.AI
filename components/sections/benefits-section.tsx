import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Who Benefits from AuthentifiAI?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Our platform serves various stakeholders in the academic and research community
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {benefitGroups.map((group) => (
            <div
              key={group.title}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <div className="flex h-full items-center justify-center bg-slate-200 dark:bg-slate-800">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&query=${group.imageQuery}`}
                    alt={group.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">{group.title}</h3>
                <ul className="space-y-3">
                  {group.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-cyan-500" />
                      <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const benefitGroups = [
  {
    title: "For Researchers & Authors",
    imageQuery: "researchers working on computers in a modern lab setting",
    benefits: [
      "Protect your intellectual property and establish authorship",
      "Verify co-authored documents for consistency",
      "Generate certificates of authenticity for submissions",
      "Improve writing consistency across multiple papers",
      "Detect unauthorized modifications to your work",
    ],
  },
  {
    title: "For Academic Institutions",
    imageQuery: "university campus with students and faculty",
    benefits: [
      "Ensure academic integrity in student submissions",
      "Verify faculty research for publication integrity",
      "Streamline the peer review process",
      "Protect institutional reputation with verified publications",
      "Integrate with existing academic integrity systems",
    ],
  },
]
