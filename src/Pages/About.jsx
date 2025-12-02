import Example from '@/components/Custom/HorizontalScrollCarousel';
import Bottom from '@/components/Global/Bottom';
import BannerA from '@/Sections/AboutPage/BannerA';
import React from 'react';

const About = () => {
    return (
        <div>
            <BannerA></BannerA>
            <Example></Example>
            <Bottom></Bottom>
        </div>
    );
};

export default About;