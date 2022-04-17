import { SocialIcon } from 'react-social-icons'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
        <nav className='footer__nav'>
            <ul className='footer__nav--links'>
                <li>News</li>
                <li>Activities</li>
                <li>Donate</li>
            </ul>
            <div className='footer__nav--logo'>
                <img src="/images/assets/logo.png" alt="" />
            </div>
            <ul className='footer__nav--links'>
                <li>Testimonials</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div className='footer__social'>
            <ul className='footer__social--links'>
                <SocialIcon network='instagram' style={{ height: 40, width: 40 }} ></SocialIcon>
                <SocialIcon network='facebook' style={{ height: 40, width: 40 }} ></SocialIcon>
                <SocialIcon network='twitter' style={{ height: 40, width: 40 }} ></SocialIcon>
                <SocialIcon network='discord' style={{ height: 40, width: 40 }} ></SocialIcon>
            </ul>
            <h4>2021 by Alkemy. All Rights Reserved</h4>
        </div>
    </div>
  )
}

export default Footer