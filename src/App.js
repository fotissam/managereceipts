import { useState, useEffect } from "react";
import { EditReceipt } from "./components/EditReceipt";
import { ReceiptList } from "./components/ReceiptList";
import { AddReceipt } from "./components/AddReceipt";
import { initialReceipts } from "./data";
import { Footer } from "./components/Footer";
import {
  handleSelectReceipt,
  handleDeleteReceipt,
  handleShowAddReceipt,
  handleAddReceipt,
  handleEditReceipt,
  handleSortReceipts,
} from "./handlers/handlers";

export function Button({ children, onClick }) {
  return (
    <button className="btn btn-warning btn-sm mb-3" onClick={onClick}>
      {children}
    </button>
  );
}

function ShowSum({ sum }) {
  return (
    <div className="show-sum">
      <h4>Total sum of receipts is: {sum}</h4>
    </div>
  );
}

export default function App() {
  const [totalReceipts, setTotalReceipts] = useState(initialReceipts);
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [showAddReceipt, setShowAddReceipt] = useState(false);
  const [showEditReceipt, setShowEditReceipt] = useState(false);
  const [sortValue, setSortValue] = useState("");

  const hasReceipts = totalReceipts.length > 0;
  const sum = totalReceipts.reduce((n, { amount }) => n + amount, 0);

  useEffect(() => {
    if (sortValue) {
      setTotalReceipts((receipts) => handleSortReceipts(receipts, sortValue));
    }
  }, [sortValue]);

  return (
    <>
      <header className="App-header"></header>
      <main className="App">
        <div className="container">
          <div className={hasReceipts ? "row" : "row justify-content-center"}>
            <div className={hasReceipts ? "col-6" : "col-6 text-center"}>
              <div className="receipt-list">
                <ReceiptList
                  totalReceipts={totalReceipts}
                  onSelection={(receipt) =>
                    handleSelectReceipt(
                      receipt,
                      setShowAddReceipt,
                      setShowEditReceipt,
                      setSelectedReceipt
                    )
                  }
                  selectedReceipt={selectedReceipt}
                  onDeleteReceipt={(receipt) =>
                    handleDeleteReceipt(receipt, setTotalReceipts)
                  }
                  setSortValue={setSortValue}
                />
                {showAddReceipt && (
                  <AddReceipt
                    onAddReceipt={(receipt) =>
                      handleAddReceipt(
                        receipt,
                        setTotalReceipts,
                        setShowAddReceipt
                      )
                    }
                    hasReceipts={hasReceipts}
                  />
                )}
                <Button
                  onClick={() =>
                    handleShowAddReceipt(
                      setShowEditReceipt,
                      setShowAddReceipt,
                      setSelectedReceipt
                    )
                  }
                >
                  {showAddReceipt ? "Close" : "Add new Receipt"}
                </Button>

                {totalReceipts.length > 0 && <ShowSum sum={sum}></ShowSum>}
              </div>
            </div>

            <div className={hasReceipts && "col-6"}>
              {showEditReceipt && (
                <EditReceipt
                  selectedReceipt={selectedReceipt}
                  onEditReceipt={(receipt) =>
                    handleEditReceipt(
                      receipt,
                      setTotalReceipts,
                      setShowEditReceipt
                    )
                  }
                  setShowEditReceipt={setShowEditReceipt}
                  setSelectedReceipt={setSelectedReceipt}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
