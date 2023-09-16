import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const location = useLocation();
  const cat = location.search;
  // console.log(cat);

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`/posts${cat}`)
        setPosts(res.data);
      } catch(error){
        console.log(error);
      }
    }
    fetchData();
  }, [cat]);

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quisquam ipsa! Aperiam possimus odit id iste nam, quos molestias voluptatem aut cumque a totam incidunt delectus sunt, vero accusantium autem.",
  //     img: "https://th.bing.com/th/id/OIP.anp0XQz24UeOEE5qf-5swQHaEo?w=296&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quisquam ipsa! Aperiam possimus odit id iste nam, quos molestias voluptatem aut cumque a totam incidunt delectus sunt, vero accusantium autem.",
  //     img: "https://th.bing.com/th/id/OIP.anp0XQz24UeOEE5qf-5swQHaEo?w=296&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quisquam ipsa! Aperiam possimus odit id iste nam, quos molestias voluptatem aut cumque a totam incidunt delectus sunt, vero accusantium autem.",
  //     img: "https://th.bing.com/th/id/OIP.anp0XQz24UeOEE5qf-5swQHaEo?w=296&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quisquam ipsa! Aperiam possimus odit id iste nam, quos molestias voluptatem aut cumque a totam incidunt delectus sunt, vero accusantium autem.",
  //     img: "https://th.bing.com/th/id/OIP.anp0XQz24UeOEE5qf-5swQHaEo?w=296&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  //   },
  // ]

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  }

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img && `http://localhost:8800/${post.img}`} alt="post img not found" />
              {/* {console.log(post.img)} */}
            </div>
            <div className="content">
                {/* {console.log(post.id)} */}
                <h1>{post.title}</h1>
              <p>{getText(post.desc)}</p>
              <Link className="link" to={`/post/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
