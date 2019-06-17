import React from 'react';
import ReactDOM from 'react-dom';

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-md-6 mh-100">
        <div className="align-middle">
          <p>Follow your interests.</p>
          <p>Hear what people are talking about.</p>
          <p>Join the conversation.</p>
        </div>
      </div>
      <div className="col-xs-12 col-md-6 mh-100">
        <div>
          <form>
            <input className="log-in username" type="text" placeholder="Username" />
            <input className="log-in password" type="password" placeholder="Password" />
            <button id="log-in-btn">Log in</button>
          </form>
        </div>
        <div>
        <div>image</div>
          <p>See what’s happening in</p>
          <p>the world right now</p>
          <p>Join Twitter today.</p>
          <form>
            <input className="sign-up username" type="text" placeholder="Username" />
            <input className="sign-up email" type="text" placeholder="Email" />
            <input className="sign-up password" type="password" placeholder="Password" />
            <button id="sign-up-btn" >Sign up</button>
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
