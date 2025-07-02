import React from 'react'
import { motion } from 'framer-motion'
import championsleague from '/assets/TropheesCollectifs/championsleague.png';
import communityshield from '/assets/TropheesCollectifs/community-shield.png';
import coupeduroi from '/assets/TropheesCollectifs/coupeduroi.png';
import coupeintercontinentalefifa from '/assets/TropheesCollectifs/coupe-intercontinentale-fifa.png';
import coupeitalie from '/assets/TropheesCollectifs/coupe-italie.png';
import euro from '/assets/TropheesCollectifs/euro.png';
import facup from '/assets/TropheesCollectifs/fa-cup.webp';
import internationalchampionscup from '/assets/TropheesCollectifs/international-champions-cup.png';
import laliga from '/assets/TropheesCollectifs/laliga.png';
import leaguecup from '/assets/TropheesCollectifs/league-cup.webp';
import liguedesnations from '/assets/TropheesCollectifs/liguedesnations.png';
import premierleauge from '/assets/TropheesCollectifs/premierleauge.png';
import seriea from '/assets/TropheesCollectifs/serie-a.png';
import supercoudeuefa from '/assets/TropheesCollectifs/supercoudeuefa.png';
import supercoupedespagne from '/assets/TropheesCollectifs/supercoupe-despagne.png';
import supercoupeportugal from '/assets/TropheesCollectifs/super-coupe-portugal.png';
import supercoupeditalie from '/assets/TropheesCollectifs/superocoupeditalie.png';




const Palmares = () => {

    const tropheesCollectfis = [
        {
            img: championsleague,
            nom: "Ligue des champions",
            annee: "2007/2008, 2013/2014, 2015/2016, 2016/2017, 2017/2018",
            nombre: 5,
            lien: ""
        },
        {
            img: liguedesnations,
            nom: "Ligue des Nations",
            annee: "2018/2019, 2024/2025",
            nombre: 2,
            lien: ""
        },
        {
            img: euro,
            nom: "Euro",
            annee: "2016",
            nombre: 1,
            lien: ""
        },
        {
            img: supercoudeuefa,
            nom: "Super Coupe de l'UEFA",
            annee: "2014/2015, 2016/2017, 2017/2018",
            nombre: 3,
            lien: ""
        },
        {
            img: premierleauge,
            nom: "Première Ligue",
            annee: "2006/2007, 2007/2008, 2008/2009",
            nombre: 3,
            lien: ""
        },
        {
            img: laliga,
            nom: "La Liga",
            annee: "2011/2012, 2016/2017",
            nombre: 2,
            lien: ""
        },
        {
            img: supercoupeditalie,
            nom: "Supercoupe d'Italie",
            annee: "2018/2019, 2020/2021",
            nombre: 2,
            lien: ""
        },
        {
            img: seriea,
            nom: "Serie A",
            annee: "2018/2019, 2019/2020",
            nombre: 2,
            lien: ""
        },
        {
            img: leaguecup,
            nom: "Coupe de la Ligue",
            annee: "2005/2006, 2008/2009",
            nombre: 2,
            lien: ""
        },
        {
            img: coupeduroi,
            nom: "Coupe du Roi",
            annee: "2010/2011, 2013/2014",
            nombre: 2,
            lien: ""
        },
        {
            img: coupeitalie,
            nom: "Coupe d'Italie",
            annee: "2020/2021",
            nombre: 1,
            lien: ""
        },
        {
            img: facup,
            nom: "La Coupe d'Angleterre des Émirats",
            annee: "2003/2004",
            nombre: 1,
            lien: ""
        },
        {
            img: supercoupedespagne,
            nom: "Supercoupe d'Espagne",
            annee: "2012/2013, 2017/2018",
            nombre: 2,
            lien: ""
        },
        {
            img: supercoupeportugal,
            nom: "Supercoupe de Portugal",
            annee: "2002/2003",
            nombre: 1,
            lien: ""
        },
        {
            img: communityshield,
            nom: "Community Shield",
            annee: "2003/2004, 2007/2008, 2008/2009",
            nombre: 3,
            lien: ""
        },
        {
            img: coupeintercontinentalefifa,
            nom: "Coupe internationale de la FIFA",
            annee: "2008, 2014, 2016, 2017",
            nombre: 4,
            lien: ""
        },
        {
            img: internationalchampionscup,
            nom: "International Champions Cup",
            annee: "2013",
            nombre: 1,
            lien: ""
        },

    ]

    return <>
        <div className='pb-10 text-white'>
            <motion.div className='text-center uppercase font-semibold text-3xl md:text-4xl lg:text-5xl text-white'
            initial={{ opacity: 0, y: 30,}}
            whileInView={{ opacity: 1, y: 0,}}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}>
                Palmares
            </motion.div>
            <div className="max-w-[380px] sm:max-w-[600px] mx-auto pt-5 space-y-4">
                {tropheesCollectfis.map((trophee, index) => (
                    <motion.div key={index} className="flex items-center backdrop-blur-2xl rounded-md shadow-sm p-3"
                    initial={{ opacity: 0, x: 50,}}
                    whileInView={{ opacity: 1, x: 0,}}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}>
                        <div className="w-10 h-10 flex items-center justify-center mr-4">
                            <img src={trophee.img} alt={trophee.nom} className="h-8 w-8 object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <a
                            href={trophee.lien ?? '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-medium text-white hover:underline"
                            >
                                {trophee.nom}
                            </a>
                            <p className="text-sm text-neutral-400">{trophee.annee}</p>
                        </div>
                        <div className="ml-auto text-3xl font-semibold text-gray-300">
                            {trophee.nombre}
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    </>

}

export default Palmares