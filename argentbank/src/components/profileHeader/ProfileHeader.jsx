import Button from "components/button/Button";
import "components/profileHeader/profileHeader.css";
import React from "react";

function ProfileHeader() {
  return (
    <div className="headerProfile">
      <h1>
        Welcome back
        <br />
        Tony Stark!
      </h1>
      <Button className="editButton" text="Edit Name" />
    </div>
  );
}

export default ProfileHeader;
