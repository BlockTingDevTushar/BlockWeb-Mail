import React, { Component, useState } from 'react';
import { sendContactForm } from '../../../lib/api';

const initValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
}

const initState = { values: initValues };
const Contact = () => {

    const [state, setState] = useState(initState);

    const {values} = state;
    const handleChange = ({ target }) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value,
        }
    }));

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,            
        }));
        
        await sendContactForm(values);
    }



    return (
        <section className="contact-area pt-120 pb-80 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-5 col-xl-6 col-lg-6">
                        <div className="section-title-wrapper mb-15">
                            <h5 className="section-subtitle mb-20">contact with us</h5>
                            <h2 className="section-title">Speak with our
                                consultant</h2>
                        </div>
                        <div className="contact-info mr-50 mr-xs-0  mr-md-0">
                            <div className="single-contact-info d-flex align-items-center">
                                <div className="contact-info-icon">
                                    <a href="#"><i className="fal fa-comments"></i></a>
                                </div>
                                <div className="contact-info-text mt-10">
                                    <span>Call Anytime</span>
                                    <h5><a href="tell:918968474568">+91 89684-74568</a></h5>
                                </div>
                            </div>
                            <div className="single-contact-info d-flex align-items-center">
                                <div className="contact-info-icon">
                                    <a href="#"><i className="fal fa-envelope"></i></a>
                                </div>
                                <div className="contact-info-text mt-10">
                                    <span>send email</span>
                                    <h5><a href="mailto:hi@blockting.com">hi@blockting.com</a> </h5>
                                </div>
                            </div>
                            <div className="single-contact-info d-flex align-items-center">
                                <div className="contact-info-icon">
                                    <a href="#"><i className="fal fa-map-marker-alt"></i></a>
                                </div>
                                <div className="contact-info-text mt-10">
                                    <span>visit office</span>
                                    <h5><a href="#">Jalandhar Cantt, Jalandhar, Punjab (IN) 144005</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-6 col-lg-6">
                        <div className="contact-form">
                            <form action="" id="contact-form" method="">
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="name" type="text" value={values.name} onChange={handleChange} placeholder="Your Name" />
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="email" type="email" value={values.email} onChange={handleChange} placeholder="Email Address" />
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="phone" type="text" value={values.phone} onChange={handleChange} placeholder="Phone" />
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="subject" type="text" value={values.subject} onChange={handleChange} placeholder="Subject" />
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                                        <textarea placeholder="Write Message" value={values.message} onChange={handleChange} name="message"></textarea>
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 mb-20">
                                        <button type="submit" className="theme-btn border-btn" disabled={!values.name || !values.email || !values.phone || !values.subject || !values.message} onClick={onSubmit}>Send a message</button>
                                    </div>
                                </div>
                            </form>
                            <p className="ajax-response"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Contact;