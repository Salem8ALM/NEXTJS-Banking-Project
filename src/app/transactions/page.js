"use client";
import React from "react";
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
      <TransList transactions={transactions} />
    </div>
  );
}

export default TransactionsPage;
