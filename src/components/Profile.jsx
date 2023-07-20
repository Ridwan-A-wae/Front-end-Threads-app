import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <div className="profilecon">
        <div className="profilenav">
          <div>
            <h1 className="headname">Ridwan A-wae</h1>
            <div className="ridwansalafi">
              <p className="secondname">ridwan_salafi</p>
              <button className="btnthreads">threads.net</button>
            </div>
          </div>
          <img
            className="profileimg"
            src="../../public/images/profile.png"
            alt=""
          />
        </div>
      </div>
      <div className="footer">
        <p className="follower">561,230 followers</p>
        <div className="more">
          <a target="_blank" href="https://www.instagram.com/ridwan_salafi">
            {" "}
            <img
              className="ig"
              src="../../public/images/igw.png"
              alt="instragram"
            />
          </a>
          <a target="_blank" href="https://github.com/Ridwan-A-wae">
            <img
              className="threedot"
              src="../../public/images/dotw.png"
              alt="..."
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
