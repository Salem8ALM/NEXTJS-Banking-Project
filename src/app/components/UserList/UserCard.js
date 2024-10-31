import Link from "next/link";
import ImageForUsers from "../ImageForUsers";
import PopupGfg from "../popup";

function UserCard({ user }) {
  return (
    <div className="w-[280px] bg-white shadow-md rounded-lg flex flex-col items-center p-6 space-y-4 transition-transform transform hover:scale-105 hover:shadow-lg">
      {/* Username and Balance */}
      <div className="text-center">
        <h1 className="text-xl font-semibold text-gray-800">{user.username}</h1>
        <p className="text-accent text-sm">Balance: {user.balance} KWD</p>
      </div>

      {/* User Image */}
      <ImageForUsers
        src={user.image}
        alt={`${user.username}-image`}
        className="w-32 h-32 rounded-full object-cover shadow-md"
        width={128}
        height={128}
      />

      {/* Action Button */}
      <div className="w-full">
        <PopupGfg username={user.username}>
          <button className="w-full bg-[#274461] text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
            Transfer
          </button>
        </PopupGfg>
      </div>
    </div>
  );
}

export default UserCard;
