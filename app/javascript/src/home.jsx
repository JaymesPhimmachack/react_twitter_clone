import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-md-6 communication mb-4">
        <div className="align-middle message">
          <p><FontAwesomeIcon icon={faSearch} /> Follow your interests.</p>
          <p><FontAwesomeIcon icon={faComment} /> Hear what people are talking about.</p>
          <p><FontAwesomeIcon icon={faUserFriends} /> Join the conversation.</p>
        </div>
      </div>
      <div className="col-xs-12 col-md-6 px-5 utility">
        <div>
        
          <form>
            <input className="log-in username d-block mb-2" type="text" placeholder="Username" />
            <input className="log-in password d-block mb-2" type="password" placeholder="Password" />
            <button id="log-in-btn" className="btn btn-primary">Log in</button>
          </form>
        </div>
        <div>
        <div className="mt-3 mb-3"><FontAwesomeIcon icon={faTwitter} size="3x" color="#1ea1f2" /></div>
          <p>See what’s happening in</p>
          <p>the world right now</p>
          <p>Join Twitter today.</p>
          <form>
            <input className="sign-up username d-block mb-2" type="text" placeholder="Username" />
            <input className="sign-up email d-block mb-2" type="text" placeholder="Email" />
            <input className="sign-up password d-block mb-2" type="password" placeholder="Password" />
            <button id="sign-up-btn" className=" btn btn-outline-primary" >Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div'))
  )
})
