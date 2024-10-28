import { login } from "@/actions/auth";
import Input from "../components/input";

function Login() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-md shadow-md">
        <h2 className="text-3xl text-black font-semibold mb-6">Login</h2>
        {/* Wire up the login action */}
        <form action={login}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-black text-sm font-medium mb-2"
            >
              Username
            </label>
            <Input
              style={{ color: "black" }}
              type="username"
              name="username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-black text-sm font-medium mb-2"
            >
              Password
            </label>
            <Input
              style={{ color: "black" }}
              name="password"
              type="password"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
