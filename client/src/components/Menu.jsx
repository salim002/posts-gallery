import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Menu = ({cat}) => {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`https://posts-gallery-mdsalim.onrender.com/api/posts/?cat=${cat}`)
        setPosts(res.data);
      } catch(error){
        console.log(error);
      }
    }
    fetchData();
  }, [cat]);

    // const posts = [
    //     {
    //       id: 1,
    //       title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    //       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quisquam ipsa! Aperiam possimus odit id iste nam, quos molestias voluptatem aut cumque a totam incidunt delectus sunt, vero accusantium autem.",
    //       img: "https://th.bing.com/th/id/OIP.anp0XQz24UeOEE5qf-5swQHaEo?w=296&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    //     },
    //     {
    //       id: 2,
    //       title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    //       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quisquam ipsa! Aperiam possimus odit id iste nam, quos molestias voluptatem aut cumque a totam incidunt delectus sunt, vero accusantium autem.",
    //       img: "https://th.bing.com/th/id/OIP.anp0XQz24UeOEE5qf-5swQHaEo?w=296&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    //     },
    //     {
    //       id: 3,
    //       title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    //       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quisquam ipsa! Aperiam possimus odit id iste nam, quos molestias voluptatem aut cumque a totam incidunt delectus sunt, vero accusantium autem.",
    //       img: "https://th.bing.com/th/id/OIP.anp0XQz24UeOEE5qf-5swQHaEo?w=296&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    //     },
    //     {
    //       id: 4,
    //       title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    //       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quisquam ipsa! Aperiam possimus odit id iste nam, quos molestias voluptatem aut cumque a totam incidunt delectus sunt, vero accusantium autem.",
    //       img: "https://th.bing.com/th/id/OIP.anp0XQz24UeOEE5qf-5swQHaEo?w=296&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    //     },
    //   ]

  return (
    <div className="menu">
        <h1>Other posts you may like</h1>
        {posts.map((post)=>(
            <div className="post" key={post.id}>
                <img src={post.img && `https://posts-gallery-mdsalim.onrender.com/${post.img}`} alt="" />
                <h2>{post.title}</h2>
                <Link className="link" to={`/post/${post.id}`}>
                  <button>Read More</button>
              </Link>
            </div>
        ))}
    </div>
  )
}

export default Menu
