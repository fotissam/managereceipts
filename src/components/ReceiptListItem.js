import { Button } from "../App";

export function ReceiptListItem({
  totalReceipt,
  onSelection,
  selectedReceipt,
  onDeleteReceipt,
}) {
  const isSelected = selectedReceipt?.id === totalReceipt.id;

  return (
    <li
      className={isSelected ? "receipt-list-item active" : "receipt-list-item"}
    >
      <div className="row">
        <div className="col-9">
          <h4>{totalReceipt.title}</h4>
          <h5>Amount: {totalReceipt.amount}</h5>
          <p>{totalReceipt.date}</p>
        </div>
        <div className="col-3">
          <Button onClick={() => onSelection(totalReceipt)}>📝 Edit</Button>
          <div className="btn-delete-wrapper">
            <Button onClick={() => onDeleteReceipt(totalReceipt)}>
              ❌ Delete
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}
