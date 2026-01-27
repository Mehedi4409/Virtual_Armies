import Bottom from '@/components/Global/Bottom';
import Fotter from '@/components/Global/Fotter';
import Navbar from '@/components/Global/Navbar';
import { Button } from '@/components/ui/button';
import AboutH from '@/Sections/HomePage/AboutH';
import Banner from '@/Sections/HomePage/Banner';
import ContactForm from '@/Sections/HomePage/ContactForm';
import ExpertiseH from '@/Sections/HomePage/ExpertiseH';
import News from '@/Sections/HomePage/News';
import Newslatter from '@/Sections/HomePage/Newslatter';
import Ourclient from '@/Sections/HomePage/Ourclient';
import OurServicesH from '@/Sections/HomePage/OurServicesH';
import WhyUsH from '@/Sections/HomePage/WhyUsH';
import React from 'react';

const Home = () => {
    return (
        <div className='space-y-24 md:space-y-34'>
            <Banner></Banner>
            <AboutH></AboutH>
            <WhyUsH></WhyUsH>
            <ExpertiseH></ExpertiseH>
            {/* <OurServicesH></OurServicesH> */}
            <Ourclient></Ourclient>
            <News></News>
            <ContactForm></ContactForm>
            <Newslatter></Newslatter>
            <Fotter></Fotter>
            {/* <Bottom></Bottom> */}
        </div>
    );
};

export default Home;