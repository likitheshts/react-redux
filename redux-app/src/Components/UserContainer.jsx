import React, { useEffect } from "react";
import { fetchUsers } from "../Redux/User/UserActions";
import { connect } from "react-redux";

const UserContainer = ({ userData, fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, []);
  console.log(userData.loading);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>euserData.errorrr</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <h2>{user.name}</h2>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
