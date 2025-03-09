import './Hero.css'
import { motion } from "motion/react"
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom';


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
            <section class="inline-flex h-screen w-screen justify-center items-center">
                <motion.div
                    initial={RightsectionVariants.initial}
                    whileInView={RightsectionVariants.whileInView}
                    viewport={RightsectionVariants.viewport}
                    className='flex-col pr-30 -mt-30'>
                    <h1 className='text-8xl text-white font-light'>Authentifi AI</h1>
                    <div className='inline-flex'>
                        <img src="logo.png" alt="Company Logo" className='h-auto w-30 -mt-4 -mr-3' />
                        <p class='text-3xl text-gray-300 align-baseline text-left'>AI-powered authorship <br></br>verification</p>
                    </div>
                    <div className='w-fit flex-col text-center justify-center '>
                    <p class="text-2xl text-gray-100">Stay in control of your work while using AI</p>
                    
                        <button className='bg-blue-400 rounded-xl text-lg text-white font-bold pt-2 pb-2 pr-4 pl-4 shadow-xl border-1 border-gray-600 hover:bg-green-700 hover:cursor-pointer mt-5 mb-5 '>Register</button>
                    
                    <p class="text-xl text-yellow-300">Be among the first to experience it!</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={LeftsectionVariants.initial}
                    whileInView={LeftsectionVariants.whileInView}
                    viewport={LeftsectionVariants.viewport}
                    class="flex-col">
                    <h2 className='text-gray-200 text-3xl'>Meet our student lucy...</h2>
                    <video controls className='w-auto h-80 rounded-xl'>
                        <source src="HeroLandingPageVideo.mp4" type="video/mp4" />
                    </video>
                </motion.div>
            </section>
        </>
    )
}