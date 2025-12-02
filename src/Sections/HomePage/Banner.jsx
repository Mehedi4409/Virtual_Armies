import Wrapper from '@/components/Global/Wrapper';
import React from 'react';
import banner from "../../../asset/Banner.png"
const Banner = () => {
    const statsSection = {
        heading: "Expert Business Development Solutions",
        stats: [
            {
                title: "Tasks Completed",
                value: "150+",
            },
            {
                title: "Government Contracts Supported",
                value: "320+",
            },
            {
                title: "Business Expansion Campaigns",
                value: "75+",
            },
        ],
    };
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className="relative bg-cover bg-center h-svh rounded-b-lg overflow-hidden">
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content goes here */}
            <div className="relative z-10 flex items-baseline-last pb-24 justify-center h-full">
                <Wrapper>
                    <div className='flex items-baseline-last justify-between'>

                        <h1 className="text-white text-[max(3vw,2.5rem)] font-bold w-1/2">{statsSection.heading}</h1>
                        <div className='flex items-end gap-6'>
                            {statsSection.stats.map((stat) => (
                                <div
                                    key={stat.title}
                                    className=" space-y-2 text-white"
                                >
                                    <h2 className="text-5xl">{stat.value}</h2>
                                    <p className="">{stat.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
    );
};

export default Banner;