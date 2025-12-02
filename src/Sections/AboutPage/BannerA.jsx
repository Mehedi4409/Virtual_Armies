import React from 'react';
import aboutBanner from "../../../asset/Conference Room Meeting.png"
import Wrapper from '@/components/Global/Wrapper';
import { ArrowDown } from 'lucide-react';

const BannerA = () => {
    return (
        <div style={{ backgroundImage: `url(${aboutBanner})` }} className="relative bg-cover bg-center h-svh rounded-b-lg overflow-hidden">
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content goes here */}
            <div className="relative z-10 flex items-baseline-last pb-24 justify-center h-full">
                <Wrapper>
                    <div className='flex items-baseline-last justify-between text-white'>

                        <h1 className=" text-[max(3vw,2.5rem)] font-bold w-1/2">About Us</h1>
                        <div className='flex gap-4'>
                            <p className='flex'>Scroll Down</p>
                            <ArrowDown />
                        </div>

                    </div>
                </Wrapper>
            </div>
        </div>
    );
};

export default BannerA;