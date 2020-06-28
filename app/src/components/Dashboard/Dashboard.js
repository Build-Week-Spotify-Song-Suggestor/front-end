import React from "react";
import "./Dashboard.css";
import UserInfo from "../UserInfo/UserInfo";
import GenreSelect from "../GenreSelect/GenreSelect";
import { connect } from "react-redux";

function Dashboard(props) {
  return (
    <main className="user-dashboard">
      {props.loadUserDash ? <div>Hi</div> : <GenreSelect />}
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    loadUserDash: state.user.loadUserDash,
  };
};

export default connect(mapStateToProps, {})(Dashboard);
