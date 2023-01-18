import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./Timeline.css";

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        <Post />
        <Post />
      </div>
    </div>
  );
}
