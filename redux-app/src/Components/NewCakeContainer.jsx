import React, { useState } from "react";
import buyCake from "../Redux/Cakes/CakeActions";
import { connect } from "react-redux";

const NewCakeContainer = (props) => {
  const [NumberOfCakes, setNumberOfCakes] = useState(1);
  return (
    <div>
      CakeContainer
      <h1>Number of cakes : {props.noOfCakes}</h1>
      <input
        type="text"
        value={NumberOfCakes}
        onChange={(e) => setNumberOfCakes(e.target.value)}
      />
      <button onClick={props.buyCake(NumberOfCakes)}>
        Buy {NumberOfCakes} Cakes
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
