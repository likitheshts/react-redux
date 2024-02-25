import { combineReducers } from "redux";
import cakeReducer from "./Cakes/CakeReducer";
import icecreamReducer from "./IceCream/IceCreamReducers";
import Userreducer from "./User/UserReducers";

const RootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
  user: Userreducer,
});
export default RootReducers;
