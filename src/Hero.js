import './Hero.css'
import { motion } from "motion/react"
import { ReactComponent as FolderSVG } from './feature-icon2.svg'

export default function Hero() {
    return (
        <>
            <section class="hero">
                <motion.div 
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.6 } }}
                viewport={{ once: false, amount: 0.1 }}
                class="Left-section">
                    <h1>Authentifi AI</h1>
                    <div className='row'>
                        <img src="logo.png" alt="Company Logo" />
                        <p class='hero-p'>AI-powered authorship <br></br>verification</p>
                    </div>
                    <p class="second-paragraph">Stay in control of your work while using AI</p>
                    <button>Register</button>
                    <p class="third-paragraph">Be among the first to experience it!</p>
                </motion.div>

                <motion.div 
                initial={{ opacity: 0, x: 75 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.6 } }}
                viewport={{ once: false, amount: 0.7 }}
                 class="Right-section">
                    <h2>Meet our student lucy...</h2>
                    <video controls >
                        <source src="HeroLandingPageVideo.mp4" type="video/mp4" />
                    </video>
                </motion.div>
            </section>
        </>
    )
}