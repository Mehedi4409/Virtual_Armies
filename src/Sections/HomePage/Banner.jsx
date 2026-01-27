import Wrapper from '@/components/Global/Wrapper'
import React from 'react'
import banner from "../../../asset/Banner.png"

const Banner = () => {
    const statsSection = {
        heading: "Expert Business Development Solutions",
        stats: [
            { title: "Tasks Completed", value: "150+" },
            { title: "Contracts Supported", value: "320+" },
            { title: "Business Campaigns", value: "75+" },
        ],
    }

    return (
        <div className="
            relative 
            w-full 
            md:h-svh 
            md:rounded-b-2xl 
            md:overflow-hidden
        ">
            {/* --- DESKTOP BACKGROUND --- */}
            {/* Only visible on md screens and up */}
            <div 
                className="hidden md:block absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${banner})` }}
            >
                {/* Desktop Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            </div>

            {/* --- CONTENT CONTAINER --- */}
            <div className="relative z-10 h-full flex flex-col justify-end">
                <Wrapper className="py-12 md:pb-24">
                    
                    {/* Flex Container: Mobile = Column, Desktop = Row */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-8">
                        
                        {/* --- MOBILE IMAGE --- */}
                        {/* Hidden on desktop, visible on mobile */}
                        <div className="block md:hidden w-full rounded-2xl overflow-hidden shadow-lg mb-2">
                            <img
                                src={banner}
                                alt="Banner"
                                className="w-full h-64 object-cover"
                            />
                        </div>

                        {/* --- HEADING --- */}
                        <div className="md:w-1/2">
                            <h1 className="
                                text-slate-900 md:text-white
                                text-3xl sm:text-4xl md:text-[clamp(2.5rem,4vw,3.5rem)]
                                font-bold
                                leading-tight
                            ">
                                {statsSection.heading}
                            </h1>
                        </div>

                        {/* --- STATS --- */}
                        {/* Mobile: Grid (2 cols), Desktop: Flex Row */}
                        <div className="grid grid-cols-2 md:flex md:flex-row gap-y-8 gap-x-12 md:gap-12">
                            {statsSection.stats.map((stat, index) => (
                                <div 
                                    key={stat.title} 
                                    // The 3rd item spans 2 cols on mobile to look centered/balanced
                                    className={`flex flex-col ${index === 2 ? 'col-span-2 md:col-span-1' : ''}`}
                                >
                                    <h2 className="
                                        text-slate-900 md:text-white
                                        text-3xl md:text-4xl 
                                        font-bold 
                                        mb-1
                                    ">
                                        {stat.value}
                                    </h2>
                                    <p className="
                                        text-slate-500 md:text-gray-300
                                        text-sm md:text-base 
                                        font-medium 
                                        uppercase 
                                        tracking-wide
                                    ">
                                        {stat.title}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </Wrapper>
            </div>
        </div>
    )
}

export default Banner