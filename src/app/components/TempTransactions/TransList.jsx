"use client";

import { useState } from "react";
import TransQuery from "./TransQuery";
import TransItem from "./TransItem";

function TransList({ transactions }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  function handleType(event) {
    setType(event.target.value);
  }

  const transactionsList = transactions
    .filter((transaction) => {
      const foundQuery = ("" + transaction.amount).startsWith(query);
      const isType = type === "all" || transaction.type === type;
      return isType && foundQuery;
    })
    .map((transaction) => (
      <TransItem transaction={transaction} key={transaction._id} />
    ));

  return (
    <>
      <TransQuery
        type={type}
        handleSearch={handleSearch}
        handleType={handleType}
      />
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {transactionsList}
      </div>
    </>
  );
}

export default TransList;
