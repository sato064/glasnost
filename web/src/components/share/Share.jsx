import { Image } from "@mui/icons-material";
import React from "react";
import "./Share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
          <input
            type="text"
            placeholder="自由に投稿できます"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareButtons">
          <div className="shareOptions">
            <div className="shareOption">
              <Image className="shareIcon" />
              <span className="shareText">写真</span>
            </div>
          </div>
          <button className="shareButton">投稿</button>
        </div>
      </div>
    </div>
  );
}
