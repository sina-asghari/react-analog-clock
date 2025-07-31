import { useEffect, useState } from "react";
import "./style.css";

type AnalogClockProps = {
  size?: number;
  showNumbers?: boolean;
  centerDotColor?: string;
  hourColor?: string;
  minutesColor?: string;
  secondColor?: string;
  style?: React.CSSProperties;
  timezoneOffset?: number;
};
const AnalogClock: React.FC<AnalogClockProps> = ({
  size = 300,
  showNumbers = true,
  centerDotColor = "#ccc",
  hourColor = "#333",
  minutesColor = "#666",
  secondColor = "red",
  style = {},
  timezoneOffset = 0,
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const localTime = new Date(utc + timezoneOffset * 60000);
      setTime(localTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [timezoneOffset]);

  return (
    <div
      className="clock"
      style={{
        transform: `scale(${size / 200})`,
        transformOrigin: "top left",
        width: "200px",
        height: "200px",
        ...style,
      }}
    >
      <div
        className="dot"
        style={{
          backgroundColor: centerDotColor,
        }}
      ></div>
      <div className="hour twelve">{showNumbers ? 12 : ""}</div>
      <div className="hour one">{showNumbers ? 1 : ""}</div>
      <div className="hour two">{showNumbers ? 2 : ""}</div>
      <div className="hour three">{showNumbers ? 3 : ""}</div>
      <div className="hour four">{showNumbers ? 4 : ""}</div>
      <div className="hour five">{showNumbers ? 5 : ""}</div>
      <div className="hour six">{showNumbers ? 6 : ""}</div>
      <div className="hour seven">{showNumbers ? 7 : ""}</div>
      <div className="hour eight">{showNumbers ? 8 : ""}</div>
      <div className="hour nine">{showNumbers ? 9 : ""}</div>
      <div className="hour ten">{showNumbers ? 10 : ""}</div>
      <div className="hour eleven">{showNumbers ? 11 : ""}</div>
      <div
        className="hour-hand"
        style={{
          transform: `rotateZ(${
            (time.getHours() % 12) * 30 + time.getMinutes() * 0.5
          }deg)`,
          backgroundColor: hourColor,
        }}
      ></div>
      <div
        className="minute-hand"
        style={{
          transform: `rotateZ(${
            time.getMinutes() * 6 + time.getSeconds() * 0.1
          }deg)`,
          backgroundColor: minutesColor,
        }}
      ></div>
      <div
        className="second-hand"
        style={{
          transform: `rotateZ(${time.getSeconds() * 6}deg)`,
          backgroundColor: secondColor,
        }}
      ></div>
    </div>
  );
};

export default AnalogClock;
