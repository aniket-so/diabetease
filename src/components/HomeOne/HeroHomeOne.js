import React from 'react';
import heroThumbOne from '../../assets/images/hero-thumb-1.png';
import heroThumbTwo from '../../assets/images/hero-thumb-2.png';
import shapeTwo from '../../assets/images/shape/shape-2.png';
import shapeThree from '../../assets/images/shape/shape-3.png';
import shapeFour from '../../assets/images/shape/shape-4.png';
import heroMain from '../../assets/images/dia-1.png';

function HeroHomeOne({ className }) {
    return (
        <>
            <section className={`appie-hero-area ${className || ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="appie-hero-content">
                                <span>Welcome To Diabetease</span>
                                <h1 className="appie-title">
                                    Lower Your Blood Sugar Levels Naturally
                                </h1>
                                <p>
                                    Personalized plans. Expert coaching. Delicious recipes
                                </p>
                                <ul>
                                    <li>
                                        <a href="#">
                                             Book An Appoinment
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a className="item-2" href="#">
                                            <i className="fab fa-google-play" /> Download for
                                            Android
                                        </a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-hero-thumb">
                                <div
                                    className="thumb wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="200ms"
                                >
                                    <img src={heroMain} alt="" />
                                </div>
                                <div
                                    className="thumb-2 wow animated fadeInRight"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="600ms"
                                >
                                    {/* <img src={heroThumbTwo} alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shape-1 d-none">
                    <img src={shapeTwo} alt="" />
                </div>
                <div className="hero-shape-2 d-none">
                    <img src={shapeThree} alt="" />
                </div>
                <div className="hero-shape-3 d-none">
                    <img src={shapeFour} alt="" />
                </div>
            </section>
        </>
    );
}

export default HeroHomeOne;
