import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

export default function Rating(props) {
  return (
    <div className="text-warning">
      {[...Array(props.rating)].map(
        (rating, index) => (
          <span key={index}>
            <FontAwesomeIcon icon={faStar} />
          </span>
        )
      )}
      {[...Array(5 - props.rating)].map(
        (rating, index) => (
          <span key={index}>
            <FontAwesomeIcon icon={farStar} />
          </span>
        )
      )}
    </div>
  );
}
