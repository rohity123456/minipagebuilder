import React from "react";
import { DroppableArea, Sidebar } from "../../components";
import "./home.css";
function Home() {
  return (
    <div className="home">
      <DroppableArea />
      <Sidebar />
    </div>
  );
}

export default Home;
