import React from 'react';
import facebook from '../../assets/images/facebook.png'
import linkedin from '../../assets/images/linkedin.png'
import instagram from '../../assets/images/instagram.png'
import logo from '../../assets/images/imgMehedi/logo.png'


const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white cursor-pointer">
      <div>
        <img src={logo} alt="logo" className='w-36 mr-4' />
        <div className="flex">
          <img src={instagram} alt="insta" className="w-10 mr-4" />
          <img src={linkedin} alt="linkedin" className="w-10 mr-4 " />

          <img src={facebook} alt="fb" className="w-10 mr-4" />
        </div>
      </div>
      <div>
        <span className="footer-title hover:text-cyan-500">Resume</span>
        <a className="link link-hover">Resume Template</a>
        <a className="link link-hover">Resume Example</a>
        <a className="link link-hover">Resume formates Guide</a>
      </div>
      <div>
        <span className="footer-title  hover:text-cyan-500">CV</span>

        <a className="link link-hover">CV Template</a>
        <a className="link link-hover">CV Examples</a>
      </div>
      <div>
        <span className="footer-title  hover:text-cyan-500">Cover Letter</span>
        <a className="link link-hover">Cover Letter Template</a>
        <a className="link link-hover">Cover Letter Examples</a>
        <a className="link link-hover">Format Cover Letter</a>
      </div>
    </footer>
  );
};

export default Footer;