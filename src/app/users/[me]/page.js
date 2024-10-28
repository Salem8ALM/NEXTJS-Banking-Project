import React from "react";
import { viewProfile } from "@/actions/auth";

async function Profile() {
  const profile = await viewProfile();
  return (
    <div>
      All my Details should be here
      <br></br>
      <h1>{profile.username}</h1>
      <h2>{profile.balance}</h2>
    </div>
  );
}

export default Profile;
