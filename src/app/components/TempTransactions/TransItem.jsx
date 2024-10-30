"use client";

import Image from "next/image";
import { useState } from "react";

function TransItem({ transaction }) {
  return (
    <div className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
      <div className="h-72 border-b-2 border-palette-lighter relative"></div>
      <div className="h-48 relative">
        <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
          {transaction.amount}
        </div>
        <div className="text-lg text-gray-600 p-4 font-primary font-light">
          {transaction.type}
        </div>
      </div>
    </div>
  );
}

export default TransItem;
