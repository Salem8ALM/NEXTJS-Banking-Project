// In your TransQuery component
function TransQuery({
  type,
  handleSearch,
  handleType,
  handleStartDateChange,
  handleEndDateChange,
}) {
  return (
    <div className="flex flex-col gap-5">
      <input type="search" placeholder="Search" onChange={handleSearch} />
      <select value={type} onChange={handleType}>
        <option value="all">All</option>
        <option value="deposit">Deposits</option>
        <option value="withdraw">Withdrawals</option>
        <option value="transfer">Transfers</option>
      </select>
      <div>
        <label htmlFor="start-date">Start Date:</label>
        <input type="date" id="start-date" onChange={handleStartDateChange} />
      </div>
      <div>
        <label htmlFor="end-date">End Date:</label>
        <input type="date" id="end-date" onChange={handleEndDateChange} />
      </div>
    </div>
  );
}

export default TransQuery;
