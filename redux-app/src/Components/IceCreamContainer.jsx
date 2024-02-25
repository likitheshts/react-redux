import React from "react";
import buyIceCream from "../Redux/IceCream/IceCreamActions";
import { connect } from "react-redux";

const IceCreamContainer = (props) => {
  return (
    <div>
      CakeContainer
      <h1>Number of Ice Cream : {props.noOfIceCream}</h1>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    noOfIceCream: state.iceCream.noOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
