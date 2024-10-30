import Image from "next/image";
import Input from "./components/input";
import { viewDeposit } from "@/actions/auth";
import DepositAndTransfer from "./components/depositAndTransfer/DepositAndTransfer";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-white text-3xl mt-40 font-bold font-mono">
          Welcome to Bank Al-Falas
        </h1>

        <DepositAndTransfer />
      </div>
    </div>
  );
}
