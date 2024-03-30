import React from 'react';
import IconOne from '../../assets/images/icon/1.png';
import IconTwo from '../../assets/images/icon/2.png';
import IconThree from '../../assets/images/icon/3.png';
import IconFour from '../../assets/images/icon/4.png';
import { FaUserDoctor } from "react-icons/fa6";

function HowItWorks({ className }) {
    return (
        <section className={`appie-service-area pt-90 pb-50 ${className}`} id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">
                            Lets See How We Work
                            </h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="appie-single-service how-works text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <img src={IconOne} alt="" />
                                {/* <div
                                    style={{
                                        backgroundColor: "#40c9bc",
                                    }}
                                    >
                                    <FaUserDoctor
                                        style={{
                                        color: "#1555b8",
                                        fontSize: "50px"
                                        }}
                                    />
                                </div> */}
                            </div>
                            <h4 className="appie-title how-title">Seeing Patients</h4>
                            <p>Monitor real-time fluctuations in your blood sugar levels</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="appie-single-service how-works text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <img src={IconOne} alt="" />
                            </div>
                            <h4 className="appie-title how-title">Making a Diagnosis</h4>
                            <p>Monitor real-time fluctuations in your blood sugar levels</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="appie-single-service how-works text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <img src={IconOne} alt="" />
                            </div>
                            <h4 className="appie-title how-title">Developing a Treatments</h4>
                            <p>Monitor real-time fluctuations in your blood sugar levels</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;