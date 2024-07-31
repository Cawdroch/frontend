// Import modules

import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Create dashboard

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Tasks Dashboard</p>
      </section>
    </>
  );
};

//Export default module component

export default Dashboard;
