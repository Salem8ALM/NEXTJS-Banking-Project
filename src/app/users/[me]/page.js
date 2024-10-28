import React from "react";
import Auth from "src/actions/auth.js";

function Profile() {
  return (
    <div>
      All my Details should be here
      <br></br>
      <Auth viewProfile={viewProfile} />
    </div>
  );
}

export default Profile;
