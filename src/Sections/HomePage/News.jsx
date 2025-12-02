import Wrapper from '@/components/Global/Wrapper';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNavigation
} from '../../../components/motion-primitives/carousel';
import AIPic from "../../../asset/Robotic Hand Writing.png"
import Global from "../../../asset/Global Operations in Tech Environment.png"
import Support from "../../../asset/Futuristic VR Explorer.png"
import Tools from "../../../asset/Focused Work Session.png"
import client from "../../../asset/Professional Discussion2.png"

import { ArrowRight, Dot } from 'lucide-react';
import React from 'react';

const newsData = [
    {
        id: 1,
        title: "Virtual Armies Launches New AI-Powered Support System",
        date: "Feb 12, 2025",
        image: AIPic,
    },
    {
        id: 5,
        title: "Virtual Armies Surpasses 500+ Active Clients Worldwide",
        date: "Dec 12, 2024",
        image: client,
    },
    {
        id: 3,
        title: "Efficiency Boost: How Virtual Support Is Transforming Businesses",
        date: "Jan 18, 2025",
        image: Support,
    },
    {
        id: 2,
        title: "VA Expands Global Operations With New Partnerships",
        date: "Jan 29, 2025",
        image: Global,
    },
    {
        id: 4,
        title: "Government Contracting Made Easier With New VA Tools",
        date: "Dec 27, 2024",
        image: Tools,
    },
];

const News = () => {
    return (
        <Wrapper>
            <div className="min-h-[50vh] mt-32 space-y-24">

                {/* Top Section */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                        <Dot />
                        <h2>News</h2>
                    </div>

                    <h1 className="text-4xl font-semibold">
                        Latest News
                    </h1>

                    <div className="flex justify-end">
                        <Button variant="primary" size="lg">
                            More News <ArrowRight />
                        </Button>
                    </div>
                </div>

                {/* Carousel */}
                <Carousel>
                    <CarouselContent className="-ml-4">
                        {newsData.map((item) => (
                            <CarouselItem key={item.id} className="basis-1/3 pl-4">
                                <div className="rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        draggable={false}
                                        className="h-[30vh] w-full object-cover"
                                    />
                                </div>
                                    <div className="pt-4 space-y-2">
                                        <p className="text-sm text-gray-500">{item.date}</p>
                                        <h3 className="text-lg font-semibold leading-snug">
                                            {item.title}
                                        </h3>
                                    </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>


                    <CarouselNavigation
                        className="absolute -bottom-24 top-auto w-full justify-end gap-2"
                        classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
                        alwaysShow
                    />

                </Carousel>
            </div>
        </Wrapper>
    );
};

export default News;
