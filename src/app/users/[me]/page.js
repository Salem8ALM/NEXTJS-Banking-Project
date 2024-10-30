//

import React from "react";
import { viewProfile } from "@/actions/auth";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar"; // Assuming you have an Avatar component for profile pictures
import { Button } from "@/components/ui/button";
import ImageForUsers from "@/app/components/ImageForUsers";
async function Profile({ user }) {
  const profile = await viewProfile();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md bg-white rounded-lg shadow-lg">
        <CardHeader className="flex items-center space-x-4 p-6 border-b">
          <ImageForUsers
            src={user.image}
            alt={`${user.username}-image`}
            className="w-[200px] rounded-md"
            width={200}
            height={200}
          />
          <div>
            <CardTitle className="text-2xl font-bold text-gray-800">
              {profile.username}
            </CardTitle>
            <CardDescription className="text-sm text-gray-500">
              Member since {new Date(profile.createdAt).toLocaleDateString()}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-4">
          <div className="text-lg font-medium text-gray-700">
            Balance:{" "}
            <span className="text-green-500">
              ${profile.balance.toFixed(2)}
            </span>
          </div>

          {/* Edit Profile Button */}
          <div className="pt-4">
            <Button variant="outline" className="w-full">
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Profile;
