import React, { useEffect, useState } from "react";

function DateTime() {
  const [dateTime, setDateTime] = useState({
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  });
  useEffect(() => {
    const dateInterval = setInterval(() => {
      setDateTime({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
    return () => {
      clearInterval(dateInterval);
    };
  }, [dateTime]);
  return (
    <div>
      <span className="mx-2">
        <i className="fa fa-clock" />
        {dateTime.time}
      </span>
      <span className="mx-2">
        <i className="fa fa-calendar " />
        {dateTime.date}
      </span>
    </div>
  );
}

export default DateTime;
