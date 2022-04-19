import logo from "../data/images/LOGO-SOMOS.png";
import mail from "../data/icons/email.png";
import facebook from "../data/icons/facebook.png";
import instagram from "../data/icons/instagram.png";
import phone from "../data/icons/phone-call.png";

/* ------ Footer ------ */

const LOGO_INFO = [
  {
    Image: logo,
    Text: "Logo ONG",
  },
];

const LINKS_SOCIAL = [
  {
    mail_icon: mail,
    mail_info: "mailto:somosfundacionmas@gmail.com",
    instagram_icon: instagram,
    instagram_info: "http://www.instagram.com/SomosMás",
    facebook_icon: facebook,
    facebook_info: "http://www.facebook.com/Somos_Más",
    phone_icon: phone,
    phone_info: "tel:01160112988",
    alt_text: "Icono red social",
  },
];

/* ---------- Exports --------- */

export { LOGO_INFO, LINKS_SOCIAL };
