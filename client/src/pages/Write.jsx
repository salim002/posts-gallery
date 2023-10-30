import React, {useState} from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import moment from "moment";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const navigate = useNavigate();

  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || "");
  // console.log(value);
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  // const upload = async ()=>{
  //   try{
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     const res = await axios.post("/upload", formData);
  //     // console.log(res.data);
  //     return res.data;
  //   } catch(error){
  //     console.log(error);
  //   }
  // }

  const handleClick = async (e)=>{
    e.preventDefault();
    if(!state && !file){
      alert("Please select an image to upload with your post.");
    }
    else{
      const formdata = new FormData();
      formdata.append("title", title);
      formdata.append("desc", value);
      formdata.append("cat", cat);
      formdata.append("file", file);
      formdata.append("img", state?state.img:"");
      if(!state){
        formdata.append("date", moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"));
      }
      try{
        state ? await axios.put(`https://posts-gallery-mdsalim.onrender.com/api/posts/${state.id}`, formdata, {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
          })
        : await axios.post(`https://posts-gallery-mdsalim.onrender.com/api/posts/`, formdata, {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
          })
        navigate("/");
      } catch(error){
        console.log(error);
      }
    }
  }

  return (
    <div className="add">
      <div className="content">
        <input type="text" value={title} placeholder="Title" onChange={e=>setTitle(e.target.value)} />
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="upload-and-post">
          <input style={{display: "none"}} type="file" id="file" name="" onChange={e=>setFile(e.target.files[0])} />
          <label className="file" htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button onClick={handleClick}>{state?"Update":"Add"}</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" checked={cat==="art"} name="cat" value="art" id="art" onChange={e=>setCat(e.target.value)} />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat==="science"} name="cat" value="science" id="science" onChange={e=>setCat(e.target.value)} />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat==="technology"} name="cat" value="technology" id="technology" onChange={e=>setCat(e.target.value)} />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat==="cinema"} name="cat" value="cinema" id="cinema" onChange={e=>setCat(e.target.value)} />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat==="design"} name="cat" value="design" id="design" onChange={e=>setCat(e.target.value)} />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat==="food"} name="cat" value="food" id="food" onChange={e=>setCat(e.target.value)} />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write