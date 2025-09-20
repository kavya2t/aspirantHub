import React from "react";

export default function Premium() {
  const handlePayment = () => {
    alert("Payment gateway integration will go here!");
  };

  return (
    <div>
      <h2 className="text-center mb-4">Premium Membership</h2>
      <div className="card p-4 shadow text-center">
        <h4>Unlock all features!</h4>
        <p>Set unlimited goals, habits, tasks and get premium content.</p>
        <button className="btn btn-success" onClick={handlePayment}>
          Subscribe Now
        </button>
      </div>
    </div>
  );
}
