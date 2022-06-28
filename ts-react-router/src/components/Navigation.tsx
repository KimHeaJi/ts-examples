import { Link } from "react-router-dom";
import { menus } from "../const";

const Navigation = () => {
  return (
    <nav>
      <ul>
        {menus.map((v) => (
          <li key={v.key}>
            <Link to={v.path}>{v.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
