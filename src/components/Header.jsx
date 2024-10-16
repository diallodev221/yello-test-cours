import { Link } from "react-router-dom";
import { headerLinks } from "../constants/links";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">EDU-AFRIK</div>
      <nav>
        <ul>
          {headerLinks.map((link) => (
            <li key={link.key}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
