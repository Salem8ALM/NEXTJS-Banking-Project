function TransQuery({ type, handleSearch, handleType }) {
  return (
    <div className="mx-auto">
      <div className="flex justify-start space-x-2 w-full font-primary">
        <div className="flex flex-col items-start space-y-1 flex-grow">
          <input
            type="search"
            placeholder="search"
            className="text-gray-900 form-input border border-gray-300 w-full rounded-sm focus:border-palette-light focus:ring-palette-light"
            onChange={handleSearch}
          />
        </div>
        <div className="flex flex-col items-start space-y-1 flex-grow-0">
          <select
            onChange={handleType}
            defaultValue={type}
            className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
          >
            <option value="all">All</option>
            <option value="deposit">Deposits</option>
            <option value="withdraw">Withdrawals</option>
            <option value="transfer">Transfers</option>
          </select>
          {/* <p>
            {format(parseISO(transaction.createdAt), "MMMM dd, yyyy, hh:mm a")}
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default TransQuery;
