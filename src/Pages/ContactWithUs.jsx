import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';

const ContactWithUs = () => {
    
    return (
        <div>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <Navbar></Navbar>
            <>
                <br />
                <div >
                    <section className="text-gray-400 container mx-auto bg-gray-900 body-font relative">
                        <div className="absolute inset-0 bg-gray-900">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14577.739982547355!2d90.39445823955077!3d24.01572100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755db002a45235d%3A0xfd2206875e80dd5f!2sSkills%20and%20Professional%20Development%20Industry!5e0!3m2!1sen!2sbd!4v1671010715611!5m2!1sen!2sbd"
                                style={{ filter: 'contrast(1.2) opacity(0.70)' }} title="Skills and Professional Development Industry location" width="100%"
                                height="100%" frameBorder="0"
                                loading="lazy"></iframe>
                        </div>
                        <div className="container px-5 py-24 mx-auto flex">
                            <div
                                className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                                <h2 className="text-white text-lg mb-1 font-medium title-font">Tell me</h2>
                                <p className="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe
                                </p>
                                <div className="relative mb-4">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                                    <input type="email" id="email" name="email"
                                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                                    <textarea id="message" name="message"
                                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                                <button
                                    className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">SUBMIT</button>
                                <p className="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore
                                    iceland tousled
                                    brook viral artisan.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </>
            <Footer></Footer>
        </div>
    );
};

export default ContactWithUs;