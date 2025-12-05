import Wrapper from '@/components/Global/Wrapper';
import { ArrowDown } from 'lucide-react';
import React from 'react';
const ExpBanner = () => {

    return (
        <div className="relative bg-[#48a9a6] h-svh rounded-b-lg overflow-hidden">
            {/* Dark overlay */}

            {/* Content goes here */}
            <div className="relative z-10 flex items-baseline-last pb-24 justify-center h-full">
                <Wrapper>
                    <div className='flex items-baseline-last justify-between text-white'>

                        <h1 className=" text-[max(3vw,2.5rem)] font-bold w-1/2">Experience Center</h1>
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

export default ExpBanner;