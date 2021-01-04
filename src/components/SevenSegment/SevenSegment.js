import React from "react";

import "./SevenSegment.scss";
import digitToSegments from "../../misc/digitToSegments";

function SevenSegment(props) {
  const { digit } = props;
  const activeSegments = digitToSegments(digit);

  return (
    <div className="SevenSegment">
      {[1, 2, 3, 4, 5, 6, 7].map((index) => (
        <div
          className={activeSegments.includes(index) ? "show" : null}
          key={index}
        />
      ))}
    </div>
  );
}

export default SevenSegment;
