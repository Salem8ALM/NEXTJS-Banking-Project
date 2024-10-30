import Link from "next/link";

function TransactionCard({ transaction }) {
  return (
    <div className="font-sans w-[1000px] h-[100px] border border-black rounded flex flex-col justify-center items-center bg-white text-black">
      <p>{transaction.type}</p>
      <p>{transaction.amount}</p>
      <p>{transaction.createdAt.split("T")[0]}</p>
    </div>
  );
}

export default TransactionCard;
