import React from "react";
import Dislike from "../../.././components/actions/Dislike";
import Like from "../../.././components/actions/Like";
import axios from "../../../axios";

const dislike = () => {
  alert("押されてるよ");
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
};

const Actions = ({ person, modifySuperficialChoices }) => (
  <div id="actions">
    <Dislike
      onClick={dislike}
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
    <Like
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
  </div>
);

export default Actions;
