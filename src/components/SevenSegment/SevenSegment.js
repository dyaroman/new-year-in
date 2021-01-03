import React from "react";

import "./SevenSegment.scss";
import digit2array from "../../misc/digit2array";

function SevenSegment(props) {
  const { digit } = props;
  const activeSegments = digit2array(digit);

  return (
    <div className="SevenSegment">
      {[1, 2, 3, 4, 5, 6, 7].map((key) => (
        <div
          className={activeSegments.includes(key) ? "show" : null}
          key={key}
        />
      ))}
    </div>
  );
}

export default SevenSegment;
