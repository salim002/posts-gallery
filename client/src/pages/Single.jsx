import React, {useState, useEffect, useContext} from "react";
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"

import Menu from "../components/Menu";
import {AuthContext} from "../context/authContext";

import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import moment from "moment";

export default function Single() {
  const navigate = useNavigate();

  const [post, setPost] = useState([]);
  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  const {currentUser} = useContext(AuthContext);

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`/posts/${postId}`)
        setPost(res.data);
      } catch(error){
        console.log(error);
      }
    }
    fetchData();
  }, [postId]);

  const handleDelete = async ()=>{
    try{
      await axios.delete(`/posts/${postId}`)
      navigate("/");
    } catch(error){
      console.log(error);
    }
  }


  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="img not found" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="img not found" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser && currentUser.username === post.username && 
            (<div className="edit">
              <Link to="/write?edit=2">
                <img src={Edit} alt="img not found" />
              </Link>
              <Link>
                <img onClick={handleDelete} src={Delete} alt="img not found" />
              </Link>
            </div>)
          }
        </div>
        <h1>{post.title}</h1>
          {post.desc}
      </div>
      <Menu/>
    </div>
  )
}
