import React from 'react';
import ReactDOM from 'react-dom';

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-md-6">
        <div>
          <p>Follow your interests.</p>
          <p>Hear what people are talking about.</p>
          <p>Join the conversation.</p>
        </div>
      </div>
      <div className="col-xs-12 col-md-6">
        <div>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Sign in</button>
          </form>
        </div>
        <div>
        <div>image</div>
          <p>See what’s happening in</p>
          <p>the world right now</p>
          <p>Join Twitter today.</p>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="email" />
            <input type="password" placeholder="Password" />
            <button>Sign up</button>
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