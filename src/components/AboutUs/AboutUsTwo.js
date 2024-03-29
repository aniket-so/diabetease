import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import SignupHomeEight from '../HomeEight/SignupHomeEight';
import TestimonialHomeEight from '../HomeEight/TestimonialHomeEight';
import WorkPartHomeEight from '../HomeEight/WorkPartHomeEight';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import FunFactHomeThree from '../HomeThree/FunFactHomeThree';
import ServicesHomeThree from '../HomeThree/ServicesHomeThree';
import Drawer from '../Mobile/Drawer';
import HeaderNews from '../News/HeaderNews';
import HeroNews from '../News/HeroNews';
import HomeOneHeader from '../HomeOne/HomeOneHeader';

function AboutUsTwo() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            {/* <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews action={drawerAction.toggle} /> */}
            <HomeOneHeader/>
            <HeroNews
                title="About Us"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/about', title: 'About us' },
                ]}
            />
            {/* <ServicesHomeThree style={{ paddingTop: '90px' }} />
            <FunFactHomeThree />
            <WorkPartHomeEight className="pt-100" />
            <TestimonialHomeEight />
            <SignupHomeEight /> */}
            <FooterHomeOne className="appie-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default AboutUsTwo;
