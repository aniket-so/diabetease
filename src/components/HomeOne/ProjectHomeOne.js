import React from 'react';
import projectThumb from '../../assets/images/project-thumb.png';
// import projectThumb from '../../assets/images/Untitled_design-removebg-preview.png';

function ProjectHomeOne({ className }) {
    return (
        <>
            <section className={`appie-project-area pb-100 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="appie-project-box wow animated slideInUp"
                                data-wow-duration="1000ms"
                                data-wow-delay="0ms"
                            >
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="appie-project-content">
                                            <h3 className="title">
                                            Long-term Habit Building
                                            </h3>
                                            <p>Learn to choose healthy everyday and in
every way!</p>
                                            <form action="#">
                                                <div className="input-box mt-30">
                                                    <input type="text" placeholder="Your Email" />
                                                    <button type="button">Subscribe</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="appie-project-thumb">
                                    <img src="https://site-assets.fitterfly.com/site-assets/images/site-1/person-wearing-cgm-device.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectHomeOne;
