import React from "react";
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"

import Menu from "../components/Menu";

import {Link} from "react-router-dom";

export default function Single() {
  return (
    <div className="single">
      <div className="content">
        <img src="https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?w=295&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="img not found" />
        <div className="user">
          <img src="https://th.bing.com/th/id/OIGP.khT8WL0.eA6fWp7lzSJ5?w=232&h=232&c=6&o=5&dpr=1.3&pid=1.7" alt="img not found" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to="/write?edit=2">
              <img src={Edit} alt="img not found" />
            </Link>
            <Link>
              <img src={Delete} alt="img not found" />
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, est.</h1>
        <p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat laudantium voluptatum quos quam consequuntur quaerat sapiente ad. <br /> blanditiis distinctio non enim saepe optio a ipsa fuga velit culpa quasi sed hic delectus nemo! Pariatur deserunt nobis, possimus quam earum iusto quidem ipsa ratione, quis praesentium sit ea. Culpa unde voluptas ipsum ipsa autem dolorum ab deserunt incidunt officiis totam ratione quia eius iste tenetur laborum repudiandae. <br /> nostrum, hic libero obcaecati magnam odio dolores qui pariatur. Vitae expedita magnam eligendi sint suscipit nihil cupiditate tempora beatae facere mollitia, sapiente, cumque sunt labore modi laudantium quaerat atque? Reprehenderit assumenda mollitia ea.</p>
        </p>
      </div>
      <Menu/>
    </div>
  )
}
