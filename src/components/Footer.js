import "./FooterStyles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Recipes</h1>
        </div>
        <div>
          <p>Choose your Flavour</p>
        </div>
      </div>
      <div className="bottom">
        <h4>Community</h4>
        <a href="/">
          <Link to="/">Home</Link>
        </a>
        <a href="/">
          <Link to="/submit">Submit</Link>
        </a>
        <a href="/about">
          <Link to="/about">About</Link>
        </a>
      </div>
    </div>
  );
};

export default Footer;
