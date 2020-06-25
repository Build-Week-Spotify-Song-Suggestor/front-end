import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <main className="user-dashboard">
      <section className="user-info">User Information</section>
      <section className="suggestions">
        Based on your selected genres suggestions will go here.
      </section>

      <section>Listen to a few songs to fill this space.</section>
    </main>
  );
}

export default Dashboard;
