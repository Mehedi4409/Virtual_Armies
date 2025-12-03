import Wrapper from '@/components/Global/Wrapper';
import { Award, Shield, Zap, Heart, Star, Globe, Dot } from 'lucide-react'; // Example icons
import React from 'react';

const OurValues = () => {
    const ourValuesContent = {
        heading: "Our Values",
        subHeading: "Guiding principles that define who we are and how we work.",
        values: [
            {
                id: 1,
                valueName: "Excellence",
                subHeading: "Striving for top quality results",
                icon: <Award size={56} />
            },
            {
                id: 2,
                valueName: "Integrity",
                subHeading: "Honesty and accountability always",
                icon: <Shield size={56} />
            },
            {
                id: 3,
                valueName: "Innovation",
                subHeading: "Creativity drives our solutions",
                icon: <Zap size={56} />
            },
            // Added 3 new values
            {
                id: 4,
                valueName: "Collaboration",
                subHeading: "Working together to succeed",
                icon: <Heart size={56} />
            },
            {
                id: 5,
                valueName: "Sustainability",
                subHeading: "Responsible for long-term impact",
                icon: <Globe size={56} />
            },
            {
                id: 6,
                valueName: "Customer Focus",
                subHeading: "Putting clients at the center",
                icon: <Star size={56} />
            },
        ],
    };

    return (
        <div>
            <Wrapper className="flex flex-col gap-12 justify-between">
                {/* Top heading */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='flex items-center gap-2'><Dot /> <h2>Values</h2></div>
                    <div className='md:col-span-2'>
                        <h1 className='text-4xl font-semibold'>{ourValuesContent.heading}</h1>
                        {/* <p className='mt-2 text-gray-600'>{ourValuesContent.subHeading}</p> */}
                    </div>
                </div>

                {/* Values grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {ourValuesContent.values.map((value) => (
                        <div
                            key={value.id}
                            className="col-span-1 bg-slate-200 hover:bg-slate-300 transition duration-300 rounded-lg overflow-hidden aspect-square p-8 flex flex-col justify-between"
                        >
                            <div className="text-slate-600 font-light">{value.icon}</div>
                            <div>
                                <h3 className="text-2xl font-semibold">{value.valueName}</h3>
                                <p className="text-gray-700 text-sm">{value.subHeading}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </div>
    );
};

export default OurValues;
