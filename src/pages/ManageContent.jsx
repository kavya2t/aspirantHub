import React, { useState } from "react";

export default function ManageContent() {
  const [contents, setContents] = useState([
    { title: "Motivation Article", type: "Article" },
    { title: "Daily Planner Template", type: "Template" },
  ]);

  const removeContent = (index) => {
    const newContents = contents.filter((_, i) => i !== index);
    setContents(newContents);
  };

  return (
    <div>
      <h2 className="text-center mb-4">Manage Content</h2>
      <ul className="list-group">
        {contents.map((content, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {content.title} ({content.type})
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeContent(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
