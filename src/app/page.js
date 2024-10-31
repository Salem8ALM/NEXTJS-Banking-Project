"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import fursan from "@/assets/pics/fursan.png";
import card from "@/assets/pics/card.png";
import bankers from "@/assets/pics/bankers.png";
import awards from "@/assets/pics/awards.png";
import nahda from "@/assets/pics/nahdalogo.png.png";

export default function Home() {
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [years, setYears] = useState(1);
  const [calculatedSavings, setCalculatedSavings] = useState(null);

  const calculateSavings = () => {
    const totalSavings = monthlySavings * 12 * years;
    setCalculatedSavings(totalSavings);
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center py-10 px-4">
      <div className="text-center mb-8">
        <h1 className="text-gray-900 text-4xl font-bold">
          Welcome to Al-Nahda Bank
        </h1>
        <p className="text-gray-600 mt-2">
          Your trusted partner in financial solutions
        </p>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={fursan}
            alt="Invest"
            width={500}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Diversify and invest with our great partners!
            </h2>
            <p className="text-gray-600 mb-4">
              Explore various investment options tailored to help grow your
              wealth with trusted partners.
            </p>
            <Link href="/investment-partners">
              <button className="bg-transparent border border-accent text-accent px-4 py-2 rounded hover:bg-accent hover:text-white transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={card}
            alt="Financial Emergency"
            width={500}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Do you have a financial emergency? Get your salary in advance with
              Al-Nahda!
            </h2>
            <p className="text-gray-600 mb-4">
              Stay prepared for any financial emergency with our "Salary in
              Advance" service.
            </p>
            <Link href="/salary-advance">
              <button className="bg-transparent border border-accent text-accent px-4 py-2 rounded hover:bg-accent hover:text-white transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={bankers}
            alt="Our Team"
            width={500}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Meet our dedicated team!
            </h2>
            <p className="text-gray-600 mb-4">
              Learn about the people behind Al-Nahda Bank who are here to assist
              you with all your financial needs.
            </p>
            <Link href="/our-team">
              <button className="bg-transparent border border-accent text-accent px-4 py-2 rounded hover:bg-accent hover:text-white transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={awards}
            alt="Awards"
            width={500}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Recognized for excellence in banking!
            </h2>
            <p className="text-gray-600 mb-4">
              Discover the awards we've received for our commitment to
              excellence and customer satisfaction.
            </p>
            <Link href="/awards">
              <button className="bg-transparent border border-accent text-accent px-4 py-2 rounded hover:bg-accent hover:text-white transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Savings Calculator */}
      <div className="bg-white mt-8 p-6 rounded-lg shadow-md max-w-lg w-full text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Savings Calculator
        </h2>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">
            Monthly Savings Amount (KWD)
          </label>
          <input
            type="number"
            value={monthlySavings}
            onChange={(e) => setMonthlySavings(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Years</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <button
          onClick={calculateSavings}
          className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark transition"
        >
          Calculate Savings
        </button>
        {calculatedSavings !== null && (
          <div className="mt-4 text-lg font-semibold text-gray-800">
            Total Savings: {calculatedSavings.toFixed(2)} KWD
          </div>
        )}
      </div>
    </div>
  );
}
