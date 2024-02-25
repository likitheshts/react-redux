const IceCreaminitialState = {
  noOfIceCream: 20,
};

const icecreamReducer = (state = IceCreaminitialState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - 1,
      };
    default:
      return state;
  }
};

export default icecreamReducer;
