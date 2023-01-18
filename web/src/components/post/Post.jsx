import { MoreVert } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Post.css";
import axios from "axios";

export default function Post({ post }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/users/${post.userId}`
      );
      console.log(response);
      setUser(response.data);
    };
    fetchUser();
  }, []);
  console.log(user);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={user.profilePicture}
              alt=""
              srcset=""
              className="postProfileImg"
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
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
