import React, { useState } from "react";
import "./replies.css";

function Replies() {
  const [iamge, setImage] = useState(null);
  const [yourname, setYourname] = useState("");
  const [post, setPost] = useState("");
  const [preview, setPreview] = useState(null);

  const fileChange = (e) => {
    if (e && e.target) {
      const file = e.target.files[0];
      if (file) {
        setPreview(URL.createObjectURL(file));
      } else {
        setPreview(null);
      }
    }
  };

  const clearValue = (e) => {
    e.preventDefault();
    {
    setImage('');
    setYourname("");
    setPost("");
    setPreview(null)
    }
    };

  return (
    <div className="threads">
      <form>
        <div className="createcontainer">
          <div className="upload">
            <p className="Profile">Profile</p>
            <input
              className="form-control"
              type="file"
              onChange={fileChange}
              name="image"
              accept="image/jpeg"
              value={iamge}
              style={{
                borderRadius: "30px",
                padding: "1rem",
                backgroundColor: "white",
                color: "black",
                fontSize: "16px",
              }}
            />
          </div>
          {preview && <img
            style={{ objectFit: "contain", width: "80px", height: "80px",marginBottom:"-1rem" }}
            src={preview}
            alt="previewImage"
          />}
          <div className="post">
            <p className="Profile">Your name</p>
            <input
              onChange={(e) => setYourname(e.target.value)}
              value={yourname}
              style={{ fontSize: "18px", color: "#1e1e1e" }}
              className="form-control"
              type="text"
            />
            <div>
              <p className="Profile">Post</p>
              <textarea
                onChange={(e) => setPost(e.target.value)}
                value={post}
                style={{ fontSize: "16px", height: "80px", color: "#1e1e1e" }}
                className="form-control"
                placeholder="What's on your mind"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="conbtn">
          <button
            type="submit"
            style={{ width: "69%" }}
            className="btn btn-primary"
          >
            Submit
          </button>
          <button
            onClick={clearValue}
            style={{ width: "30%" }}
            className="btn btn-danger"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default Replies;
