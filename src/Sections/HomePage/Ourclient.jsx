import Wrapper from '@/components/Global/Wrapper';
import { ArrowRight, Dot } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import { InfiniteSlider } from '@/components/ui/infinite-slider';

const Ourclient = () => {
    const aboutContent = {
        heading: "Trusted by top Partners & Supporters",
        subHeading:
            "Are you ready to work together? Fill out our partner application form and let’s explore how we can grow together.",
    };

    const companies = [
        { id: 1, name: "Apex", logo: "/logos/google.svg" },
        { id: 2, name: "Microsoft", logo: "/logos/microsoft.svg" },
        { id: 3, name: "Amazon", logo: "/logos/amazon.svg" },
        { id: 4, name: "Netflix", logo: "/logos/netflix.svg" },
        { id: 5, name: "Spotify", logo: "/logos/spotify.svg" },
        { id: 6, name: "Airbnb", logo: "/logos/airbnb.svg" },
        { id: 7, name: "Adobe", logo: "/logos/adobe.svg" },
        { id: 8, name: "Slack", logo: "/logos/slack.svg" },
        { id: 9, name: "Stripe", logo: "/logos/stripe.svg" },
        { id: 10, name: "Meta", logo: "/logos/meta.svg" },
    ];

    return (
        <div className=''>
            <Wrapper className={`flex flex-col justify-between h-[30vh]`}>
                <div className='h-1/3'>
                    <h3 className='flex'><Dot /> About Us</h3>
                </div>

                <div>
                    <div className='flex flex-col-reverse lg:flex-row justify-between h-full'>
                        <h1 className='text-4xl w-1/3 font-semibold'>{aboutContent.heading}</h1>
                        <div className='w-1/2 flex flex-col justify-between h-full space-y-4'>
                            <h1>{aboutContent.subHeading}</h1>
                            <Button variant="primary" size="lg">
                                About Us <ArrowRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </Wrapper>

            {/* --- INFINITE SLIDERS SECTION --- */}
            <div className="py-12 space-y-6">

                {/* Top Marquee */}
                <InfiniteSlider gap={40}>
                    {companies.map((company) => (
                        <div className='border-2 px-12 py-6 rounded-lg'>
                            <h1 className='font-bold text-2xl'>{company.name}</h1>
                        </div>
                    ))}
                </InfiniteSlider>

                {/* Bottom Marquee — reverse direction */}
                <InfiniteSlider gap={40} reverse>
                    {companies.map((company) => (
                        <div className='border-2 px-12 py-6 rounded-lg'>
                            <h1 className='font-bold text-2xl'>{company.name}</h1>
                        </div>
                    ))}
                </InfiniteSlider>

            </div>
        </div>
    );
};

export default Ourclient;
