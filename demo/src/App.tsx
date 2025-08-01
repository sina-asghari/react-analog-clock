import "./App.css";
import AnalogClock from "@sinaasghari/react-analog-clock";

function App() {
  return (
    <>
      <AnalogClock
        size={300}
        showNumbers={true}
        centerDotColor="#000"
        hourColor="#333"
        minutesColor="#555"
        secondColor="red"
        timezoneOffset={60}
      />
    </>
  );
}

export default App;
