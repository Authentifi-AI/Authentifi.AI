import './Hero.css'
import { motion } from "motion/react"
import { useMediaQuery } from 'react-responsive'


export default function Hero() {

    // check the screen size and set variables accordingly
    var RightsectionVariants = {};
    var LeftsectionVariants = {};

    if (useMediaQuery({ query: '(min-width: 1025px)' })) {
        RightsectionVariants = {
            initial: { opacity: 0, x: -75 },
            whileInView: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.4 } },
            viewport: { once: false, amount: 0.1 }
        };

        LeftsectionVariants = {
            initial: { opacity: 0, x: 75 },
            whileInView: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.4 } },
            viewport: { once: false, amount: 0.7 }
        }
    }

    else{;
        LeftsectionVariants = {
            initial: { opacity: 0, x: 75 },
            whileInView: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.25 } },
            viewport: { once: false}

    }
}

    return (
        <>
            <section class="hero">
                <motion.div
                    initial={RightsectionVariants.initial}
                    whileInView={RightsectionVariants.whileInView}
                    viewport={RightsectionVariants.viewport}
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
                    initial={LeftsectionVariants.initial}
                    whileInView={LeftsectionVariants.whileInView}
                    viewport={LeftsectionVariants.viewport}
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