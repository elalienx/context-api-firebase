// NPM packages
import { Link } from "react-router-dom";

export default function ItemCandidate({ item, to }) {
  const { city, name, portoflioURL } = item;

  return (
    <li>
      <Link className="button" to={to}>
        Edit profile
      </Link>
      {" of "}
      <a href={portoflioURL} target="_blank" rel="noreferrer">
        {name} from {city}
      </a>
    </li>
  );
}
