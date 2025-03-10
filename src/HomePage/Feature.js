// import "./Feature.css"
import { motion } from "motion/react"
import { useMediaQuery } from 'react-responsive'


function Card({ img_src, img_alt, text_value }) {
    return (
        <div className="bg-white border-1 rounded-2xl text-left w-7/8 lg:w-15/16 mb-20 p-10 pr-7 lg:p-5 2xl:pb-5">
            <img src={img_src} alt={img_alt} className="w-auto h-50 lg:h-25" />
            <h2 className='text-black font-bold text-4xl lg:text-xl 2xl:text-2xl mt-10 2xl:mt-20'>{text_value} </h2>
        </div>
    );
}


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

    else {

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

                className="grid lg:grid-cols-3 justify-items-center mb-100 sm:max-lg:-mt-96 lg:pr-10 lg:pl-10 lg:mt-25">

                <Card img_src="./work.gif" img_alt="Work gif" text_value="Choose your favorite AI platform and begin working"></Card>
                <Card img_src="./folder.gif" img_alt="Folder gif" text_value="Record your progress in real time, tracking progress and sources"></Card>
                <Card img_src="./certificate.gif" img_alt="Certificate gif" text_value="Publish your work with confidence"></Card>


                <p className="text-3xl text-center font-bold text-gray-100 lg:col-span-3">
                    "Verify your authorship while working with AI to prove your contributions and authenticity."
                </p>

            </motion.section>


        </>
    )
}