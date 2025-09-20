import React from "react";

export default function Profile() {
  return (
    <div>
      <h2 className="text-center mb-4">Your Profile</h2>
      <div className="card p-4 shadow">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Subscription:</strong> Free</p>
        <button className="btn btn-primary mt-2">Edit Profile</button>
      </div>
    </div>
  );
}
