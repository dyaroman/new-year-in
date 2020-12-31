import React from "react";
import "./SevenSegment.scss";

function digit2array(digit) {
  const arr = [];
  switch (digit) {
    case 0:
      arr.push(1, 2, 3, 4, 5, 6);
      break;
    case 1:
      arr.push(2, 3);
      break;
    case 2:
      arr.push(1, 2, 4, 5, 7);
      break;
    case 3:
      arr.push(1, 2, 3, 4, 7);
      break;
    case 4:
      arr.push(2, 3, 6, 7);
      break;
    case 5:
      arr.push(1, 3, 4, 6, 7);
      break;
    case 6:
      arr.push(1, 3, 4, 5, 6, 7);
      break;
    case 7:
      arr.push(1, 2, 3);
      break;
    case 8:
      arr.push(1, 2, 3, 4, 5, 6, 7);
      break;
    case 9:
      arr.push(1, 2, 3, 4, 6, 7);
      break;
  }
  return arr;
}

function SevenSegment(props) {
  const { digit } = props;

  const activeSegments = digit2array(digit);

  return (
    <div className="SevenSegment">
      {[1, 2, 3, 4, 5, 6, 7].map((key) => (
        <div
          className={activeSegments.includes(key) ? "action" : null}
          key={key}
        ></div>
      ))}
    </div>
  );
}

export default SevenSegment;
