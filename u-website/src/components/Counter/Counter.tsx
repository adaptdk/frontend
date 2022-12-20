import { useEffect, useState } from "react";

export const Counter = () => {
  const [show, setShow] = useState(false);

  const myDate = new Date();
  const xmas = Date.parse("Dec 25, " + myDate.getFullYear());
  const today = Date.parse(myDate.toString());

  const daysToChristmas = Math.round((xmas - today) / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setShow((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        width: "fit-content",
        textAlign: "center",
        left: "40%",
        top: "40%",
        padding: "10px",
        backgroundColor: "rgb(255,255,255,0.5)",
      }}
    >
      <h1
        style={{
          color: "red",
          fontSize: "35px",
          textShadow: "10px 5px 7px #CE5937",
        }}
      >
        {show ? daysToChristmas + " days to Christmas!" : "EXCITED!???"}
      </h1>
    </div>
  );
};
