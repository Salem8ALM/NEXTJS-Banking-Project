"use client";

import React, { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import TransList from "../components/TempTransactions/TransList";
import { transactionList } from "@/actions/auth";
import DepositAndTransfer from "../components/depositAndTransfer/DepositAndTransfer";
import background from "@/assets/pics/background.png"

function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const fetchedTransactions = await transactionList();
        setTransactions(fetchedTransactions);

        const totals = fetchedTransactions.reduce(
          (acc, transaction) => {
            if (transaction.type === "deposit") {
              acc.deposits += transaction.amount;
            } else if (transaction.type === "withdraw") {
              acc.withdrawals += transaction.amount;
            }
            return acc;
          },
          { deposits: 0, withdrawals: 0 }
        );

        setChartData([
          { name: "Deposits", value: totals.deposits },
          { name: "Withdrawals", value: totals.withdrawals },
        ]);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="bg-secondary min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col gap-4 w-full max-w-5xl">
        {/* Two Cards in a Row */}

        <div className="flex flex-col md:flex-row gap-4 h-80">
          {/* Transaction List with Scrolling */}

          <div className="bg-accent p-4 rounded shadow-md w-full md:w-1/2 h-80 overflow-y-auto">
            <TransList transactions={transactions} />
          </div>

          {/* Deposit and Withdraw Card */}
          <div className="w-full md:w-1/2 flex justify-center">
            <DepositAndTransfer />
          </div>
        </div>

        {/* Chart Card Directly Below the Two Cards */}
        <div className="p-4 rounded bg-secondary shadow-md w-full mb-5 max-w-full md:max-w-5xl mt-8">
          <h2 className="text-center text-accent font-bold mb-4">
            Withdrawals and Deposits Overview
          </h2>
          <div className="flex items-center  justify-center">
            {" "}
            {/* Centering Container */}
            <PieChart width={300} height={300}>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.name === "Deposits" ? "green" : "#f44336"}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionsPage;
