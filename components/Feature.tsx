"use client"

import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"

function Card({ img_src, img_alt, text_value }: { img_src: string; img_alt: string; text_value: string }) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" })

  const sectionVariants = isDesktop
    ? {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.4 } },
        viewport: { once: true, amount: 0.7 },
      }
    : {
        initial: { opacity: 0.33, x: -50 },
        whileInView: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.4 } },
        viewport: { once: true, amount: 0.2 },
      }

  return (
    <motion.div
      initial={sectionVariants.initial}
      whileInView={sectionVariants.whileInView}
      viewport={sectionVariants.viewport as any}
      className="bg-white border-1 rounded-2xl text-left pt-2 pl-5 pr-5 pb-5 mb-5 lg:mr-7 lg:ml-7"
    >
      <img src={img_src || "/placeholder.svg"} alt={img_alt} className="w-auto h-20 2xl:h-30" />
      <h2 className="text-black font-bold text-lg 2xl:text-2xl mt-5 2xl:mt-10">{text_value}</h2>
    </motion.div>
  )
}

export default function Feature() {
  return (
    <section className="grid pr-5 pl-5 pb-30 lg:grid-cols-3 lg:pr-0 lg:pl-0 lg:w-full justify-center lg:pb-96">
      <Card
        img_src="/create.png"
        img_alt="create icon"
        text_value="Choose your favorite AI platform and begin working"
      />
      <Card
        img_src="/record.png"
        img_alt="record icon"
        text_value="Record your progress in real time, tracking progress and sources"
      />
      <Card img_src="/own.png" img_alt="own icon" text_value="Publish your work with confidence" />

      <motion.p
        initial={{ opacity: 0.33 }}
        whileInView={{ opacity: 1, transition: { delay: 0.1, duration: 0.2 } }}
        viewport={{ once: true, amount: 0.2 } as any}
        className="text-lg text-center font-bold text-gray-100 lg:col-span-3 2xl:text-2xl"
      >
        "Verify your authorship while working with AI to prove your contributions and authenticity."
      </motion.p>
    </section>
  )
}
