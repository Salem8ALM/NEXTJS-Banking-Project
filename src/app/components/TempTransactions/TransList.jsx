"use client";
import { useState } from "react";
import { parseISO, isAfter, isSameDay, format } from "date-fns";

function TransList({ transactions }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Event handlers for filter controls
  function handleSearch(event) {
    setQuery(event.target.value);
  }

  function handleType(event) {
    setType(event.target.value);
  }

  function handleStartDateChange(event) {
    setStartDate(event.target.value);
  }

  function handleEndDateChange(event) {
    setEndDate(event.target.value);
  }

  // Filter transactions based on query, type, and date range
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesQuery = transaction.amount.toString().startsWith(query);
    const matchesType = type === "all" || transaction.type === type;
    const transactionDate = parseISO(transaction.createdAt);
    const inDateRange =
      (!startDate || isAfter(transactionDate, parseISO(startDate))) &&
      (!endDate || isSameDay(transactionDate, parseISO(endDate)));

    return matchesQuery && matchesType && inDateRange;
  });

  return (
    <div className="space-y-4">
      {/* Search and Filter Controls */}
      <div className="space-y-4">
        <input
          type="search"
          placeholder="Search by amount"
          value={query}
          onChange={handleSearch}
          className="p-2 border rounded w-full"
        />
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 font-medium">Filter:</span>
          <label className="flex items-center text-secondary space-x-1">
            <input
              type="radio"
              name="type"
              value="all"
              checked={type === "all"}
              onChange={handleType}
            />
            <span>All</span>
          </label>
          <label className="flex items-center text-secondary space-x-1">
            <input
              type="radio"
              name="type"
              value="deposit"
              checked={type === "deposit"}
              onChange={handleType}
            />
            <span>Deposit</span>
          </label>
          <label className="flex items-center text-secondary space-x-1">
            <input
              type="radio"
              name="type"
              value="withdraw"
              checked={type === "withdraw"}
              onChange={handleType}
            />
            <span>Withdraw</span>
          </label>
          <label className="flex items-center text-secondary space-x-1">
            <input
              type="radio"
              name="type"
              value="transfer"
              checked={type === "transfer"}
              onChange={handleType}
            />
            <span>Transfer</span>
          </label>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <label className="block text-secondary font-medium">
              Start Date:
            </label>
            <input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-secondary font-medium">
              End Date:
            </label>
            <input
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              className="p-2 border rounded w-full"
            />
          </div>
        </div>
      </div>

      {/* Display Filtered Transactions */}
      <div className="space-y-2">
        {filteredTransactions.map((transaction) => (
          <div
            key={transaction._id}
            className="flex justify-between items-center p-4 bg-white rounded shadow-md"
          >
            <span
              className={`font-semibold ${
                transaction.type === "withdraw"
                  ? "text-red-700"
                  : "text-green-500"
              }`}
            >
              {transaction.type === "withdraw"
                ? `- ${transaction.amount} KD`
                : `+ ${transaction.amount} KD`}
            </span>
            <span>{format(parseISO(transaction.createdAt), "dd/MM/yyyy")}</span>
            <span className="capitalize">{transaction.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransList;
