import axios from "axios";

export const fetchUserRequest = () => {
  return {
    type: "FETCH_USER_REQUEST",
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: "FETCH_USER_FAILURE",
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    setTimeout(() => {
      fetchUserDetails(dispatch);
    }, 2000);
  };
};

const fetchUserDetails = (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((users) => {
      const userData = users.data;
      dispatch(fetchUsersSuccess(userData));
    })
    .catch((error) => {
      const errorMessage = error.message;
      dispatch(fetchUsersFailure(errorMessage));
    });
};
