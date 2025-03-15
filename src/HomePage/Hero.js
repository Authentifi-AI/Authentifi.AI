import { motion } from "motion/react"
import { div } from 'motion/react-client';
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
    }

    LeftsectionVariants = {
        initial: { opacity: 0.33, x: -50 },
        whileInView: { opacity: 1, x: 0, transition: { delay: 0.15, duration: 0.3 } },
        viewport: { once: false, amount: 0.3 }
    }


    // else {
    //     ;
    //     LeftsectionVariants = {
    //         initial: { opacity: 0, x: 75 },
    //         whileInView: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.25 } },
    //         viewport: { once: false }

    //     }
    // }

    return (
        <>


            <section class="grid text-center md:grid-cols-2 md:h-screen md:pb-30 md:mb-30">
                <motion.div
                    initial={RightsectionVariants.initial}
                    whileInView={RightsectionVariants.whileInView}
                    viewport={RightsectionVariants.viewport}
                    className='content-center pt-20 md:content-center md:pt-10 md:text-left md:justify-items-center lg:justify-items-start lg:pl-10 lg:text-left lg:content-baseline' >
                    <div className='inline-flex items-center text-left w-screen justify-center md:w-full md:justify-baseline '>
                        <img src="logo.png" alt="Company Logo" className='h-auto w-15 2xl:w-20' />
                        <h1 className='text-5xl text-white font-bold lg:text-6xl lg:ml-2 2xl:text-8xl'>Authentifi AI</h1>
                    </div>

                    <p class='text-xl lg:text-3xl text-center lg:text-left text-blue-900 font-bold lg:mt-5 2xl:text-4xl 2xl:mt-10'>AI Authership Authentication and Verification</p>

                    <p class="text-lg font-semibold text-blue-900 mt-10 pl-5 pr-5 italic lg:pl-0 lg:text-3xl lg:mt-15 2xl:mt-30">Use AI with confidence, record your work in real time, and publish with ease.</p>
                    <p class="text-3xl  font-bold text-white mt-5 md:text-center lg:justify-self-center lg:mt-15 lg:text-4xl 2xl:text-5xl 2xl:mt-32">Sign up early for free</p>
                    <div className="lg:w-full lg:justify-center lg:flex">
                        <button className='bg-blue-400 rounded-xl text-xl text-white font-bold pt-2 pb-2 pr-4 pl-4 shadow-xl border-1 border-gray-600 hover:bg-green-700 hover:cursor-pointer mt-5 lg:text-2xl 2xl:text-3xl'>Register</button>
                    </div>
                </motion.div>

                <motion.div
                    initial={LeftsectionVariants.initial}
                    whileInView={LeftsectionVariants.whileInView}
                    viewport={LeftsectionVariants.viewport}
                    class="text-left p-5 h-screen content-center mt-10 mb-10 md:h-auto">
                    <h1 className='text-white text-3xl font-bold xl:text-4xl xl:mb-3'>See how it works &rarr;</h1>
                    <h2 className='text-blue-900 font-medium  text-2xl xl:text-4xl xl:mb-3'>Meet our student lucy...</h2>
                    <video controls className='rounded-xl bg-white h-auto w-max xl:h-8/12'>
                        <source src="HeroLandingPageVideo.mp4" type="video/mp4" />
                    </video>
                </motion.div>
            </section>
        </>
    )
}