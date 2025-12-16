import Wrapper from '@/components/Global/Wrapper';
import { Dot } from 'lucide-react';
import React from 'react';
import expert from "../../../asset/Collaborative Discussion.png"

const ExpertiseH = () => {
    const expertiseSection = {
        heading: "Areas of Expertise",
        subHeading:
            "Virtual Armies provides specialized support across key business functions, empowering organizations with efficient operations, strategic growth, and government-ready solutions.",
        expertiseAreas: [
            "Government Contract Support",
            "Certification & Compliance Assistance",
            "Strategic Bid Sourcing & Analysis",
            "Proposal Development & Submission Support",
            "Business Operations & Administrative Support",
            "Marketing & Brand Visibility Support",
            "Customer & Digital Platform Support",
        ],
    };
    return (
        <Wrapper>

            <div className='min-h-[50vh] mt-32 space-y-12 lg:space-y-24'>
                {/* top */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4'>
                    <div className='flex'><Dot /> <h2 className='text-sm lg:text-lg'>Our Expertise</h2></div>
                    <div className='space-y-4'>
                        <h1 className='text-4xl font-semibold'>{expertiseSection.heading}</h1>
                        <h3 className='text-sm lg:text-lg'>{expertiseSection.subHeading}</h3>
                    </div>
                </div>

                {/* 3 */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <img className='col-span-2 h-[25vh] lg:h-[60vh] object-cover rounded-lg' src={expert} alt="" />
                    <div className='col-span-1 grid grid-rows-7 gap-2'>
                        {expertiseSection.expertiseAreas.map((expertiseArea) => (

                            <div key={expertiseArea} className='bg-slate-50 hover:bg-slate-200 flex items-center py-4 px-4 text-lg font-semibold rounded-lg'>
                                <h2 className=' text-sm lg:text-lg'>{expertiseArea}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default ExpertiseH;