"use client";
import React from "react";
// import Transactions from "../components/TransactionList/Transactions";
// import TransactionList from "../components/TransactionList";
import TransList from "../components/TempTransactions/TransList";
import { transactionList } from "@/actions/auth";
import { useState, useEffect } from "react";

function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const fetchedTransactions = await transactionList();
        setTransactions(fetchedTransactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);
  return (
    <div className="bg-black">
      <h1>A list of transactions should be here</h1>
      {/* <Transactions /> */}
      <TransList transactions={transactions} />
    </div>
  );
}

export default TransactionsPage;
