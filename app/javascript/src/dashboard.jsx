import React from 'react';
import ReactDOM from 'react-dom';
//import { FaRandom } from 'react-icons/fa';


const Dashboard = () => (
  <div className="container">
    <nav  className="navbar navbar-expand-lg navbar-light bg-light mb-5">
  

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
      <input className="form-control mr-sm-2 search" type="search" placeholder="Search Twitter" aria-label="Search" />
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
          <div className="user p-2">
          <p className="username">UserName1</p>
          <p className="screenName">@UserName1</p>
          </div>
          <div className="tweet-status p-2">
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
        <div className="p-2">
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
              <textarea className="w-100 post-input"></textarea>
              <div>
              <button className="btn btn-primary text-white" id="post-tweet-btn">Tweet</button> 
                <span className="post-char-counter"></span> characters
              </div>
              
          </div>
           <div className="tweets mt-5">
               <div className="tweet border border-light p-2">
                 <div><span className="username mr-5">UserName1</span><span className="screenName">@UserName1</span></div>
                 <div className="d-flex justify-content-between mt-3"><span className="post">Post 1</span><a className="delete-tweet">Delete Tweet</a></div>
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
