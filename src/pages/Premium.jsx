// src/pages/Premium.jsx
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Premium() {
  const { user } = useContext(AppContext);

  const handlePayment = (plan) => {
    alert(`Payment flow for ${plan} plan goes here`);
    // Integrate Stripe/Razorpay here later
  };

  return (
    <div className="container my-4">
      <h2>Premium Subscription</h2>
      {user?.premium ? (
        <p>🎉 You are a Premium user!</p>
      ) : (
        <div>
          <div className="card p-3 mb-3">
            <h5>Monthly Plan - $5</h5>
            <button className="btn btn-primary" onClick={() => handlePayment("Monthly")}>Subscribe</button>
          </div>
          <div className="card p-3 mb-3">
            <h5>Yearly Plan - $50</h5>
            <button className="btn btn-success" onClick={() => handlePayment("Yearly")}>Subscribe</button>
          </div>
        </div>
      )}
    </div>
  );
}
