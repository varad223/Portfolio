import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
const contact = () => {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1>Contact</h1>
        <div className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000">
          <a href='https://www.google.com' target='_blank' className="items"><FaInstagram className='icons' /></a>
          <a href='https://www.google.com' target='_blank' className="items"><CiLinkedin className='icons' /></a>
          <a href='https://www.google.com' target='_blank' className="items"><FaGithubSquare className='icons' /></a>
          <a href='mailto:surya2208varad@gmail.com' target='_blank' className="items"><SiGmail className='icons' /></a>
          <a href='https://www.google.com' target='_blank' className="items"><FaWhatsapp className='icons' /></a>
        </div>
      </div>
    </>
  )
}
export default contact