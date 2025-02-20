import React, { useContext, useState } from "react";
import SimpleIntrest from "./SimpleIntrest";
import Todolist from "./Todolist";
import LoginForm from "./LoginForm";
import Products from "./Products";
import UseEffectHook from "./hooks/UseEffectHook";
import UseRef from "./hooks/UseRef";
import UseReducer from "./hooks/UseReducer";
import UseMemo from "./hooks/UseMemo";
import UseCallback from "./hooks/UseCallback";
import { ContextApi } from "./context/ContextProvider";
import UseFetch from "./hooks/UseFetch";

const Home = () => {
  const [amount, setAmount] = useState(0);
  const [intrest, setIntrest] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);
  const { name } = useContext(ContextApi);

  const data = UseFetch(`https://jsonplaceholder.typicode.com/users`);

  const calIntrest = () => {
    const si = (amount * intrest * time) / 100;
    setResult(si);
  };

  return (
    // <>
    //   <h2>Simple Intrest CalCulator</h2>
    //     <SimpleIntrest name="Pricipal Amount" num={setAmount}/>
    //     <SimpleIntrest name="Intrest Rate (%)" num={setIntrest}/>
    //     <SimpleIntrest name="Time(years)" num={setTime}/>

    //     <div>
    //       <button onClick={calIntrest}>click</button>
    //       <h3>Simple Intreset: {result}</h3>
    //     </div>
    // </>
    <>
      {/* <StopWatch/> */}
      {/* <Todolist/> */}
      {/* <LoginForm/> */}
      {/* <Products/> */}
      {/* <UseEffectHook/> */}
      {/* <UseRef/> */}
      {/* <UseReducer/> */}
      {/* <UseMemo/> */}
      <h1>{name}</h1>
      {/* <UseCallback/> */}
      <div>{data.length>0 && data.map((user) => <li>{user.name}</li>)}</div>
    </>
  );
};

export default Home;
