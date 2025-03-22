import HomePage from "./components/HomePage";
import "./App.css";
import Context from "./context/Context";
import Stopwatch from "./components/Stopwatch";
import SportsWatch from "./components/SportsWatch";
import Todolist from "./components/Todolist";
import Example from "./components/Example";
import CompleteTheTask from "./components/CompleteTheTask";
function App() {
  return (
    <>
      <Context>
        {/* <HomePage /> */}
        {/* <Stopwatch/> */}
        {/* <SportsWatch/> */}
        {/* <Todolist/> */}
        <Example/>
        {/* <CompleteTheTask/> */}
      </Context>
    </>
  );
}

export default App;
