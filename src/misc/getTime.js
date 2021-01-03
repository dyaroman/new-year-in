function getTime() {
  const now = new Date();
  const timezoneOffset = now.getTimezoneOffset() * 60 * 1000;
  const diffTime =
    Date.parse(`01 Jan ${now.getFullYear() + 1} 00:00:00 GMT`) +
    timezoneOffset -
    now;
  let str = "";

  let days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor(diffTime / (1000 * 60 * 60));
  hours = hours % 24;
  let minutes = Math.floor(diffTime / (1000 * 60));
  minutes = minutes % 60;
  let seconds = Math.floor(diffTime / 1000);
  seconds = seconds % 60;

  str += days;
  if (hours < 10) str += 0;
  str += hours;
  if (minutes < 10) str += 0;
  str += minutes;
  if (seconds < 10) str += 0;
  str += seconds;

  return str.split("").map((i) => parseInt(i));
}

export default getTime;
