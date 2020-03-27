import React, { useState } from "react";
import Person from "../../components/UI/MatchUI/Person";
import Lonely from "../../components/UI/MatchUI/lonely";
import data from "../.././data.json";
import Sidebar from "../UI/Sidebar/Sidebar";
import "../../App.css";
const Matches = () => {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);

  const [dislikedUsers, setDisLikedUsers] = useState([]);
  const activeUser = 0;

  const removedPersonFromDatasrc = (peopleSource, userId) =>
    peopleSource.filter(user => user.id !== userId);

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people];
    const newLikedUsers = [...likedUsers];
    const newDislikedUsers = [...dislikedUsers];

    switch (action) {
      case "ADD_TO_LIKED_USERS":
        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId);
          newLikedUsers.push(data[userId]);
          setLikedUsers(newLikedUsers);
          setPeople(removedPersonFromDatasrc(people, userId));
        }
        break;
      case "ADD_TO_DISLIKED_USERS":
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId);
          newDislikedUsers.push(data[userId]);
          setDisLikedUsers(newLikedUsers);
          setPeople(removedPersonFromDatasrc(people, userId));
        }
        break;
      default:
        return people;
    }
  };
  return (
    <div
      style={{
        display: "flex"
      }}
    >
      <div>
        <Sidebar />
      </div>
      <div className="matches">
        {people[1] ? (
          <Person
            key={people[1].id}
            person={people[1]}
            modifySuperficialChoices={modifySuperficialChoices}
            likedUsers={likedUsers}
          />
        ) : (
          <Lonely
            activeUserImage={people[activeUser].image}
            likedUsers={likedUsers}
          />
        )}
      </div>
    </div>
  );
};

export default Matches;
