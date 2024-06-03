import { useState } from "react";
import { Button } from "../App";

export function AddReceipt({ onAddReceipt, hasReceipts }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!title || !amount || !date) {
      alert("Something!");
      return;
    }

    const id = crypto.randomUUID();

    const newReceipt = {
      id,
      title,
      amount,
      date,
    };

    onAddReceipt(newReceipt);
  }

  return (
    <div className={`add-receipt ${hasReceipts ? `col-8` : `col-12`}`}>
      <form onSubmit={handleFormSubmit}>
        <h3>Add new receipt</h3>
        <div className="add-receipt__item">
          <label>Receipt Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="add-receipt__item">
          <label>Amount</label>
          <input
            min={0}
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="add-receipt__item">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <Button>Add Receipt</Button>
      </form>
    </div>
  );
}
