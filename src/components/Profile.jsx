import React from "react";
import ProfileCards from "./ProfileCards";

const Profile = () => {
  return (
    <>
      <h1>Profile Card challenge</h1>
      <ProfileCards
        name="Heer"
        age={20}
        greeting={
          <div>
            <strong>Hi Heer , Have a wonderful day</strong>
          </div>
        }
      >
        <p>Hobbies : Drawing , Reading</p>
        <button>Contact</button>
      </ProfileCards>

      <ProfileCards
        name="Henu"
        age={18}
        greeting={
          <div>
            <strong>Hi Henu , Have a wonderful day</strong>
          </div>
        }
      >
        <p>Hobbies : Singing , Dancing</p>
        <button>Contact</button>
      </ProfileCards>

    </>
  );
};

export default Profile;
