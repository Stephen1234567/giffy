import { Link } from "wouter";

export default function Category({ name, options = [] }) {
  return (
    <div className="Category">
      <h3 className="Category-title">{name}</h3>
      <ul className="Category-list">
        {options.map((singleOption, index) => (
          <li key={index}>
            <Link className="Category-link" to={`/search/${singleOption}`}>
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
