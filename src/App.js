import React, { useState } from "react";

import "./App.scss";
import SevenSegment from "./components/SevenSegment/SevenSegment";
import Divider from "./components/Divider/Divider";
import getCurrentTime from "./misc/getCurrentTime";
import useInterval from "./hooks/useInterval";

function App() {
  const [time, setTime] = useState(getCurrentTime());

  useInterval(() => {
    setTime(getCurrentTime());
  }, 1000);

  const seconds = [];
  const minutes = [];
  const hours = [];
  const days = [];

  for (
    let backward = time.length, forward = 0;
    backward > 0;
    backward--, forward++
  ) {
    if (forward < 2) {
      seconds.unshift(time[backward - 1]);
    } else if (forward < 4) {
      minutes.unshift(time[backward - 1]);
    } else if (forward < 6) {
      hours.unshift(time[backward - 1]);
    } else {
      days.unshift(time[backward - 1]);
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
