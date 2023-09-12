import React from 'react'

const Menu = () => {

    const posts = [
        {
          id: 1,
          title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quisquam ipsa! Aperiam possimus odit id iste nam, quos molestias voluptatem aut cumque a totam incidunt delectus sunt, vero accusantium autem.",
          img: "https://th.bing.com/th/id/OIP.anp0XQz24UeOEE5qf-5swQHaEo?w=296&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
        {
          id: 2,
          title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quisquam ipsa! Aperiam possimus odit id iste nam, quos molestias voluptatem aut cumque a totam incidunt delectus sunt, vero accusantium autem.",
          img: "https://th.bing.com/th/id/OIP.anp0XQz24UeOEE5qf-5swQHaEo?w=296&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
        {
          id: 3,
          title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quisquam ipsa! Aperiam possimus odit id iste nam, quos molestias voluptatem aut cumque a totam incidunt delectus sunt, vero accusantium autem.",
          img: "https://th.bing.com/th/id/OIP.anp0XQz24UeOEE5qf-5swQHaEo?w=296&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
        {
          id: 4,
          title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quisquam ipsa! Aperiam possimus odit id iste nam, quos molestias voluptatem aut cumque a totam incidunt delectus sunt, vero accusantium autem.",
          img: "https://th.bing.com/th/id/OIP.anp0XQz24UeOEE5qf-5swQHaEo?w=296&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
      ]

  return (
    <div className="menu">
        <h1>Other posts you may like</h1>
        {posts.map((post)=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu
