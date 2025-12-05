import Wrapper from '@/components/Global/Wrapper';
import { Button } from '@/components/ui/button';
import { ArrowBigRight, ArrowBigRightDashIcon, ArrowRight, Dot, DotIcon } from 'lucide-react';
import React from 'react';
import aboutPic from "../../../asset/About_home_page_pic.png"

const AboutH = () => {
    const heroText = `Welcome to Virtual Armies, your trusted partner in business growth and operational excellence. We specialize in virtual business solutions, contracting support, and strategic expansion , delivering innovative and reliable results.`;

    return (
        <div className='h-[50vh] mt-18'>
            <Wrapper className={`flex flex-col justify-between gap-8 h-full`}>
                <div className='md:h-1/5'>
                    <h3 className='flex'><DotIcon /> About Us</h3>
                </div>

                <div className='md:h-3/5'>
                    <div className='flex flex-col-reverse lg:flex-row justify-between h-full  gap-2'>
                        <div className='md:w-1/2 flex flex-col justify-between h-full gap-2 '>
                            <h3 className='text-[clamp(1rem,1.2vw,1.875rem)] font-sans'>{heroText}</h3>
                            <Button variant="primary" size="lg">About Us <ArrowRight /></Button>
                        </div>
                        <img className='h-full rounded-lg' src={aboutPic} alt="" />
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default AboutH;