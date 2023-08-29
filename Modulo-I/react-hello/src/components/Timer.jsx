import { useEffect, useState } from "react";

import "./Timer.css";

export default function Timer() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((currentValue) => currentValue + 1);
    }, 1000);
  }, []);

  return (
    <div className="timer-container">
      <span>{value}</span>
    </div>
  );
}
