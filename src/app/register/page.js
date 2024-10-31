// import { register } from "@/actions/auth";
// import Input from "../components/input";

// function Register() {
//   return (
//     <div className="bg-white min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
//       <div className="max-w-md w-full px-6 py-8 bg-white rounded-md shadow-md">
//         <h2 className="text-3xl rounded-lg text- font-semibold mb-6">
//           Register your account
//         </h2>
//         <p>if you do have </p>
//         {/* Wire up the register action */}
//         <form action={register}>
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
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-black text-sm font-medium mb-2"
//             >
//               Password
//             </label>
//             <Input
//               style={{ color: "black" }}
//               type="password"
//               name="password"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="image"
//               className="block text-black text-sm font-medium mb-2"
//             >
//               Attach Profile Image
//             </label>
//             <input
//               type="file"
//               name="image"
//               className="w-full py-2 text-white rounded-md"
//               required
//             />
//           </div>
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="px-4 w-full py-2 bg-[#20c55d] text-white rounded-md hover:bg-blue-600 transition-colors"
//             >
//               Register
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;
import { register } from "@/actions/auth";
import Input from "../components/input";
import Image from "next/image";
import registerImage from "@/assets/pics/boy.webp"; // Replace with the actual path of your image

function Register() {
  return (
    <div className="bg-secondary min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row max-w-4xl w-full bg-primary rounded-lg shadow-lg overflow-hidden">
        {/* Left Section - Form */}
        <div className="flex-1 p-8">
          <h2 className="text-3xl text-accent font-semibold mb-6">
            Register Your Account
          </h2>
          <p className="text-gray-600 mb-6">
            Already have an account?{" "}
            <a href="/login" className="text-accent hover:underline">
              Login here
            </a>
          </p>
          <form action={register}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Username
              </label>
              <Input
                className="w-full p-2 border rounded-md"
                type="username"
                name="username"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Password
              </label>
              <Input
                className="w-full p-2 border rounded-md"
                type="password"
                name="password"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="image"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Attach Profile Image
              </label>
              <input
                type="file"
                name="image"
                className="w-full py-2 text-gray-700 rounded-md border"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 w-full bg-accent text-white rounded-md hover:bg-accent-dark transition-colors"
              >
                Register
              </button>
            </div>
          </form>
        </div>

        {/* Right Section - Image */}
        <div className="hidden md:block flex-1 bg-primary">
          <Image
            src={registerImage}
            alt="Register illustration"
            layout="responsive"
            width={500}
            height={800}
            className="object-cover h-full w-full  rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
