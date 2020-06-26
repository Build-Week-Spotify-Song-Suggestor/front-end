import React from "react";
import "./Dashboard.css";
import UserInfo from "../UserInfo/UserInfo";
import GenreSelect from "../GenreSelect/GenreSelect";

function Dashboard() {
  return (
    <main className="user-dashboard">
      <GenreSelect />
    </main>
  );
}

export default Dashboard;
