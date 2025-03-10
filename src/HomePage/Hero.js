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

    else {
        ;
        LeftsectionVariants = {
            initial: { opacity: 0, x: 75 },
            whileInView: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.25 } },
            viewport: { once: false }

        }
    }

    return (
        <>
            <section class="grid justify-center text-center lg:grid-cols-2 lg:h-screen">
                <motion.div
                    initial={RightsectionVariants.initial}
                    whileInView={RightsectionVariants.whileInView}
                    viewport={RightsectionVariants.viewport}
                    className='sm:max-lg:w-full sm:max-lg:h-screen content-center -mt-40'>
                    <h1 className='font-medium sm:max-lg:text-9xl lg:text-7xl 2xl:text-9xl text-white mb-10'>Authentifi AI</h1>
                    <div className='inline-flex sm:max-lg:mb-30'>
                        <img src="logo.png" alt="Company Logo" className='h-auto sm:max-lg:w-30 lg:w-40 sm:max-lg:mt-4 lg:-mt-8 sm:max-lg:mr-3 lg:-mr-8' />
                        <p class='sm:max-lg:text-6xl lg:text-3xl text-gray-300 align-baseline text-left'>AI-powered authorship <br></br>verification</p>
                    </div>
                    <p class="sm:max-lg:text-4xl lg:text-3xl text-gray-100">Stay in control of your work while using AI</p>

                    <button className='bg-blue-400 rounded-xl sm:max-lg:text-4xl lg:text-2xl text-white font-bold pt-2 pb-2 pr-4 pl-4 shadow-xl border-1 border-gray-600 hover:bg-green-700 hover:cursor-pointer mt-5 mb-5 '>Register</button>

                    <p class="sm:max-lg:text-5xl lg:text-3xl text-yellow-300">Be among the first to experience it!</p>
                </motion.div>

                <motion.div
                    initial={LeftsectionVariants.initial}
                    whileInView={LeftsectionVariants.whileInView}
                    viewport={LeftsectionVariants.viewport}
                    class="sm:max-lg:h-screen text-left sm:max-lg:p-10 lg:p-5 lg:content-center">
                    <h2 className='text-gray-200 sm:max-lg:text-4xl lg:text-3xl sm:max-lg:mb-20'>Meet our student lucy...</h2>
                    <video controls className='w-auto h-auto rounded-xl bg-white'>
                        <source src="HeroLandingPageVideo.mp4" type="video/mp4" />
                    </video>
                </motion.div>
            </section>
        </>
    )
}