import Image from "next/image";
import Input from "./components/input";
import { viewDeposit } from "@/actions/auth";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-white text-3xl mt-40 font-bold font-mono">
          Welcome to Bank Al-Falas
        </h1>

        <h2>ADD BALANCE AND TRANSACTION FUNCTION HERE</h2>
        <p>To get started, please register here</p>
        <form action={viewDeposit}>
          <Input
            label="deposit"
            type="number"
            name="amount"
            className="text-black"
          />
        </form>
      </div>
    </div>
  );
}
