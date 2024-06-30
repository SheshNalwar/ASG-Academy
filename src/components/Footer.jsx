import "../css/Components.scss";
import { ContactUsBtn, NavLinks, AboutUsBtn } from "../Index.js"
const Footer = () => {
  return (
    <>
      <footer>

        <div className="footer-top">
          <div className="footer-left">
            <h1>Learn With The Best School.</h1>
            <ContactUsBtn />
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <NavLinks />
            </div>

            <div className="footer-media">
              {/* <a href="" className="media">In</a> */}
              <a href="https://www.facebook.com/shweta.gadwal.7?mibextid=ZbWKwL" className="media">Fb</a>
              <a href="https://www.instagram.com/asgacademy_by_shweetasgadwal/" className="media">In</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          @ Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, tempora architecto quam nobis libero
        </div>

      </footer>
    </>
  );
};

export default Footer;
