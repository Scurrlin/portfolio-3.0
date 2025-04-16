import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-6 sm:gap-4">
        <p className="pl-4">
          Copyright © {new Date().getFullYear()} Sean Currlin
        </p>
        <div className="socials flex gap-4 pr-4">
          {socialImgs.map((socialImg, index) => (
            <a 
              key={index} 
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img 
                src={socialImg.imgPath} 
                alt={socialImg.name}
                className="w-full h-full"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;