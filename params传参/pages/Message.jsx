import React, { useState } from "react";
import { Link ,Outlet} from 'react-router-dom'

export default function Message() {
  const [message] = useState([
    { id: 1, title: "序列1", msg: "路飞" },
    { id: 2, title: "序列2", msg: "索隆" },
    { id: 3, title: "序列3", msg: "山治" },
    { id: 4, title: "序列4", msg: "娜美" },
  ]);

  return (
    <div>
      <ul>
              {
                  message.map(m => { 
                      return (
                          <li key={m.id}>
                              <Link to={`detail/${m.id}/${m.title}/${m.msg}`}>{ m.title}</Link>
                          </li>
                      )
                  })
              }
          </ul>
          <Outlet/>
    </div>
  );
}
