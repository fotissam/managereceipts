import { SortReceipts } from "./SortReceipts";
import { ReceiptListItem } from "./ReceiptListItem";

export function ReceiptList({
  totalReceipts,
  onSelection,
  selectedReceipt,
  onDeleteReceipt,
  setSortValue,
}) {
  return (
    <>
      <SortReceipts setSortValue={setSortValue} />
      <ul className="receipt-list">
        {totalReceipts.map((totalReceipt) => (
          <ReceiptListItem
            totalReceipt={totalReceipt}
            key={totalReceipt.id}
            onSelection={onSelection}
            selectedReceipt={selectedReceipt}
            onDeleteReceipt={onDeleteReceipt}
          />
        ))}
      </ul>
    </>
  );
}
