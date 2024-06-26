import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderNews from '../News/HeaderNews';
import HeroNews from '../News/HeroNews';
import Forms from './Forms';
import HomeOneHeader from '../HomeOne/HomeOneHeader';

function Contact() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            {/* <Drawer drawer={drawer} action={drawerAction.toggle} /> */}
            {/* <HeaderNews drawer={drawer} action={drawerAction.toggle} /> */}
            <HomeOneHeader/>
            <HeroNews
                title="Contact Us"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/contact', title: 'Contact' },
                ]}
            />
            <Forms />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Contact;
