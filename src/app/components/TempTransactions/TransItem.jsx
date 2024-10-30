// "use client";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// function TransItem({ transaction }) {
//   return (
//     // <div className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
//     //   <div className="h-72 border-b-2 border-palette-lighter relative"></div>
//     //   <div className="h-48 relative">
//     //     <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold text-white">
//     //       {transaction.amount}
//     //     </div>
//     //     <div className="text-lg text-white p-4 font-primary font-light">
//     //       {transaction.type}
//     //     </div>
//     //     <p className="text-white">{transaction.createdAt.split("T")[0]}</p>
//     //   </div>
//     // </div>

//     <Table>
//       <TableHeader>
//         <TableRow>
//           <TableHead>Type</TableHead>
//           <TableHead>Date</TableHead>
//           <TableHead className="text-right">Amount</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         <TableCell>{transaction.type}</TableCell>
//         <TableCell>{transaction.createdAt.split("T")[0]}</TableCell>
//         <TableCell className="text-right">{transaction.amount}</TableCell>
//       </TableBody>
//     </Table>
//   );
// }

// export default TransItem;
