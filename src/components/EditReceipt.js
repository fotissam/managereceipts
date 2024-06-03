import { useState } from "react";
import { Button } from "../App";

export function EditReceipt({
  selectedReceipt,
  onEditReceipt,
  setShowEditReceipt,
  setSelectedReceipt,
}) {
  const [title, setTitle] = useState(selectedReceipt.title);
  const [amount, setAmount] = useState(selectedReceipt.amount);
  const [date, setDate] = useState(selectedReceipt.date);

  function handleEditFormSubmit(e) {
    e.preventDefault();

    if (!title || !amount || !date) {
      alert("Something!");
      return;
    }

    const editedReceipt = {
      id: selectedReceipt.id,
      title,
      amount,
      date,
    };

    onEditReceipt(editedReceipt);
  }

  function handleCloseEdit() {
    setShowEditReceipt(false);
    setSelectedReceipt(null);
  }

  return (
    <>
      <form className="edit-receipt" onSubmit={handleEditFormSubmit}>
        <div className="text-end">
          <button onClick={handleCloseEdit} className="btn">
            ✖️
          </button>
        </div>

        <h3>📝 Edit Receipt</h3>
        <div className="edit-receipt__item">
          <label>Receipt Title</label>
          <input
            type="text"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="edit-receipt__item">
          <label>Amount</label>
          <input
            type="number"
            defaultValue={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="edit-receipt__item">
          <label>Date</label>
          <input
            type="date"
            defaultValue={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <Button>💾 Save</Button>
      </form>
    </>
  );
}
