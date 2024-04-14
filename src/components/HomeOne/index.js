import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import Drawer from '../Mobile/Drawer';
import BlogHomeOne from './BlogHomeOne';
import FaqHomeOne from './FaqHomeOne';
import FeaturesHomeOne from './FeaturesHomeOne';
import FooterHomeOne from './FooterHomeOne';
import HeroHomeOne from './HeroHomeOne';
import HomeOneHeader from './HomeOneHeader';
import PricingHomeOne from './PricingHomeOne';
import ProjectHomeOne from './ProjectHomeOne';
import ServicesHomeOne from './ServicesHomeOne';
import TeamHomeOne from './TeamHomeOne';
import TestimonialHomeOne from './TestimonialHomeOne';
import TrafficHomeOne from './TrafficHomeOne';
import AboutHomeThree from '../HomeThree/AboutHomeThree';
import HowItWorks from './HowItWorks';

function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            {/* <Drawer drawer={drawer} action={drawerAction.toggle} /> */}
            <HomeOneHeader action={drawerAction.toggle} />
            <HeroHomeOne />
            <TrafficHomeOne />
            <ServicesHomeOne />
            <TestimonialHomeOne />
            <HowItWorks/>
            <AboutHomeThree/>
            {/* <TeamHomeOne /> */}
            <PricingHomeOne />
            <FaqHomeOne />
            {/* <ProjectHomeOne /> */}
            <FooterHomeOne />
            <BackToTop />
            {/* <a
                href="https://wa.me/2348100000000"
                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i class="fa-brands fa-whatsapp whatsapp-icon"></i>
            </a> */}
        </>
    );
}

export default HomeOne;
