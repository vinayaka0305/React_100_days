import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hello from "./components/01_Hello/Hello";
import Sports from "./components/02_static_sports/Sports";
import Food from "./components/03_static_food/Food";
import Toggle from "./components/04_toggle_text/Toggle";
import Counter from "./components/05_counter_app/Counter";
import ShoppingLIst from "./components/06_shoppingList/ShoppingLIst";
import CreateShapes from "./components/07_create_shapes/CreateShapes";
import Example from "./components/example/Example";
import Double from "./components/08_double_counter/Double";
import SlidShow from "./components/09_slide_show/SlidShow";
import Action from "./components/10_button_action/Action";
import "./App.css";
import List from "./components/11_coutriesList/List";
import ConditionalRender from "./components/12_rendering_list/ConditionalRender";
import Nav from "./components/13_nav/Nav";
import Split from "./components/14_splitting_component/Split";
import Rating from "./components/15_teachers_rating/Rating";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Hello/> */}
      {/* <Sports/> */}
      {/* <Food/> */}
      {/* <Toggle/> */}
      {/* <Counter/> */}
      {/* <ShoppingLIst/> */}
      {/* <CreateShapes/> */}
      {/* <Example/> */}
      {/* <Double/> */}
      {/* <SlidShow/> */}
      {/* <Action/> */}
      {/* <List/> */}
      {/* <ConditionalRender/> */}
      {/* <Nav firstLink="Home" secondLink="profile" thirdLink="About Us" /> */}
      {/* <Split/> */}
      <Rating/>
    </>
  );
}

export default App;
