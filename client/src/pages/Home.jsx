import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [flag, setFlag] = useState(false);

  const location = useLocation();
  const cat = location.search;
  // console.log(cat);

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`https://posts-gallery-mdsalim.onrender.com/api/posts${cat}`)
        setPosts(res.data);
        res.data.length===0 ? setFlag(true) : setFlag(false);
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
    const str = doc.body.textContent;
    if(str.length<=130){
      return str;
    }
    return str.slice(0, 120)+"...";
  }

  return (
    <div className="home">
      <div className="posts">
      {!flag && posts.length===0 && <div style={{margin: "0 auto", fontSize: "40px", height: "400px"}} >Loading data from server... Please Wait.</div>}
      {flag && <div style={{margin: "0 auto", fontSize: "40px", height: "400px"}} >No Posts Found :(</div>}
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img && `https://posts-gallery-mdsalim.onrender.com/${post.img}`} alt="post img not found" />
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
        {posts.length===1 && <div style={{height: "5px"}}></div>}
      </div>
    </div>
  );
}
