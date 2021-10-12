export default function ItemCandidate() {
  return (
    <li>
      {item.name} from {item.city}.
      <a href={item.portoflioURL} target="_blank" rel="noreferrer" />
    </li>
  );
}
