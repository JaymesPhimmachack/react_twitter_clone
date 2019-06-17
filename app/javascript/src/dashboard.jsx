import React from 'react';
import ReactDOM from 'react-dom';
//import { FaRandom } from 'react-icons/fa';


const Dashboard = () => (
  <div className="container">
    <nav  className="navbar navbar-expand-lg navbar-light bg-light">
  

    <ul  className="navbar-nav mr-auto">
      <li  className="nav-item active">
        <a  className="nav-link" href="#">Home <span  className="sr-only">(current)</span></a>
      </li>
      <li  className="nav-item">
        <a className="nav-link" href="#">Notifications</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Messages</a>
      </li>
    </ul>  
    <a className="navbar-brand" href="#">Twitter</a>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div>
      <a className="nav-link" href="#" id="username"></a>
      <a className="nav-link" href="#">Log Out</a>
    </div>
</nav>
    <div  className="row">
      <div  className="col-xs-12 col-md-4">
        <div className="mb-5 mt-3">
          <p>UserName1</p>
          <p>UserName1@example.com</p>
          <div className="tweet-status">
              <div className="d-inline-block mr-2">
                <p>Tweets</p>
                <p>0</p>
              </div>
              <div className="d-inline-block mr-2">
                <p>Following</p>
                <p>0</p>
              </div>
              <div className="d-inline-block">
                <p>Follower</p>
                <p>0</p>
              </div>
          </div>
        </div>
        <div>
          <p>Trends for you</p>
          <p>#Ruby</p>
          <p>#API</p>
          <p>#JavaScript</p>
          <p>#Fullstack</p>
        </div>
        <div>
      </div>

      
    </div> 
    <div  className="col-xs-12 col-md-8">
 
        <div className="mt-3">
          <div>
              <textarea className="w-80"></textarea>
              <a className="btn btn-primary">Tweet</a>
          </div>
           <div className="tweets">
               <div className="tweet">
                 <div><span className="username">UserName1</span><span className="email">UserName1@example.com</span></div>
                 <div><span className="post">Post 1</span><a>Delete</a></div>
               </div>
           </div>
        </div>
     
        </div>
      </div>
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard />,
    document.body.appendChild((document.createElement('div')))
  )
});
