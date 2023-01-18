import {
  Home,
  Notifications,
  Person,
  QuestionMark,
  Search,
  Settings,
  TipsAndUpdates,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sideberIcon" />
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <span className="sidebarListItemText">ホーム</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Search className="sideberIcon" />
            <span className="sidebarListItemText">検索</span>
          </li>
          <li className="sidebarListItem">
            <Notifications className="sideberIcon" />
            <span className="sidebarListItemText">通知</span>
          </li>
          <li className="sidebarListItem">
            <QuestionMark className="sideberIcon" />
            <span className="sidebarListItemText">質問</span>
          </li>
          <li className="sidebarListItem">
            <TipsAndUpdates className="sideberIcon" />
            <span className="sidebarListItemText">Tips</span>
          </li>
          <li className="sidebarListItem">
            <Link
              to="/profile/:username"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Person className="sideberIcon" />
              <span className="sidebarListItemText">プロフィール</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Settings className="sideberIcon" />
            <span className="sidebarListItemText">設定</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
