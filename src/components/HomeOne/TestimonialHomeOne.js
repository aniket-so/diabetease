import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import user from '../../assets/images/testimonial-user.png';

function TestimonialHomeOne({ className }) {
    const sliderRef = useRef();
    const sliderNext = () => {
        sliderRef.current.slickNext();
    };
    const sliderPrev = () => {
        sliderRef.current.slickPrev();
    };
    return (
        <section
            className={`appie-testimonial-area pt-100 pb-160 ${className || ''}`}
            id="testimonial"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="appie-testimonial-slider" style={{ position: 'relative' }}>
                            <span
                                className="prev slick-arrow"
                                style={{ display: 'block' }}
                                onClick={sliderNext}
                                role="button"
                                tabIndex="0"
                            >
                                <i className="fal fa-arrow-left" />
                            </span>
                            <Slider ref={sliderRef} dots arrows={false}>
                                <div className="appie-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={user} alt="" />
                                        <h5 className="title">Lorem Ipsum</h5>
                                        <span>April 14, 2024</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="appie-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={user} alt="" />
                                        <h5 className="title">Lorem Ipsum</h5>
                                        <span>April 14, 2024</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="appie-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={user} alt="" />
                                        <h5 className="title">Lorem Ipsum</h5>
                                        <span>April 14, 2024</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Slider>
                            <span
                                onClick={sliderPrev}
                                role="button"
                                tabIndex="-1"
                                className="next slick-arrow"
                                style={{ display: 'block' }}
                            >
                                <i className="fal fa-arrow-right" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialHomeOne;
