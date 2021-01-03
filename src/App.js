import React, { useState } from "react";

import "./App.scss";
import SevenSegment from "./components/SevenSegment/SevenSegment";
import Divider from "./components/Divider/Divider";
import getTime from "./misc/getTime";
import useInterval from "./hooks/useInterval";

function App() {
  const [time, setTime] = useState(() => getTime());

  useInterval(() => {
    setTime(getTime());
  }, 1000);

  const seconds = [];
  const minutes = [];
  const hours = [];
  const days = [];

  for (let b = time.length, f = 0; b > 0; b--, f++) {
    if (f < 2) {
      seconds.unshift(time[b - 1]);
    } else if (f < 4) {
      minutes.unshift(time[b - 1]);
    } else if (f < 6) {
      hours.unshift(time[b - 1]);
    } else {
      days.unshift(time[b - 1]);
    }
  }

  return (
    <div className="App">
      {days &&
        days.map((day, index) => <SevenSegment digit={day} key={index} />)}

      {days && <Divider />}

      {hours &&
        hours.map((hour, index) => <SevenSegment digit={hour} key={index} />)}

      {hours && <Divider />}

      {minutes &&
        minutes.map((minute, index) => (
          <SevenSegment digit={minute} key={index} />
        ))}

      {minutes && <Divider />}

      {seconds &&
        seconds.map((second, index) => (
          <SevenSegment digit={second} key={index} />
        ))}
    </div>
  );
}

export default App;
