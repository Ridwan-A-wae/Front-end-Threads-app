import React, { useState } from "react";
import "./replies.css";

function Replies() {
  const [iamge,setImage] = useState (null)
  const [yourname,setYourname] = useState('')
  const [post,setPost] = useState('')

  const clearValue = (e) => {
    e.preventDefault()
    setImage(null)
    setYourname('')
    setPost('')
  }
  return (
    <div className="threads">
      <form >
      <div className="createcontainer">
        <div className="upload">
          <p className="Profile"  >Profile</p>
          <input
            className="form-control"
            type="file"
            name="image"
            accept="image/jpeg"
            value={iamge}
            style={{
              borderRadius: "30px",
              padding: "1rem",
              backgroundColor:"white",
              color:"black",
              fontSize:"22px"              
              
            }}
          />
        </div>
        <div className='post'>
        <p className="Profile">Your name</p>
        <input onChange={(e)=> setYourname(e.target.value)} value={yourname} style={{fontSize:"24px",color:"#1e1e1e"}} className="form-control" type="text" />
        <div>
        <p className="Profile">Post</p>
        <textarea onChange={(e) => setPost(e.target.value)} value={post} style={{fontSize:"22px",height:"200px",color:"#1e1e1e"}} className="form-control" placeholder="What's on your mind" name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
      </div>
      <div className="conbtn">
      <button type="submit" style={{width:"69%"}} className="btn btn-primary" >Submit</button>
      <button onClick={clearValue}  style={{width:"30%"}} className="btn btn-danger" >Clear</button>
      </div>
      </form>
    </div>
  );
}

export default Replies;
