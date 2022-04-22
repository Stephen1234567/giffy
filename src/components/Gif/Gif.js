import React from "react";
import { Link } from "wouter";
import "./Gif.css";

function Gif({ id, title, url }) {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img loading="lazy" alt={title} src={url} />
      </Link>
    </div>
  );
}

function areEqual(prevProps, nextProps) {
  return prevProps.id === nextProps.id;
}

export default React.memo(Gif, areEqual);
