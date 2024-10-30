import TransactionCard from "./TransactionCard";

function TransactionList({ transactions }) {
  const transactionList = transactions.map((transaction) => (
    <TransactionCard transaction={transaction} key={transaction._id} />
  ));

  return (
    <div className=" flex flex-col flex-wrap gap-[20px] justify-center items-center mb-[50px]">
      {transactionList}
    </div>
  );
}

export default TransactionList;
