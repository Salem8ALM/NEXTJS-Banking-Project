import React from "react";
import { viewProfile } from "@/actions/auth";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { baseUrl } from "@/actions/config";
import Image from "next/image";

async function Profile({ user }) {
  const profile = await viewProfile();
  console.log(`${baseUrl}/${profile.image}`);

  return (
    <div className="flex flex-col gap-5 items-center min-h-screen bg-gray-200 text-white py-6 px-4">
      <div className="flex items-center justify-between w-full max-w-md mb-6">
        <div className="flex items-center space-x-3">
          <div>
            <h1 className="text-lg text-black font-semibold">Welcome Back!</h1>
          </div>
        </div>
      </div>
      {/* Balance Section */}
      <Card className="w-full max-w-md bg-primary rounded-lg p-4 mb-4 shadow-lg">
        <CardHeader className="flex items-center justify-between">
          <Image
            src={`${baseUrl}/${profile.image}`}
            alt="User Profile Picture"
            size={50}
            className="w-32 h-32 rounded-full object-cover shadow-md"
            width={128}
            height={128}
          />
          <h2 className="text-xl text-accent font-bold">{profile.username}</h2>
          <CardTitle className="text-black font-semibold">
            TOTAL AVAILABLE BALANCE
          </CardTitle>
        </CardHeader>
        <CardContent className="text-4xl font-bold text-accent mt-2">
          {profile.balance.toFixed(3)} KWD
        </CardContent>
      </Card>
      {/* Accounts Section */}
      <Card className="w-full max-w-md bg-accent rounded-lg p-4 mb-4 shadow-lg">
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Accounts</CardTitle>
          <Button variant="ghost" size="icon" className="text-gray-400">
            ➔
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-lg text-secondary font-medium">
                Checking Account
              </p>
            </div>
            <div className="text-lg text-secondary font-semibold">
              {profile.balance.toFixed(3)} KWD
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-lg text-secondary font-medium">
                Savings Account
              </p>
              <p className="text-xs text-red-500">Not In Use</p>
            </div>
            <div className="text-lg text-secondary font-semibold">
              0.000 KWD
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Savings Goals Progress */}
      <Card className="w-full max-w-md bg-primary rounded-lg p-4 mb-4 shadow-lg">
        <CardHeader>
          <CardTitle className="text-black">Savings Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-2">
            <p className="text-accent">Vacation Fund</p>
            <div className="w-full bg-secondary rounded-full h-2.5 mb-2">
              <div
                className="bg-accent h-2.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
            <span className="text-sm text-accent">75% Complete</span>
          </div>
          <div>
            <p className="text-accent">Emergency Fund</p>
            <div className="w-full bg-secondary rounded-full h-2.5 mb-2">
              <div
                className="bg-accent h-2.5 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
            <span className="text-sm text-accent">40% Complete</span>
          </div>
        </CardContent>
      </Card>
      {/* Investment Portfolio Summary */}
      <Card className="w-full max-w-md bg-accent rounded-lg p-4 mb-4 shadow-lg">
        <CardHeader>
          <CardTitle className="text-secondary">Investment Portfolio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between text-secondary mb-2">
            <span>Stocks</span>
            <span className="text-green-500">+5.2%</span>
          </div>
          <div className="flex justify-between text-secondary">
            <span>Mutual Funds</span>
            <span className="text-red-500">-1.3%</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Profile;
