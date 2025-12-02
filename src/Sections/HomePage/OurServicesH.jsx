import Wrapper from '@/components/Global/Wrapper';
import { Dot } from 'lucide-react';
import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselItem,
} from '../../components/ui/carousel';

const OurServicesH = () => {
    // Example service items
    const services = [
        { id: 1, title: 'Government Assistance' },
        { id: 2, title: 'Certification Support' },
        { id: 3, title: 'Bid Sourcing' },
        { id: 4, title: 'Proposal Development' },
        { id: 5, title: 'Business Operations Support' },
        { id: 6, title: 'Marketing Support' },
        { id: 7, title: 'Customer Support' },
    ];

    return (
        <section className="h-[50vh] mt-18 py-12">
            <Wrapper className="flex h-1/2 flex-col gap-8">
                {/* Top Section */}
                <div className="flex  items-center gap-2">
                    <Dot />
                    <h2 className="text-2xl font-semibold">Our Services</h2>
                </div>

            </Wrapper>
            <div className="relative w-full ">
                <Carousel>
                    <CarouselContent className="w-[75%]">
                        {services.map((service) => (
                            <CarouselItem key={service.id} className="basis-1/3 pl-4">
                                <div className="flex aspect-square flex-col items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
                                    <h3 className="text-lg font-semibold">{service.title}</h3>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <Wrapper>
                        <CarouselNavigation
                            className="absolute -bottom-24 top-auto w-full justify-end gap-2"
                            classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
                            alwaysShow
                        />
                    </Wrapper>
                </Carousel>
            </div>
            {/* Carousel */}
        </section>
    );
};

export default OurServicesH;
