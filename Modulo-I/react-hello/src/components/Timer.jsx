import { useEffect, useState } from "react";

import "./Timer.css";

export default function Timer() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((currentValue) => currentValue + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="timer-container">
      <span>{value}</span>
    </div>
  );
}
