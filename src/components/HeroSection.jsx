import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
const HeroSection = () => {
    return (
<div className="relative flex items-center justify-center text-white h-svh">
    <div className="text-center lg:ml-[800px] ml-0 transition duration-300">
        <motion.div className="md:text-5xl sm:text-4xl text-2xl font-bold pl-2"
        initial={{ opacity: 0, y: 30,}}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}>
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-2">Le Plus Grand</p>
            <ReactTyped
                strings={["Footballeur", "Driblleur", "Buteur"]}
                typeSpeed={120}
                backSpeed={100}
                loop
            />
        </motion.div>
        <motion.p className="md:text-5xl sm:text-4xl text-xl font-bold pt-2"
        initial={{ opacity: 0, y: 30,}}
        whileInView={{ opacity: 1, y: 0,}}
        transition={{ duration: 1, delay: 0.5}}
        viewport={{ once: true, amount: 0.2 }}>De Tous Les <br /> Temps</motion.p>
    </div>

    <motion.div className="absolute bottom-4 w-full text-center font-bold font-serif text-xs md:text-xl"
    initial={{ opacity: 0, y: 30,}}
    whileInView={{ opacity: 1, y: 0,}}
    transition={{ duration: 1, delay: 1 }}
    viewport={{ once: true, amount: 0.2 }}>
        « Je joue pour le plaisir, pour ce que j’aime depuis tout petit. <br />Ce n’est pas une question d’argent ou de Ballons d’Or. <br />C’est juste que j’aime le football. » <br />
        — Cristiano Ronaldo
    </motion.div>
</div>

    )
}

export default HeroSection