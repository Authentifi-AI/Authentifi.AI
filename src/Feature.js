import "./Feature.css"
import { motion } from "motion/react"

import { ReactComponent as TrustSVG } from './trust-logo.svg'
import { ReactComponent as SecureSVG } from './secure-logo.svg'
import { ReactComponent as AiSVG } from './ai-logo.svg'




export default function Feature() {
    const style = {}
    return (
        <>
            <motion.section
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.6 } }}
                viewport={{ once: false, amount: 0.7 }}
                class="feature-section">
                    
                <div class='feature-card'>
                    <TrustSVG class='icon'></TrustSVG>
                    <h2>Trust Platform Researchers</h2>
                    <p>Connect with trusted researchers and establish secure research collaborations.</p>
                </div>

                <div class='feature-card'>
                    <SecureSVG class='icon'></SecureSVG>
                    <h2>Scured Trust Based Research</h2>
                    <p>Ensure the authenticity and integrity of your research with blockhain technology.</p>
                </div>

                <div class='feature-card'>
                    <AiSVG class='icon'></AiSVG>
                    <h2>First AI-based Academic Research Engine</h2>
                    <p>Leverage AI-powered tools to enhance your research capabilities and outcomes.</p>
                </div>
            </motion.section></>
    )
}