import { register } from "@/actions/auth";
import Input from "../components/input";

function Register() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-md shadow-md">
        <h2 className="text-3xl rounded-lg text- font-semibold mb-6">
          Register your account
        </h2>
        <p>if you do have </p>
        {/* Wire up the register action */}
        <form action={register}>
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
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-black text-sm font-medium mb-2"
            >
              Password
            </label>
            <Input
              style={{ color: "black" }}
              type="password"
              name="password"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-black text-sm font-medium mb-2"
            >
              Attach Profile Image
            </label>
            <input
              type="file"
              name="image"
              className="w-full py-2 text-white rounded-md"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 w-full py-2 bg-[#20c55d] text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
