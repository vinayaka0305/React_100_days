import React, { useContext } from "react";
import UseEffectHook from "./hooks/UseEffectHook";
import { ContextProvider } from "../context/Context";
import UseReducerHook from "./hooks/UseReducerHook";
import UseReduerExample from "./hooks/UseReduerExample";
import UseRefHook from "./hooks/UseRefHook";
import UseMemoHook from "./hooks/UseMemoHook";
import UseCallHook from "./hooks/UseCallHook";
import UseFetch from "./hooks/UseFetch";

const HomePage = () => {
  const name = useContext(ContextProvider);
  const url = `https://jsonplaceholder.typicode.com/users`
  const data = UseFetch(url);

  return (
    <>
      <h1>{name}</h1>
      {/* <UseEffectHook /> */}
      {/* <UseReducerHook/> */}
      {/* <UseReduerExample/> */}
      {/* <UseRefHook/> */}
      {/* <UseMemoHook/> */}
      {/* <UseCallHook/> */}
      {data?.map((user,id)=>(
        <li key={id}>{user.name}</li>
      ))}
    </>
  );
};

export default HomePage;
