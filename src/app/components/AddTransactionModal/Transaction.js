// // src/components/Transactions.js
// "use client";
// import { useState, useEffect } from "react";

// function Transactions() {
//   const [transactions, setTransactions] = useState([]);
//   const [filteredTransactions, setFilteredTransactions] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filterType, setFilterType] = useState("all");
//   const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });

//   useEffect(() => {
//     // Fetch transactions from the API
//     async function fetchTransactions() {
//       try {
//         const response = await fetch("/mini-project/api/transactions/my");
//         const data = await response.json();
//         setTransactions(data);
//         setFilteredTransactions(data);
//       } catch (error) {
//         console.error("Failed to fetch transactions:", error);
//       }
//     }
//     fetchTransactions();
//   }, []);

//   // Filter by search term
//   useEffect(() => {
//     const filtered = transactions.filter((transaction) =>
//       transaction.description.toLowerCase().includes(search.toLowerCase())
//     );
//     setFilteredTransactions(filtered);
//   }, [search, transactions]);

//   // Filter by transaction type
//   useEffect(() => {
//     const filtered = transactions.filter((transaction) => {
//       if (filterType === "all") return true;
//       return transaction.type === filterType;
//     });
//     setFilteredTransactions(filtered);
//   }, [filterType, transactions]);

//   // Filter by date range
//   useEffect(() => {
//     const filtered = transactions.filter((transaction) => {
//       const transactionDate = new Date(transaction.date);
//       const startDate = dateRange.startDate
//         ? new Date(dateRange.startDate)
//         : null;
//       const endDate = dateRange.endDate ? new Date(dateRange.endDate) : null;

//       if (startDate && transactionDate < startDate) return false;
//       if (endDate && transactionDate > endDate) return false;

//       return true;
//     });
//     setFilteredTransactions(filtered);
//   }, [dateRange, transactions]);

//   return (
//     <div className="transactions-page p-4">
//       <h1 className="text-2xl font-bold mb-4">Transactions</h1>
//       <div className="filters flex items-center space-x-4 mb-4">
//         {/* Search Input */}
//         <input
//           type="text"
//           placeholder="Search"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="border rounded p-2"
//         />
//         {/* Filter Buttons */}
//         <button
//           onClick={() => setFilterType("all")}
//           className="p-2 bg-gray-200 rounded"
//         >
//           All
//         </button>
//         <button
//           onClick={() => setFilterType("deposit")}
//           className="p-2 bg-gray-200 rounded"
//         >
//           Deposit
//         </button>
//         <button
//           onClick={() => setFilterType("withdraw")}
//           className="p-2 bg-gray-200 rounded"
//         >
//           Withdraw
//         </button>
//         <button
//           onClick={() => setFilterType("transfer")}
//           className="p-2 bg-gray-200 rounded"
//         >
//           Transfer
//         </button>
//         {/* Date Filters */}
//         <input
//           type="date"
//           value={dateRange.startDate}
//           onChange={(e) =>
//             setDateRange((prev) => ({ ...prev, startDate: e.target.value }))
//           }
//           className="border rounded p-2"
//         />
//         <input
//           type="date"
//           value={dateRange.endDate}
//           onChange={(e) =>
//             setDateRange((prev) => ({ ...prev, endDate: e.target.value }))
//           }
//           className="border rounded p-2"
//         />
//       </div>
//       <div className="transactions-list space-y-2">
//         {filteredTransactions.length ? (
//           filteredTransactions.map((transaction) => (
//             <div
//               key={transaction.id}
//               className="transaction-item flex justify-between p-4 border rounded bg-white"
//             >
//               <span>{transaction.amount}</span>
//               <span>{transaction.date}</span>
//               <span>{transaction.type}</span>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No transactions found</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Transactions;
