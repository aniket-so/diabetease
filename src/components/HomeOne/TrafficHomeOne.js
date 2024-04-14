import React, { useState } from 'react';
import thumb from '../../assets/images/traffic-thumb.png';
import about from '../../assets/images/about-vector.svg';
import CustomModal from './ModalComponent';

function TrafficHomeOne({ className }) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    return (
        <>
            <CustomModal showModal={showModal} closeModal={closeModal} />
            <section className={`appie-traffic-area pt-140 pb-100 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="appie-traffic-title">
                                <span>ABOUT US</span>
                                <h4 className="title">Contrary to popular belief,</h4>
                                <p>
                                    We're dedicated to empowering transformations through expert guidance and personalized support. At Reversing Diabetes Clinics, we provide clear direction and deliver tangible results for our clients.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="appie-traffic-service mb-30">
                                        <div className="icon">
                                            <i className="fal fa-check" />
                                        </div>
                                        <h5 className="title">Empowering transformations</h5>
                                        {/* <p>With real-time CGM sensor-based insights & 50+ lab tests</p> */}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="appie-traffic-service item-2 mb-30">
                                        <div className="icon">
                                            <i className="fal fa-check" />
                                        </div>
                                        <h5 className="title">Expert guidance, personalized support</h5>
                                        {/* <p>Through expert-designed nutrition, fitness, stress & sleep</p> */}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="appie-traffic-service item-3">
                                        <div className="icon">
                                            <i className="fal fa-check" />
                                        </div>
                                        <h5 className="title">Clear direction for your journey</h5>
                                        {/* <p>With timely coach follow-ups, live group sessions & app notifications</p> */}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="appie-traffic-service item-4">
                                        <div className="icon">
                                            <i className="fal fa-check" />
                                        </div>
                                        <h5 className="title">Delivering tangible results</h5>
                                        {/* <p>With clinically-proven plans to reduce HbA1c, weight, stress levels</p> */}
                                    </div>
                                </div>
                                {/* <div className="col-lg-12">
                                    <div className="traffic-btn mt-50">
                                        <button className="main-btn cta" onClick={openModal}>
                                            Book An Appoinment
                                        </button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="traffic-thumb ">
                    <img
                        className="wow animated fadeInRight"
                        data-wow-duration="2000ms"
                        data-wow-delay="200ms"
                        src={about}
                        alt="about us"
                    />
                </div>
            </section>
        </>
    );
}

export default TrafficHomeOne;
