import { MoreVert } from "@mui/icons-material";
import React from "react";
import "./Post.css";

export default function Post() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={PUBLIC_FOLDER + "/person/1.jpeg"}
              alt=""
              srcset=""
              className="postProfileImg"
            />
            <span className="postUsername">sato064</span>
            <span className="postDate">5分前</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">テストポスト</span>
          <img
            src={PUBLIC_FOLDER + "/post/1.jpeg"}
            alt=""
            srcset=""
            className="postImg"
          />
        </div>
        <div className="postButtom">
          <div className="postButtomLeft">
            <img
              src={PUBLIC_FOLDER + "/heart.png"}
              alt=""
              className="likeIcon"
            />
            <span className="postLikeCounter">5人がいいねしました</span>
          </div>
          <div className="postButtomRight">
            <span className="postCommentText">4件のコメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}
