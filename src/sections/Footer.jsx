import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Copyright © {new Date().getFullYear()} Sean Currlin</p>
        </div>
        <div className="socials ml-auto">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;