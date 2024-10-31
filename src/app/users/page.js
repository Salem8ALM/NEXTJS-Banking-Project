import { getAllUsers, transferToUser } from "@/actions/auth";
import UserList from "../components/UserList";

async function User() {
  const users = await getAllUsers();
  // const transfer = await transferToUser();

  return (
    <div className="bg-secondary min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <UserList users={users} />
    </div>
  );
}

export default User;

