import HomePage from "./components/HomePage";
import "./App.css";
import Context from "./context/Context";
import Stopwatch from "./components/Stopwatch";
import SportsWatch from "./components/SportsWatch";
import Todolist from "./components/Todolist";
import Example from "./components/Example";
function App() {
  return (
    <>
      <Context>
        {/* <HomePage /> */}
        {/* <Stopwatch/> */}
        {/* <SportsWatch/> */}
        {/* <Todolist/> */}
        <Example/>
      </Context>
    </>
  );
}

export default App;
