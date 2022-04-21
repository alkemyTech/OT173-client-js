import { SocialIcon } from 'react-social-icons'
import FooterStyles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={FooterStyles.footer}>
        <nav className={FooterStyles.footer_nav}>
            <ul className={FooterStyles.footer_nav_links}>
                <li>News</li>
                <li>Activities</li>
                <li>Donate</li>
            </ul>
            <div className={FooterStyles.footer_nav_logo}>
                <img src="/images/assets/logo.png" alt="" />
            </div>
            <ul className={FooterStyles.footer_nav_links}>
                <li>Testimonials</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div className={FooterStyles.footer_social}>
            <ul className={FooterStyles.footer_social_links}>
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