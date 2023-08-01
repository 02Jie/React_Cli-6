import React from "react";
import { NavLink ,Outlet} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className="list-group-item" to="news">
              News
            </NavLink>
          </li>
          <li>
            <NavLink className="list-group-item active" to="message">
              Message
            </NavLink>
          </li>
        </ul>
        <div>
            {/* 指定路由出现的位置  展现的内容就是上面写的to='news' 和 to='message'*/}
             <Outlet/>
        </div>
      </div>
    </div>
  );
}
