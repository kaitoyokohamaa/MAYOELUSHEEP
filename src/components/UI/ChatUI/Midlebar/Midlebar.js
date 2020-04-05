import React from "react";
import "./Midlebar.css";
import user from "../../../../assets/img/11.jpg";
const Midlebar = () => (
  <React.Fragment>
    <div className="MidleContainer">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "20px", color: "#ed4f81" }}>
          メッセージ途中のユーザ
        </h1>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            marginTop: "30px"
          }}
        >
          <div
            style={{
              width: "35%",
              borderRadius: "50%",
              marginRight: "15px"
            }}
          >
            <img src={user} />
          </div>
          <div style={{ paddingTop: "20px" }}>
            <h4 style={{ fontSize: "20px" }}>久美子</h4>
            <p style={{ fontSize: "14px", color: "gray" }}>画像は私です</p>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Midlebar;
