import './Hero.css'
import { motion } from "motion/react"

export default function Hero() {
    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: -75 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }}
                viewport={{ once: false, amount: 0.7 }}

                class="hero">
                <div class="hero-content">
                    <img src="logo.png" alt="Company Logo" />
                    <h1>AuthentifiAI</h1>
                </div>
                <p>Authenticate and Verify your human IP while working with AI.</p>
            </motion.section>
        </>
    )
}