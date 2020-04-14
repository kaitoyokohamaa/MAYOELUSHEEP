import React, { useState } from "react";
import Person from "../../components/UI/MatchUI/Person";
import Lonely from "../../components/UI/MatchUI/lonely";
import data from "../.././data.json";
import Sidebar from "../UI/Sidebar/Sidebar";
import "../../App.css";
import axios from "../../axios";
const Matches = () => {
  const [people, setPeople] = useState(data);

  const activeUser = 0;

  const removedPersonFromDatasrc = (peopleSource, userId) =>
    peopleSource.filter(user => user.id !== userId);

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people];

    switch (action) {
      case "ADD_TO_LIKED_USERS":
        if (!people[activeUser].likedUsers.includes(userId)) {
          axios
            .post(`match_requests/:id/accept`)
            .then(json => {
              alert("loh");
              console.log(json.data);
            })
            .then(responseData => {
              console.log(responseData);
            })
            .catch(err => {
              console.log(err, err.data);
            });
          newPeople[activeUser].likedUsers.push(userId);
          setPeople(removedPersonFromDatasrc(people, userId));
          console.log(newPeople[activeUser].likedUsers);
        }

        break;
      case "ADD_TO_DISLIKED_USERS":
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          axios
            .post(`match_requests/${localStorage.getItem("id")}/skip`)
            .then(json => {
              alert("loh");
              console.log(json.data);
            })
            .then(responseData => {
              console.log(responseData);
            })
            .catch(err => {
              console.log(err, err.data);
            });
          newPeople[activeUser].dislikedUsers.push(userId);
          setPeople(removedPersonFromDatasrc(people, userId));
        }
        break;
      default:
        return people;
    }
  };
  console.log(console.log(people[2]));
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
          />
        ) : (
          <Lonely activeUserImage={people[activeUser].image} />
        )}
      </div>
    </div>
  );
};

export default Matches;
