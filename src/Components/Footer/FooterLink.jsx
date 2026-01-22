import { Link } from "react-router-dom";

const FooterLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="hover:text-white transition text-sm text-gray-300"
    >
      {children}
    </Link>
  );
};

export default FooterLink;
