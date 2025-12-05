import Wrapper from '@/components/Global/Wrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight, Dot } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import team1 from "../../../asset/team 1.png"
import team2 from "../../../asset/team 2.png"
import team3 from "../../../asset/team 3.png"
import team4 from "../../../asset/team 4.png"
import team5 from "../../../asset/team 5.png"
import team6 from "../../../asset/team 6.png"

const OurTeam = () => {
    const aboutContent = {
        heading: "Our Team Members",
        subHeading:
            "Are you ready to work together? Fill out our partner application form and let’s explore how we can grow together.",
        teams: [
            {
                id: 1,
                name: "John Carter",
                designation: "Founder & CEO",
                img: team5,
            },
            {
                id: 2,
                name: "Sarah Mitchell",
                designation: "Chief Operating Officer",
                img: team2,
            },
            {
                id: 3,
                name: "Michael Adams",
                designation: "Business Development Manager",
                img: team3,
            },
            {
                id: 4,
                name: "John Watson",
                designation: "Marketing Specialist",
                img: team4,
            },
            {
                id: 5,
                name: "David Lee",
                designation: "Technical Lead",
                img: team6,
            },
            {
                id: 6,
                name: "Anna Rose",
                designation: "Project Manager",
                img: team1,
            }
        ]
    };



    return (
        <div>
            <Wrapper className="flex flex-col gap-12 lg:gap-24 justify-between">
                {/* top */}
                <div className='grid lg:grid-cols-3 gap-4'>
                    <div className='flex'><Dot /> <h2>Team</h2></div>
                    <div className='space-y-4'>
                        <h1 className='text-4xl font-semibold'>{aboutContent.heading}</h1>
                    </div>
                </div>

                <div className='grid  lg:grid-cols-3 gap-4'>
                    {aboutContent.teams.map((team) => (
                        <TeamCard key={team.id} team={team} />
                    ))}
                </div>
            </Wrapper>
        </div>
    );
};

export default OurTeam;



// Optional: container variants (if needed)
const containerVariants = {
    initial: {},
    hover: {}
};

const imageVariants = {
    initial: {
        scale: 0.5,
        transition: { duration: 0.5, ease: "easeOut" } // smooth hover-out
    },
    enlarged: {
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" } // smooth hover-in
    },

    // transition: { duration: 0.5 }
};
export function TeamCard({ team }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleToggle = () => {
        setIsClicked((prev) => !prev);
    };
    return (
        <motion.div
            variants={containerVariants}
            onClick={handleToggle}
            animate={isClicked ? "enlarged" : "initial"}
            initial="initial"
            whileHover="enlarged"
            className="group relative col-span-1 bg-slate-200 rounded-lg overflow-hidden aspect-square cursor-pointer"
        >
            {/* GRADIENT OVERLAY */}

            <motion.img
                src={team.img}
                alt={team.name}
                variants={imageVariants}
                // whileHover={{ scale: 1, transition: { duration: 0.5 } }} 
                transition={{ duration: 0.5 }}
                className="
                absolute inset-0 z-0 w-full h-full object-cover object-center rounded-lg
                group-hover:rounded-lg
                "
            />
            <GradientOverlay isActive={isClicked} />

            {/* Bottom Bar */}
            <div
                className={`
          absolute bottom-0 left-0 z-20 w-full px-4 py-3
          flex items-center justify-between     
    ${isClicked ? "text-white" : "text-black"} transition-all
        `}
            >
                <div>
                    <p className="font-semibold group-hover:text-white transition duration-500 delay-200">
                        {team.name}
                    </p>
                    <p className="text-sm opacity-80 group-hover:text-white transition duration-500 delay-200">
                        {team.designation}
                    </p>
                </div>

                <button
                    className={`
            font-bold text-lg px-3 py-1 rounded-md transition duration-500
            ${isClicked ? "bg-white text-black" : "bg-purple-300 text-black"}
            group-hover:bg-white group-hover:text-black
          `}
                >
                    in
                </button>
            </div>
        </motion.div>
    );
}


/* -----------------------------------
   GRADIENT COMPONENT (SEPARATE)
----------------------------------- */
function GradientOverlay({ isActive }) {

    const gradientVariants = {
        hidden: {
            opacity: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        },
        visible: {
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };
    return (
        <motion.div
            variants={gradientVariants}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            whileHover="visible"
            className="
        absolute inset-0 z-10
        bg-gradient-to-t from-black/60 via-black/10 to-transparent
        pointer-events-none
      "
        />
    );
}