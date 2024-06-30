import { Link } from "react-router-dom";
import { ContactUsBtn, NavLinks } from "../Index.js";
import "../css/Components.scss";

import icons from "/Icons.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="footer-right">
            <div className="footer-links">
              <NavLinks />
              <ContactUsBtn btnId="footerContactUs"/>
            </div>
            <div className="footer-media">
              <Link
                to="https://www.facebook.com/shweta.gadwal.7?mibextid=ZbWKwL"
                className="media"
                target="_blank"
              >
                <svg className="icon">
                  <use xlinkHref={`${icons}#Facebook`}></use>
                </svg>
              </Link>
              <Link
                to="https://www.instagram.com/asgacademy_by_shweetasgadwal/"
                className="media"
                target="_blank"
              >
                <svg className="icon">
                  <use xlinkHref={`${icons}#Instagram`}></use>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          @ Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          tempora architecto quam nobis libero
        </div>
      </footer>
    </>
  );
};

export default Footer;
