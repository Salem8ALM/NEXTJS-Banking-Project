import { getAllUsers, transferToUser } from "@/actions/auth";
import UserList from "../components/UserList";

async function User() {
  const users = await getAllUsers();
  // const transfer = await transferToUser();

  return (
    <div className="bg-gray-200 h-auto flex items-center justify-center inset-0 z-[-1] pt-10">
      <UserList users={users} />
    </div>
  );
}

export default User;
