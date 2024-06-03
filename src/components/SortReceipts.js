import { useState } from "react";
import { useEffect } from "react";

export function SortReceipts({ setSortValue }) {
  const [sortValue, setLocalSortValue] = useState("");

  useEffect(() => {
    setSortValue(sortValue);
  }, [sortValue, setSortValue]);

  return (
    <div className="sort-receipts">
      <span>Sort by: </span>
      <select
        value={sortValue}
        onChange={(e) => setLocalSortValue(e.target.value)}
      >
        <option value="">Select...</option>
        <option value="sort-amount">Amount</option>
        <option value="sort-date">Date</option>
        <option value="sort-title">Title</option>
      </select>
    </div>
  );
}
