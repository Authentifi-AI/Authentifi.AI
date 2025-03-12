import { motion } from "motion/react"
import { useMediaQuery } from 'react-responsive'


function Card({ img_src, img_alt, text_value }) {

    var sectionVariants = {};
    // check the screen size and set variables accordingly
    if (useMediaQuery({ query: '(min-width: 1025px)' })) {
        sectionVariants = {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.4 } },
            viewport: { once: true, amount: 0.7 }
        };
    }

    else {

        sectionVariants = {
            initial: { opacity: 0.33, x: -50 },
            whileInView: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.4 } },
            viewport: { once: true, amount: 0.2 }
        };
    }
    return (
        <motion.div
        initial={sectionVariants.initial}
        whileInView={sectionVariants.whileInView}
        viewport={sectionVariants.viewport}
         className="bg-white border-1 rounded-2xl text-left pt-2 pl-5 pr-5 pb-5 mb-5">
            <img src={img_src} alt={img_alt} className="w-auto h-20" />
            <h2 className='text-black font-bold text-lg mt-5'>{text_value} </h2>
        </motion.div>
    );
}


export default function Feature() {



    return (
        <>
            <section

                className="grid pr-5 pl-5 pb-30">

                <Card img_src="./work.gif" img_alt="Work gif" text_value="Choose your favorite AI platform and begin working"></Card>
                <Card img_src="./folder.gif" img_alt="Folder gif" text_value="Record your progress in real time, tracking progress and sources"></Card>
                <Card img_src="./certificate.gif" img_alt="Certificate gif" text_value="Publish your work with confidence"></Card>


                <motion.p 
                initial={{opacity: 0.33}}
                whileInView={{opacity: 1, transition: { delay: 0.1, duration: 0.2 } }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-lg text-center font-bold text-gray-100">
                    "Verify your authorship while working with AI to prove your contributions and authenticity."
                </motion.p>

            </section>


        </>
    )
}