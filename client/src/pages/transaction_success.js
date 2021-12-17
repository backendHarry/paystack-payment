import React, { useEffect, useState } from "react";
import "../css/transaction_success.css";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

const TransactionSuccess = () => {
  const [verifyStatus, setVerifyStatus] = useState({
    status: false,
    message: "Transaction Failed, Your cash will be credited back to you.",
  });

  const history = useHistory();

  const search = useLocation().search;
  const reference = new URLSearchParams(search).get("reference");
  useEffect(() => {
    const VerifyPaymentClientFunc = async () => {
      const response = await axios.post("/api/v1/products/verify-payment", {
        ref: reference,
      });
      setVerifyStatus(response.data);
    };
    VerifyPaymentClientFunc();
  }, [reference]);

  return (
    <div className="transaction_success">
      {verifyStatus.status ? (
        <div className="transaction_success_contents">
          <h1 className="transaction_message">Transaction successful</h1>
          <button
            onClick={() => {
              history.push("/");
            }}
          >
            Return to Home
          </button>
        </div>
      ) : (
        <div className="transaction_success_contents">
          {/* error handler*/}
          <h1 className="transaction_message">{verifyStatus.message}</h1>
          <button
            onClick={() => {
              history.push("/");
            }}
          >
            Return to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default TransactionSuccess;
