import React from "react";
import "./Home.css";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Timeline from "../../components/timeline/Timeline";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Timeline />
      </div>
    </>
  );
}
