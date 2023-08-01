import './App.css';
import React from 'react';
import { NavLink,useRoutes} from 'react-router-dom'
import routes from './routes';


function App() {
  const element = useRoutes(routes)
  function handleHomeClass({ isActive }) { 
    return isActive ? 'red' : 'yellow'
  }

  return (
    <div>
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header"><h2>React Router Demo</h2></div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          {/* <a className="list-group-item active" href="./about.html">About</a>
          <a className="list-group-item" href="./home.html">Home</a> */}
            <NavLink className={({ isActive }) => isActive ? 'red' : 'yellow'} to='/about'>我是about</NavLink>
            
            <NavLink className={handleHomeClass} to='/home'>我是home</NavLink>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
            <div className="panel-body">
              { element }
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
