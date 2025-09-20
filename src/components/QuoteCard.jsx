import React from "react";

export default function QuoteCard({ quote, author }) {
  return (
    <div className="card my-3 shadow-sm">
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      </div>
    </div>
  );
}
