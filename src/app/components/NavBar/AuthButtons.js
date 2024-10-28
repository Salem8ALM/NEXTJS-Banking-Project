import { getUser } from "@/lib/token";
import NavLink from "./NavLink";
import { logout } from "@/actions/auth";
import { viewProfile } from "@/actions/auth";

async function AuthButtons() {
  // Actually check if there's a user!
  const user = await getUser();

  if (user)
    return (
      <div>
        <button
          type="button"
          // Actually make the logout button work!
          onClick={logout}
          className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
        <button type="button" onClick={viewProfile}>
          My Details
        </button>
      </div>
    );

  return (
    <>
      <NavLink href="/login">Login</NavLink>
      <NavLink href="/register">Register</NavLink>
    </>
  );
}

export default AuthButtons;
