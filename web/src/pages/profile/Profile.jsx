import React from "react";
import "./Profile.css";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Timeline from "../../components/timeline/Timeline";

export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="">
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={PUBLIC_FOLDER + "/post/3.jpeg"}
                alt=""
                className="profileCoverImg"
              />
              <div className="profileUserImg">
                <img
                  src={PUBLIC_FOLDER + "/person/1.jpeg"}
                  alt=""
                  className="prifileUserImg"
                />
              </div>
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName"> sato064</h4>
              <span className="profileInfoDesc">TGU</span>
            </div>
          </div>
          <div className="profileRightButtom">
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
}
