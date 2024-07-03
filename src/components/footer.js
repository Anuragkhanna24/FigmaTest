import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
const Footer = () => {
    return (
        <div className=' footer1 '>
            <div className='row gx-0' >
                <div className='col-lg-8 col-md-8 text-start ps-5'>
                    <img
                        src="./logo192.png"
                        // width="100"
                        // height="100"
                        className='pt-3'
                        style={{ width: "88px" }}
                        alt="React Bootstrap logo"
                    />
                    <div className="row">

                        <div className='col-lg-5 py-4'>
                            <p className='pe-4'>Learn and Achieve is dedicated to enhancing the educational experience of student cross india.</p>
                            <div className='d-flex'>
                                <LuFacebook className='mx-1 fs-2 p-1' style={{ borderRadius: "5px", backgroundColor: "#F6821F" }} />
                                <FaInstagram className='bg-light text-dark mx-1 fs-2 p-1' style={{ borderRadius: "5px" }} />
                                <SlSocialLinkedin className='bg-light text-dark mx-1 fs-2 p-1' style={{ borderRadius: "5px" }} />
                                <FaXTwitter className='bg-light text-dark mx-1 fs-2 p-1' style={{ borderRadius: "5px" }} />
                                <FiYoutube className='bg-light text-dark mx-1 fs-2 p-1' style={{ borderRadius: "5px" }} />
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-5 py-4'>
                            <h4>Quick Links</h4>
                            <p className='mb-1' style={{ color: "#F6821F" }}>About us</p>
                            <p className='mb-1'>Our Services</p>
                            <p className='mb-1'>Bharat SAT</p>
                            <p className='mb-1'>Contacts</p>
                            <p className='mb-1'>Rewards</p>
                            <p className='mb-1'>Join As A Coordinator</p>
                            <p className='mb-1'>FAQ's</p>
                            <p className='mb-1'>Terms & Conditions</p>
                            <p className='mb-1'>Privacy Policy</p>
                        </div>
                        <div className='col-lg-4 col-sm-7 py-4'>
                            <h4>Get in Touch</h4>
                            <div className=''>
                                <p><MdOutlineMail className='mx-2 fs-5' />support@learnandacheive.in</p>
                                <p><IoCallOutline className='mx-2 fs-5' />+9136955362</p>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='col-lg-4 col-md-4 bookimg '>
                    <img src='/img\book.png' className='w-100 frame'></img>
                </div>
                <div className=' underline1 px-5  '>
                    <img src='/img\Line 101.png' className='w-100 px-4 '></img>
                </div>

            </div>
            <div className='fs-6 py-3 text-center'>COPYRIGHT &#169; 2024 LEARN AND ACHIEVE ALL RIGHTS RESERVED.|POWERED BY:DIGIHOST</div>
        </div>
    )
}

export default Footer
