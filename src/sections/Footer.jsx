import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-4">
          <p>Copyright © {new Date().getFullYear()} Sean Currlin</p>
          <div className="socials flex gap-4">
            {socialImgs.map((socialImg, index) => (
              <div key={index} className="icon w-8 h-8">
                <img 
                  src={socialImg.imgPath} 
                  alt="social icon"
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;