export function handleSelectReceipt(
  totalReceipt,
  setShowAddReceipt,
  setShowEditReceipt,
  setSelectedReceipt
) {
  setShowAddReceipt(false);
  setShowEditReceipt((prev) => !prev);
  setSelectedReceipt((cur) => {
    const newSelectedReceipt =
      cur?.id === totalReceipt.id ? null : totalReceipt;
    setShowEditReceipt(newSelectedReceipt !== null);
    return newSelectedReceipt;
  });
}

export function handleDeleteReceipt(receiptToDelete, setTotalReceipts) {
  setTotalReceipts((currentReceipts) =>
    currentReceipts.filter((receipt) => receipt.id !== receiptToDelete.id)
  );
}

export function handleShowAddReceipt(
  setShowEditReceipt,
  setShowAddReceipt,
  setSelectedReceipt
) {
  setShowEditReceipt(false);
  setShowAddReceipt((show) => !show);
  setSelectedReceipt(null);
}

export function handleAddReceipt(receipt, setTotalReceipts, setShowAddReceipt) {
  setTotalReceipts((totalReceipts) => [...totalReceipts, receipt]);
  setShowAddReceipt(false);
}

export function handleEditReceipt(
  editedReceipt,
  setTotalReceipts,
  setShowEditReceipt
) {
  setTotalReceipts((currentReceipts) => {
    const objIndex = currentReceipts.findIndex(
      (receipt) => receipt.id === editedReceipt.id
    );
    if (objIndex >= 0) {
      const updatedReceipts = [...currentReceipts];
      updatedReceipts[objIndex] = {
        ...updatedReceipts[objIndex],
        ...editedReceipt,
      };
      return updatedReceipts;
    }
    return currentReceipts;
  });
  setShowEditReceipt(false);
}

export function handleSortReceipts(receipts, sortValue) {
  switch (sortValue) {
    case "sort-amount":
      return [...receipts].sort((a, b) => a.amount - b.amount);
    case "sort-date":
      return [...receipts].sort((a, b) => new Date(a.date) - new Date(b.date));
    case "sort-title":
      return [...receipts].sort((a, b) => a.title.localeCompare(b.title));
    default:
      return receipts;
  }
}
