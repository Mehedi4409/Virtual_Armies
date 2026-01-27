import React from 'react';
import { Dot, ArrowRight } from 'lucide-react';
import Wrapper from '@/components/Global/Wrapper';
import expert from "../../../asset/Collaborative Discussion.png";

const ExpertiseH = () => {
    const expertiseSection = {
        label: "02 — Expertise",
        heading: "Areas of Expertise",
        subHeading:
            "Virtual Armies provides specialized support across key business functions, empowering organizations with efficient operations, strategic growth, and government-ready solutions.",
        expertiseAreas: [
            "Government Contract Support",
            "Certification & Compliance Assistance",
            "Strategic Bid Sourcing & Analysis",
            "Proposal Development & Submission",
            "Business Operations Support",
            "Marketing & Brand Visibility",
            "Customer & Digital Platform Support",
        ],
    };

    return (
        <section className="bg-white py-24 lg:py-32">
            <Wrapper>
                <div className="flex flex-col gap-16 lg:gap-24">
                    
                    {/* 1. TOP SECTION */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
                        {/* Col 1: Label */}
                        <div className="flex flex-col justify-start border-t border-gray-200 pt-6">
                            <div className="flex items-center text-sm font-semibold text-gray-900 uppercase tracking-widest">
                                <Dot className="text-black -ml-1.5 w-4 h-4" /> 
                                {expertiseSection.label}
                            </div>
                        </div>

                        {/* Col 2: Heading & Subheading */}
                        <div className="md:col-span-2 flex flex-col gap-6 border-t border-gray-200 pt-6">
                            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter text-gray-900 leading-[1.1] text-balance max-w-xl">
                                {expertiseSection.heading}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-500 leading-relaxed text-pretty max-w-lg">
                                {expertiseSection.subHeading}
                            </p>
                        </div>
                    </div>

                    {/* 2. BOTTOM SECTION */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                        
                        {/* Image Column - Stretches to match height of list */}
                        <div className="lg:col-span-2 relative min-h-[400px] lg:min-h-auto rounded-xl overflow-hidden bg-gray-100">
                            <img 
                                className="absolute inset-0 w-full h-full object-cover grayscale-10" 
                                src={expert} 
                                alt="Expertise context" 
                            />
                        </div>

                        {/* List Column */}
                        <div className="lg:col-span-1 flex flex-col gap-3 justify-center">
                            {expertiseSection.expertiseAreas.map((area, index) => (
                                <div 
                                    key={index} 
                                    className="group flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-lg cursor-default border border-transparent"
                                >
                                    {/* Increased Font Size here */}
                                    <h3 className="text-base md:text-lg font-medium tracking-tight transition-transform group-hover:translate-x-1">
                                        {area}
                                    </h3>
                                    
                                    {/* Icon interaction */}
                                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-[#48a9a6] transition-all duration-300 ease-out" />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default ExpertiseH;