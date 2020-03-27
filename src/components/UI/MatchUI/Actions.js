import React from "react";
import Dislike from "../../.././components/actions/Dislike";
import Like from "../../.././components/actions/Like";

const Actions = ({ person, modifySuperficialChoices }) => (
  <div id="actions">
    <Dislike
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
