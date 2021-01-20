import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CreditScoreModal from "./CreditScoreModal";
import "./index.css";
import { createScript, waitFor } from "./utils";

const ZONE_ID = "iofa7u";
const DATA_FILTER = "data-credit-score";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterValue, setFilterValue] = useState("");

  const handleSelectFilter = (filter) => {
    setFilterValue(filter);
    setShowModal(false);
    localStorage.setItem("credit-score", filter);
  };

  useEffect(() => {
    const offersDiv = document.getElementById("offers");
    if (offersDiv) {
      offersDiv.innerHTML = "";
    }
    let script;
    if (filterValue !== "") {
      script = createScript(ZONE_ID, DATA_FILTER, filterValue);
    } else {
      script = createScript(ZONE_ID);
    }
    offersDiv?.appendChild(script);

    waitFor(".offers", () => {
      if (filterValue === "") {
        setShowModal(true);
      }
    });
  }, [filterValue]);

  return (
    <>
      {showModal && (
        <CreditScoreModal
          show={showModal}
          selectValue={handleSelectFilter}
          closeHandler={() => setShowModal(false)}
        />
      )}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
