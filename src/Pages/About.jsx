import Example from '@/components/Custom/HorizontalScrollCarousel';
import Bottom from '@/components/Global/Bottom';
import BannerA from '@/Sections/AboutPage/BannerA';
import OurTeam from '@/Sections/AboutPage/OurTeam';
import OurValues from '@/Sections/AboutPage/OurValues';
import Newslatter from '@/Sections/HomePage/Newslatter';
import Ourclient from '@/Sections/HomePage/Ourclient';
import Fotter from "../components/Global/Fotter"
import React from 'react';

const About = () => {
    return (
        <div className='space-y-34 pb-4'>
            <BannerA></BannerA>
            <Example></Example>
            <Ourclient></Ourclient>
            <OurTeam></OurTeam>
            <OurValues></OurValues>
            <Newslatter></Newslatter>
            <Fotter></Fotter>
            {/* <Bottom></Bottom> */}
        </div>
    );
};

export default About;