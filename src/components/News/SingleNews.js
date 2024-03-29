import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import Blog from './Blog';
import BlogSideBar from './BlogSideBar';
import HeaderNews from './HeaderNews';
import HeroNews from './HeroNews';
import HomeOneHeader from '../HomeOne/HomeOneHeader';

function SingleNews() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            {/* <Drawer drawer={drawer} action={drawerAction.toggle} /> */}
            {/* <HeaderNews action={drawerAction.toggle} /> */}
            <HomeOneHeader/>
            <HeroNews
                title="Single Blog Title"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/news', title: 'Blogs' },
                    { link: '/news/single-news', title: 'Single Blog' },
                ]}
            />
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-7">
                            <Blog />
                        </div>
                        <div className="col-lg-4 col-md-5">
                            <BlogSideBar />
                        </div>
                    </div>
                </div>
            </section>
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default SingleNews;
