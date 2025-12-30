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
        <div
            className="
    relative
    md:bg-[url('../../../asset/Banner.png')]
    md:bg-cover
    md:bg-center
    md:h-svh
    rounded-b-lg
    overflow-hidden
  "
        >
            {/* Overlay (desktop only) */}
            <div className="hidden md:block absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex items-end pb-12 md:pb-24 h-full">
                <Wrapper className={`flex flex-col md:flex-row gap-8`}>
                    <img
                        src={banner}
                        alt="Banner"
                        className="block md:hidden w-full h-[clamp(25vh, 30vh)] mt-34 md:mt-0 rounded-lg object-cover"
                    />
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">

                        {/* Heading */}
                        <h1 className="
              md:text-white
              text-[clamp(1.9rem,4vw,3rem)]
              font-semibold
              md:w-2/5
            ">
                            {statsSection.heading}
                        </h1>

                        {/* Stats */}
                        <div className="flex gap-4 ">
                            {statsSection.stats.map((stat) => (
                                <div key={stat.title} className="md:text-white">
                                    <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-semibold">
                                        {stat.value}
                                    </h2>
                                    <p className="text-[clamp(0.5rem,4vw,1.2rem)]">
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
