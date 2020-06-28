import React from "react";
import "./Dashboard.css";
import UserInfo from "../UserInfo/UserInfo";
import GenreSelect from "../GenreSelect/GenreSelect";
import Recommended from "../Recommended/Recommened";
import { connect } from "react-redux";

function Dashboard(props) {
  return (
    <main className="user-dashboard">
      {props.loadUserDash ? (
        <>
          <UserInfo user={props.userInfo} genres={props.genres} />
          <Recommended />
        </>
      ) : (
        <GenreSelect />
      )}
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    loadUserDash: state.user.loadUserDash,
    userInfo: state.user.userInfo,
    genres: state.user.selectedGenres,
  };
};

export default connect(mapStateToProps, {})(Dashboard);
