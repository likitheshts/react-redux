import React from "react";
import { useDispatch, useSelector } from "react-redux";
import buyCake from "../Redux/Cakes/CakeActions";

const HooksCakeContainer = () => {
  const cakeStore = useSelector((store) => store.cake.noOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      CakeContainer
      <h1>Number of cakes : {cakeStore}</h1>
      <button onClick={dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
