"use client";
import React, { useState } from "react";
import { viewDeposit, viewWithdraw } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function DepositAndTransfer() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const presetAmounts = [50, 100, 200, 500, 1000];

  const handlePresetClick = (amount, type) => {
    if (type === "deposit") {
      setDepositAmount(amount);
    } else if (type === "withdraw") {
      setWithdrawAmount(amount);
    }
  };

  return (
    <Tabs defaultValue="deposit" className="w-[550px] h-[930px] mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="deposit">Deposit</TabsTrigger>
        <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
      </TabsList>

      {/* Deposit Tab */}
      <TabsContent value="deposit">
        <Card>
          <CardHeader>
            <CardTitle>Deposit</CardTitle>
            <CardDescription>
              Enter the amount you wish to deposit.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex gap-2 mb-2">
              {presetAmounts.map((amount) => (
                <Button
                  key={amount}
                  onClick={() => handlePresetClick(amount, "deposit")}
                  variant="outline"
                  className="text-sm"
                >
                  {amount}KD
                </Button>
              ))}
            </div>
            <form action={viewDeposit} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="deposit">Amount</Label>
                <Input
                  id="deposit"
                  type="number"
                  name="amount"
                  placeholder="Enter the amount"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  className="text-black"
                />
              </div>
              <CardFooter>
                <Button type="submit" className="w-full">
                  Deposit
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Withdraw Tab */}
      <TabsContent value="withdraw">
        <Card>
          <CardHeader>
            <CardTitle>Withdraw</CardTitle>
            <CardDescription>
              Enter the amount you wish to withdraw.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex gap-2 mb-2">
              {presetAmounts.map((amount) => (
                <Button
                  key={amount}
                  onClick={() => handlePresetClick(amount, "withdraw")}
                  variant="outline"
                  className="text-sm"
                >
                  {amount}KD
                </Button>
              ))}
            </div>
            <form action={viewWithdraw} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="withdraw">Amount</Label>
                <Input
                  id="withdraw"
                  type="number"
                  name="amount"
                  placeholder="Enter the amount"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="text-black"
                />
              </div>
              <CardFooter>
                <Button type="submit" className="w-full">
                  Withdraw
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export default DepositAndTransfer;
