import React, { useState } from "react";
import { Link ,Outlet , useNavigate} from 'react-router-dom'

export default function Message() {
  const [message] = useState([
    { id: 1, title: "序列1", msg: "路飞" },
    { id: 2, title: "序列2", msg: "索隆" },
    { id: 3, title: "序列3", msg: "山治" },
    { id: 4, title: "序列4", msg: "娜美" },
  ]);
    const navigate = useNavigate()
    
    function goDetail(m) { 
        navigate('detail', {
            state: {
                id: m.id,
                title: m.title,
                msg: m.msg
            }
        })
    }
  return (
    <div>
      <ul>
              {
                  message.map(m => { 
                      return (
                          <li key={m.id}>
                              <Link to='detail' state={{ id: m.id, title: m.title, msg: m.msg }}>{m.title}</Link>
                              <button onClick={()=>goDetail(m)}>跳转详情</button>
                          </li>
                          
                      )
                  })
              }
          </ul>
          <Outlet/>
    </div>
  );
}
