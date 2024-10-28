import UserCard from "./UserCard";

function UserList({ users }) {
  const userList = users.map((user) => <UserCard user={user} key={user.id} />);

  return (
    <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
      {userList}
    </div>
  );
}

export default UserList;
