import { motion } from "motion/react"
import RegisterForm from "../RegisterPage/RegisterForm"



export default function Register() {

    return (
        <>


            <motion.section 
            initial={{opacity: 0.33}}
            whileInView={{opacity: 1, transition: { delay: 0.1, duration: 0.2 } }}
            viewport={{ once: true, amount: 0.2 }}
            class="h-screen">
                <RegisterForm></RegisterForm>
            </motion.section>
        </>
    )
}

