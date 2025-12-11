import Wrapper from '@/components/Global/Wrapper';
import { Dot } from 'lucide-react';
import React from 'react';
import tailoredSol from "../../../asset/Professional Discussion.png"
import Commitment from "../../../asset/Business Handshake.png"
import Result from "../../../asset/About_home_page_pic.png"

const WhyUsH = () => {
    const aboutContent = {
        heading: "Empowering Businesses with Strategic Virtual Solutions",
        subHeading:
            "Virtual Armies delivers tailored support, innovative strategies, and proven expertise to help organizations operate efficiently, scale confidently, and achieve measurable success.",

        reasons: [
            {
                title: "Tailored Solutions",
                description:
                    "We understand that every business is unique. Our team develops personalized strategies and services aligned with your specific goals, industry demands, and operational challenges.",
                image: tailoredSol,
            },
            {
                title: "Commitment to Excellence",
                description:
                    "We hold ourselves to the highest standards of professionalism and quality, ensuring every client receives exceptional service, seamless execution, and dependable support.",
                image: Commitment,
            },
            {
                title: "Results-Driven Approach",
                description:
                    "Our focus is on delivering measurable outcomes that fuel growth, strengthen operations, and drive long-term success across all areas of your business.",
                image: Result,
            },
        ],
    };
    return (
        <Wrapper>

            <div className='min-h-[50vh] mt-32 space-y-12 lg:space-y-24'>
                {/* top */}
                <div className='grid lg:grid-cols-3 gap-4'>
                    <div className='flex'><Dot /> <h2 className='text-sm lg:text-lg'>Why Us</h2></div>
                    <div className='space-y-4'>
                        <h1 className='text-4xl font-semibold'>{aboutContent.heading}</h1>
                        <h3  className='text-sm lg:text-lg'>{aboutContent.subHeading}</h3>
                    </div>
                </div>

                {/* 3 */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {aboutContent.reasons.map((reason) => (
                        <div className='space-y-2'>
                            <img className='rounded-lg' src={reason.image} alt="" />
                            <h3 className='text-2xl font-semibold'>{reason.title}</h3>
                            <p className='sm:text-sm md:text-lg'>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default WhyUsH;