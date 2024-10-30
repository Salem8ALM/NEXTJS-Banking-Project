// src/components/Transactions.js
"use client";
import { useState, useEffect } from "react";
import TransactionCard from "./TransactionCard";

function Transactions({ transactions }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  function handleType(event) {
    setType(event.target.value);
  }

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesQuery = transaction.type
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesType = type === "" || transaction.type === type;
    return matchesType && matchesQuery;
  });

  return (
    <div className="flex flex-col gap-5">
      <input
        type="search"
        placeholder="Search"
        className="text-gray-900 form-input border border-gray-300 w-full rounded-sm focus:border-palette-light focus:ring-palette-light"
        onChange={handleSearch}
      />
      <select
        id="filter"
        value={type}
        onChange={handleType}
        className="p-2 rounded-md text-black"
      >
        <option value="">All</option> {/* Keep the value empty for "All" */}
        <option value="deposit">Deposits</option>
        <option value="withdraw">Withdrawals</option>
        <option value="transfer">Transfers</option>
      </select>
      {/* Pass the filtered transactions to the TransactionList component */}
      {filteredTransactions}
    </div>
  );
}

export default Transactions;
