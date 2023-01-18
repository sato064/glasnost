import React from "react";
import "./Login.css";

export default function login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">グラスノチ</h3>
          <span className="logoDesc"> 教科"情報"向け情報共有サービス</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="loginMsg">ログインはこちら</p>
            <input type="text" className="loginInput" placeholder="email" />
            <input
              type="text"
              className="loginInput"
              placeholder="パスワード"
            />
            <button className="loginButton">ログイン</button>
            <p className="registerText">または</p>
            <button className="loginRegisterButton">アカウント新規発行</button>
          </div>
        </div>
      </div>
    </div>
  );
}
