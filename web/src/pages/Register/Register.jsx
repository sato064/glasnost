import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">グラスノチ</h3>
          <span className="logoDesc"> 教科"情報"向け情報共有サービス</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="loginMsg">新規登録はこちら</p>
            <input type="text" className="loginInput" placeholder="ユーザ名" />
            <input type="text" className="loginInput" placeholder="email" />
            <input
              type="text"
              className="loginInput"
              placeholder="パスワード"
            />
            <input
              type="text"
              className="loginInput"
              placeholder="パスワード確認用"
            />
            <button className="loginButton">アカウント作成</button>
            <button className="loginRegisterButton">ログイン</button>
          </div>
        </div>
      </div>
    </div>
  );
}
