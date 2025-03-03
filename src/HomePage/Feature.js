import "./Feature.css"
import { motion } from "motion/react"
import { useMediaQuery } from 'react-responsive'




export default function Feature() {

    var sectionVariants = {};
    // check the screen size and set variables accordingly
    if (useMediaQuery({ query: '(min-width: 1025px)' })) {
        sectionVariants = {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.4 } },
            viewport: { once: false, amount: 0.7 }
        };
    }

    else{

        sectionVariants = {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.4 } },
            viewport: { once: false, amount: 0.2 }
        };
    }

    return (
        <>
            <motion.section
                initial={sectionVariants.initial}
                whileInView={sectionVariants.whileInView}
                viewport={sectionVariants.viewport}
                class="feature-section">

                <div class="feature-cards-row">

                    <div class='feature-card'>
                        <img src="./work.gif" alt="Work gif"/>
                        <h2>Choose your favorite AI platform and begin working</h2>
                    </div>

                    <div class='feature-card'>
                        <img src="./folder.gif" alt="Folder gif"/>
                        <h2>Record your progress in real time, tracking progress and sources</h2>
                    </div>

                    <div class='feature-card'>
                        <img src="./certificate.gif" alt="Certificate gif"/>
                        <h2>Publish your work with confidence</h2>
                    </div>

                </div>

                <p className="feature-p">
                    "Verify your authorship while working with AI to prove your contributions and authenticity."
                </p>

            </motion.section>


        </>
    )
}