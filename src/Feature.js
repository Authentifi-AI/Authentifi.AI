import "./Feature.css"
import { motion } from "motion/react"

import { ReactComponent as Featureicon1 } from './feature-icon1.svg'
import { ReactComponent as Featureicon2 } from './feature-icon2.svg'
import { ReactComponent as Featureicon3 } from './feature-icon3.svg'




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
                    <Featureicon1 class='icon'></Featureicon1>
                    <h2>Choose your favorite AI platform and begin working</h2>
                </div>

                <div class='feature-card'>
                    <Featureicon2 class='icon'></Featureicon2>
                    <h2>Record your progress in real time, tracking progress and sources</h2>
                </div>

                <div class='feature-card'>
                    <Featureicon3 class='icon'></Featureicon3>
                    <h2>Publish your work with confidence</h2>
                </div>

                
            </motion.section>
            <p className="feature-p">"Verify your authorship while working with AI to prove your contributions and authenticity."</p></>
    )
}