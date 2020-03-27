import React from "react";

const Lonely = ({ activeUserImage, likedUsers }) => (
  <div className="lonely">
    <p>there's no new around you.</p>
    <span className="pulse">
      <img src={`/images/users/${activeUserImage}`} alt="you..." />
    </span>
  </div>
);
export default Lonely;
