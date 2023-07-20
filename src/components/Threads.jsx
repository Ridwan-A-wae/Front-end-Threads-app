import React, { useState } from "react";
import "./threads.css";
import data from "../data/data";

function Threads() {
  const [likes, setLikes] = useState(
    data.map((item) => ({ id: item.id, like: false }))
  );

  const [comments, setComments] = useState(
    data.map((item) => ({
      id: item.id,
      ments: false,
    }))
  );

  const clickHeart = (id) => {
    setLikes((prevLikes) =>
      prevLikes.map((item) => {
        if (item.id === id) {
          return { ...item, like: !item.like };
        }
        return item;
      })
    );
  };

  const clickMent = (id) => {
    setComments((prevMents) =>
      prevMents.map((item) => {
        if (item.id === id) {
          return { ...item, ments: !item.ments };
        }
        return item;
      })
    );
  };

  return (
    <div className="threads">
      <div>
        {data.map((item) => (
          <div key={item.id} className="headtheads">
            <img
              className="iconthreads"
              src="../../src/assets/profile.png"
              alt="logo"
            />
            <div className="post">
              <h1 className="name">{item.username}</h1>
              <p className="comment">{item.post}</p>

              {/* Like */}
              <div className="icons">
                <p onClick={() => clickHeart(item.id)}>
                  {likes.find((like) => like.id === item.id)?.like ? (
                    <i
                      style={{ color: "red" }}
                      className="bi bi-heart-fill"
                    ></i>
                  ) : (
                    <i className="bi bi-heart"></i>
                  )}
                </p>

                {/* Comments */}
                <p onClick={() => clickMent(item.id)}>
                  <i className="bi bi-chat"></i>
                </p>

                <p>
                  <i className="bi bi-arrow-repeat"></i>
                </p>
                <p>
                  <i className="bi bi-send-fill"></i>
                </p>
              </div>

              {/* Input */}

              <div className="commentsinput">
                {comments.find((ment) => ment.id === item.id)?.ments ? (
                  <>
                    <input
                      placeholder="แสดงความคิดเห็น"
                      style={{ fontSize: "18px", width: "78%", height: "50px" }}
                      className="form-control"
                    />
                    <button
                      style={{
                        fontSize: "18px",
                        width: "20%",
                        height: "50px",
                        marginBottom: "12px",
                      }}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </>
                ) : null}
              </div>

              <div className="likesfoot">
                <p className="likes">
                  {" "}
                  {likes.find((like) => like.id === item.id)?.like
                    ? "1 Likes"
                    : "0 Likes"}{" "}
                </p>
                <p className="times">{item.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Threads;
