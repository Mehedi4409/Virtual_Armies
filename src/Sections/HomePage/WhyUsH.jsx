import React from 'react';
import { Dot } from 'lucide-react';
import { motion } from 'framer-motion';
import Wrapper from '@/components/Global/Wrapper';

// Assuming these are your image imports
import tailoredSol from "../../../asset/Professional Discussion.png"
import Commitment from "../../../asset/Business Handshake.png"
import Result from "../../../asset/About_home_page_pic.png"

const WhyUsH = () => {
    const aboutContent = {
        label: "01 — Why Us",
        heading: "Strategic clarity in a complex world.",
        subHeading: "We don't just provide support; we provide architecture for growth. Our approach combines military-grade precision with corporate agility.",
        reasons: [
            {
                title: "Tailored Solutions",
                description: "Strategies built specifically for your operational DNA, not a template.",
                image: tailoredSol,
            },
            {
                title: "Commitment to Excellence",
                description: "A standard of professionalism that ensures seamless execution every time.",
                image: Commitment,
            },
            {
                title: "Results-Driven",
                description: "Focusing on measurable outcomes that fuel long-term business strength.",
                image: Result,
            },
        ],
    };

    return (
        <section className=" py-24 lg:py-32">
            <Wrapper>
                {/* Unified Grid System: 
                   We use one single grid for both Header and Items to guarantee alignment.
                */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-24">
                    
                    {/* --- ROW 1: HEADER --- */}
                    
                    {/* Col 1: Label (Aligns with Image 1 below) */}
                    <div className="flex flex-col justify-start border-t border-gray-200 pt-6">
                        <div className="flex items-center text-xs font-semibold text-gray-400 uppercase tracking-widest">
                            <Dot className="text-black -ml-1.5 w-4 h-4" /> 
                            {aboutContent.label}
                        </div>
                    </div>

                    {/* Col 2 & 3: Heading & Subheading (Starts at Col 2, aligning with Image 2) */}
                    <div className="md:col-span-2 flex flex-col gap-6 border-t border-gray-200 pt-6">
                        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter text-gray-900 leading-[1.1] text-balance max-w-xl">
                            {aboutContent.heading}
                        </h2>
                        <p className="text-lg text-gray-500 leading-relaxed text-pretty max-w-lg">
                            {aboutContent.subHeading}
                        </p>
                    </div>

                    {/* --- ROW 2: CONTENT CARDS --- */}

                    {aboutContent.reasons.map((reason, index) => (
                        <div key={index} className="group flex flex-col gap-6">
                            {/* Image Container */}
                            <div className="overflow-hidden rounded-md bg-gray-100 aspect-[4/3] w-full relative">
                                <motion.img 
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500" 
                                    src={reason.image} 
                                    alt={reason.title} 
                                />
                            </div>

                            {/* Text Content */}
                            <div className="space-y-3 pr-2">
                                <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                                    {reason.title}
                                </h3>
                                <p className="text-sm lg:text-base text-gray-500 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </Wrapper>
        </section>
    );
};

export default WhyUsH;