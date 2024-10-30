import Link from "next/link";
import ImageForUsers from "../ImageForUsers";
import PopupGfg from "../popup";

function UserCard({ user }) {
  return (
    <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
      <h1 className="text-md font-bold">{user.username}</h1>
      <p>{user.balance}</p>
      <ImageForUsers
        src={user.image}
        alt={`${user.username}-image`}
        className="w-[200px] rounded-md"
        width={200}
        height={200}
      />
      <div className="flex justify-center">
        <PopupGfg username={user.username} />
      </div>
    </div>
  );
}

export default UserCard;
