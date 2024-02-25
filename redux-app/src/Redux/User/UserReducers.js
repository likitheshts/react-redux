const UserinitalState = {
  loading: false,
  users: [],
  error: "",
};

const Userreducer = (state = UserinitalState, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return {
        loading: true,
        users: [],
        error: "",
      };
    case "FETCH_USER_SUCCESS":
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case "FETCH_USER_FAILURE":
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default Userreducer;
