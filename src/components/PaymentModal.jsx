import React from "react";
import Modal from "./Modal";

export default function PaymentModal({ show, onClose }) {
  if (!show) return null;

  const handlePayment = () => {
    alert("Payment processed!");
    onClose();
  };

  return (
    <Modal title="Payment" onClose={onClose}>
      <p>Pay for premium features.</p>
      <button className="btn btn-success" onClick={handlePayment}>
        Pay Now
      </button>
    </Modal>
  );
}
