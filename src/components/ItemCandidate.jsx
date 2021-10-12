// NPM packages
import { Link } from "react-router-dom";

export default function ItemCandidate({ item, to }) {
  const { city, name, portoflioURL } = item;

  return (
    <li>
      <a href={portoflioURL} target="_blank" rel="noreferrer">
        {name} from {city}
      </a>
      {" - "}
      <Link className="button" to={to}>
        Edit profile
      </Link>
    </li>
  );
}
