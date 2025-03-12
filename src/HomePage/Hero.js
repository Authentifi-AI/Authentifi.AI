import { motion} from "motion/react"
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
            initial: { opacity: 0.33, x:-50},
            whileInView: { opacity: 1, x:0, transition: { delay: 0.15, duration: 0.3 } },
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
              
        
            <section class="grid text-center">
                <motion.div
                    initial={RightsectionVariants.initial}
                    whileInView={RightsectionVariants.whileInView}
                    viewport={RightsectionVariants.viewport}
                    className='content-center pt-30'>
                    <h1 className='text-5xl text-white font-light'>Authentifi AI</h1>
                    <div className='inline-flex mt-2'>
                        <img src="logo.png" alt="Company Logo" className='h-auto w-16' />
                        <p class='text-xl text-gray-200 text-left'>AI-powered authorship <br></br>verification</p>
                    </div>
                    <p class="text-lg font-bold text-gray-100 mt-10 ">Stay in control of your work while using AI</p>
                    <button className='bg-blue-400 rounded-xl text-xl text-white font-bold pt-2 pb-2 pr-4 pl-4 shadow-xl border-1 border-gray-600 hover:bg-green-700 hover:cursor-pointer mt-5'>Register</button>
                    <p class="text-xl text-yellow-300 mt-5">Be among the first to experience it!</p>
                </motion.div>

                <motion.div
                    initial={LeftsectionVariants.initial}
                    whileInView={LeftsectionVariants.whileInView}
                    viewport={LeftsectionVariants.viewport}
                    class="text-left p-5 h-screen content-center">
                    <h2 className='text-gray-200 text-2xl'>Meet our student lucy...</h2>
                    <video controls className='rounded-xl bg-white h-auto w-max'>
                        <source src="HeroLandingPageVideo.mp4" type="video/mp4" />
                    </video>
                </motion.div>
            </section>
        </>
    )
}