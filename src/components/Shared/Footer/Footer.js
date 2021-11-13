import React from 'react';
import { Link } from 'react-router-dom';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container">
                <div style={{ paddingTop: '20px' }} className="row ">
                    <div className="col-md-6 text-white"><h5 className="regular">আমাদেরই বিশ্ববিদ্যালয়</h5>
                        <p>Choose the Mountains you want to Climb</p>

                        <p><FontAwesomeIcon icon={faPhone} />&nbsp;+880-2-55668200</p>

                        <p><FontAwesomeIcon icon={faEnvelope} />&nbsp;amaderibissobiddaloy@gmail.com</p>
                    </div>
                    <div className=" col-md-3">
                        <ul>
                            <li className="mb-2"><Link className="text-white ">About Online book</Link></li>
                            <li className="mb-2"><Link className="text-white">Read our blog</Link></li>
                            <li className="mb-2"><Link className="text-white">Sign up to deliver</Link></li>
                            <li className="mb-2"><Link className="text-white">Add your university</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 ">
                        <ul >
                            <li className="mb-2"><Link className="text-white">Get help</Link></li>
                            <li className="mb-2"><Link className="text-white">Read FAQs</Link></li>
                            <li className="mb-2"><Link className="text-white">View all cities</Link></li>
                            <li className="mb-2"><Link className="text-white">Book Shop near me</Link></li>
                        </ul>
                    </div>
                </div>
                <div className=" row pb-5 pt-3">
                    <div style={{ marginRight: '190px' }} className="col-md-4 ">
                        <small style={{ color: 'lightGray' }}>
                            Developed & Maintained by Team Gen Z, DIU</small>
                            <small style={{ color: 'lightGray' }}>
                            © Copyright 2021, All Rights Reserved</small>
                    </div>
                    <div className="col-md-2 text-right">
                        <Link className="text-white">Privacy Policy.</Link>
                    </div>
                    <div className="col-md-2 pl-5">
                        <Link className="text-white">Terms of Use</Link>
                    </div>
                    <div className="col-md-2 pl-5">
                        <Link className="text-white">Pricing</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;