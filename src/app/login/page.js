// import { login } from "@/actions/auth";
// import Input from "../components/input";

// function Login() {
//   return (
//     <div className="bg-white min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
//       <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-md shadow-md">
//         <h2 className="text-3xl text-black font-semibold mb-6">Login</h2>
//         {/* Wire up the login action */}
//         <form action={login}>
//           <div className="mb-4">
//             <label
//               htmlFor="username"
//               className="block text-black text-sm font-medium mb-2"
//             >
//               Username
//             </label>
//             <Input
//               style={{ color: "black" }}
//               type="username"
//               name="username"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="password"
//               className="block text-black text-sm font-medium mb-2"
//             >
//               Password
//             </label>
//             <Input
//               style={{ color: "black" }}
//               name="password"
//               type="password"
//               required
//             />
//           </div>
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
import { login } from "@/actions/auth";
import Input from "../components/input";
import Image from "next/image";
import oldguy from "@/assets/pics/login.webp"

function Login() {
  return (
    <div className="bg-secondary min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row max-w-4xl w-full bg-primary rounded-lg shadow-lg overflow-hidden">
        {/* Left Section - Form */}
        <div className="flex-1 p-8">
          <h2 className="text-3xl text-accent font-semibold mb-6">Login</h2>
          <form action={login}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Username
              </label>
              <Input
                className="w-full p-2 border rounded-md"
                name="username"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Password
              </label>
              <Input
                className="w-full p-2 border rounded-md"
                name="password"
                type="password"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-dark transition-colors"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        
        {/* Right Section - Image */}
        <div className="hidden md:block flex-1 bg-gray-100">
          <Image
            src={oldguy}
            alt="Login illustration"
            layout="responsive"
            width={300}
            height={300}
            className="object-cover h-full w-full rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
