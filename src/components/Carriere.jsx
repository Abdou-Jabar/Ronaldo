import { motion } from 'framer-motion'
import real from '/assets/realmadrid.svg'
import juventus from '/assets/juventus-4.svg'
import manu from '/assets/manu.svg'
import sporting from '/assets/sporting.svg'
import alnassr from '/assets/alnassr.svg'


const Carriere = () => {

    const Carrer = [
        {
            img : sporting,
            name : "Sporting",
            date : "1997-2003",
            text : "Formation au Sporting, révélateur de son talent exceptionnel.",
            lien : ""
        },
        {
            img : manu,
            name : "Manchester United",
            date : "2003-2009",
            text : "Explosion mondiale, multiple titres remportés sous Ferguson.",
            lien : ""
        },        
        {
            img : real,
            name : "Real Madrid",
            date : "2009-2018",
            text : "Recordman du club, quadruple Ballon d’Or, légende madrilène.",
            lien : ""
        },        {
            img : juventus,
            name : "Juventus",
            date : "2018-2021",
            text : "Domination en Serie A, adaptation réussie en Italie.",
            lien : ""
        },        {
            img : manu,
            name : "Manchester United",
            date : "2021-2022",
            text : "Retour tumultueux, moments forts et départ anticipé.",
            lien : ""
        },        {
            img : alnassr,
            name : "Sporting CP",
            date : "1997-2003",
            text : "Nouveau défi en Arabie Saoudite, contrat record signé.",
            lien : ""
        },
    ]

    return (
        <div className=" text-white pt-20 pb-15">
            <motion.h2 className="text-center uppercase font-semibold text-3xl md:text-4xl lg:text-5xl mb-20" 
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            viewport={{once: false, amount: 0.2}}
            >
                carriere
            </motion.h2>
            <div className="flex items-center justify-center mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 ">
                    {Carrer.map((carrer) => (
                        <motion.div className="= w-60 text-center backdrop-blur-2xl rounded-2xl flex flex-col"
                        initial={{ opacity: 0, y: 30,}}
                        whileInView={{ opacity: 1, y: 0,}}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.2 }}>
                        <div className='flex flex-col items-center justify-center'>
                            <img src={carrer.img} className='h-15 -top-7 relative'/>
                            <h1 className='font-extrabold'>{carrer.name}</h1>
                            <h5 className='font-semibold'>{carrer.date}</h5>
                            <p className='m-3'>{carrer.text}</p>
                            <p className='relative my-3 underline'>
                                <a href={carrer.lien}>Voir Plus</a>
                            </p>
                        </div>
                    </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carriere