import React from 'react';
import aboutThumb from '../../assets/images/about-thumb-2.png';
import aboutThumb3 from '../../assets/images/about-thumb-3.png';
import icon1 from '../../assets/images/icon/1.png';
import icon5 from '../../assets/images/icon/5.svg';
import icon6 from '../../assets/images/icon/6.svg';
import icon7 from '../../assets/images/icon/7.svg';
import feature1 from "../../assets/images/feature-1-removebg.png"
import feature2 from "../../assets/images/feature-2.png"
import feature3 from "../../assets/images/exer-1-removebg.png"
import feature4 from "../../assets/images/cgm.png"

function AboutHomeThree() {
    return (
        <>
            <section className="appie-about-3-area pt-100 pb-100" id="features">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div
                                className="appie-about-thumb-3 wow animated fadeInLeft"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <img src={feature1} alt="featue 1" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-traffic-title">
                                <h4 className="title">
                                    A New Approach to Measuring Health Data with a Smartphone
                                </h4>
                                {/* <p>
                                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable
                                </p> */}
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="appie-traffic-service mb-30">
                                        <div className="icon">
                                            <img src={icon5} alt="" />
                                        </div>
                                        <h5 className="title">Heart Rate</h5>
                                        <p>Remote heart rate capture</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="appie-traffic-service item-2 mb-30">
                                        <div className="icon">
                                            <img src={icon1} alt="" />
                                        </div>
                                        <h5 className="title">Breathing Rate</h5>
                                        <p>Remote breathing rate capture</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="appie-traffic-service item-2 mb-30">
                                        <div className="icon">
                                            <img src={icon1} alt="" />
                                        </div>
                                        <h5 className="title">Blood Oxygen</h5>
                                        <p>Remote SpO2 capture</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="appie-traffic-service item-2 mb-30">
                                        <div className="icon">
                                            <img src={icon1} alt="" />
                                        </div>
                                        <h5 className="title">Stress</h5>
                                        <p>Remote stress capture</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="appie-traffic-service item-2 mb-30">
                                        <div className="icon">
                                            <img src={icon1} alt="" />
                                        </div>
                                        <h5 className="title">Blood Pressure</h5>
                                        <p>Remote Blood pressure capture</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="appie-traffic-service item-2 mb-30">
                                        <div className="icon">
                                            <img src={icon1} alt="" />
                                        </div>
                                        <h5 className="title">H1bAC</h5>
                                        <p>Remote H1bAC capture</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mt-50 flex-column-reverse flex-lg-row">
                        <div className="col-lg-6">
                            <div className="appie-traffic-title">
                                <h3 className="title">Elevate Your Diet with Smart Tracking</h3>
                                <p>
                                    Enhance your nutrition journey with our advanced meal tracking system and personalized guidance.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className="appie-traffic-service mb-30 item-3">
                                        <div className="icon">
                                            <img src={icon6} alt="" />
                                        </div>
                                        <h5 className="title">Snap and Track Your Food</h5>
                                        <p>Capture your meal to instantly access nutritional insights and receive smart, AI-powered guidance</p>
                                    </div>
                                </div>
                                {/* <div className="col-sm-6">
                                    <div className="appie-traffic-service item-2 mb-30 item-4">
                                        <div className="icon">
                                            <img src={icon7} alt="" />
                                        </div>
                                        <h5 className="title">Lorem Ipsum</h5>
                                        <p>enerate Lorem Ipsum which looks reasonable. </p>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-12">
                                    <div className="traffic-btn mt-50">
                                        <a className="main-btn" href="#">
                                            Learn More <i className="fal fa-arrow-right" />
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="appie-about-thumb-3 text-right wow animated fadeInRight"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <img src={feature2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div
                                className="appie-about-thumb-3 wow animated fadeInLeft"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <img src={feature3} alt="featue 1" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-traffic-title">
                                <h4 className="title">
                                    Empower Your Workouts with AI Assistance!
                                </h4>
                                <p>Optimize Your Workout with Advanced Tracking, Comprehensive Analytics, and Real-Time Form Detection</p>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="appie-traffic-service mb-30">
                                        <div className="icon">
                                            <img src={icon5} alt="" />
                                        </div>
                                        <h5 className="title">Fitness with Flexibility</h5>
                                        <p>Discover 300 DIY Exercise Plans for Your Convenience</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="appie-traffic-service item-2 mb-30">
                                        <div className="icon">
                                            <img src={icon1} alt="" />
                                        </div>
                                        <h5 className="title">Gym or Home Workouts: Your Choice</h5>
                                        <p>Versatile Training: Gym or Home, Full-Body or Targeted Workouts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mt-50 flex-column-reverse flex-lg-row">
                        <div className="col-lg-6">
                            <div className="appie-traffic-title">
                                <h3 className="title">Continuous CGM Monitoring: Real-Time Data Capture</h3>
                                <p>
                                    Real-time CGM data capture and monitoring for continuous tracking and analysis.
                                </p>
                            </div>
                            {/* <div className="row">
                                <div className="col-sm-7">
                                    <div className="appie-traffic-service mb-30 item-3">
                                        <div className="icon">
                                            <img src={icon6} alt="" />
                                        </div>
                                        <h5 className="title">Snap and Track Your Food</h5>
                                        <p>Capture your meal to instantly access nutritional insights and receive smart, AI-powered guidance</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="appie-about-thumb-3 text-right wow animated fadeInRight"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <img src={feature4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutHomeThree;
