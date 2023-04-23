import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [currentView, setCurrentView] = useState("SignUp");
  const [signedUp, setSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    setSignedUp(true);
    console.log("signed up")
  }

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log("logged in")
    navigate('/shop')
  }

  const changeView = (view) => {
    setCurrentView(view);
  };

  const currentViewComponent = () => {
    switch (currentView) {
      case "SignUp":
        return (
          <form>
            <h2>Create an Account</h2>
            <fieldset>
              <ul id="name">
                <li>
                  <label htmlFor="username">First Name</label>
                  <input type="text" id="input" required />
                </li>
                <li>
                  <label htmlFor="username">Last Name</label>
                  <input type="text" id="input" required />
                </li>
              </ul>
              <ul>
                <li>
                  <label htmlFor="username">Email</label>
                  <input type="text" id="input" required />
                </li>
                <li>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="input" required />
                </li>
              </ul>
            </fieldset>
            <button id="login" type='button' onClick={() => { handleSignUp(); changeView("logIn") }}>Sign up</button>
            <div>
              <hr></hr>
              <p id="signup">Already have an account? <a id="link" href="#" onClick={() => { changeView("logIn") }}>Log in</a></p>
            </div>
          </form>
        )
      case "logIn":
        return (
          <form>
            <h2>Welcome!</h2>
            <h1 id="intro">Log in to design a one-of-a-kind skateboard that reflects your individual style.</h1>
            <fieldset>
              <ul>
                <li>
                  <label htmlFor="username">Email</label>
                  <input type="text" id="input" required />
                </li>
                <li>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="input" required />
                </li>
              </ul>
            </fieldset>
            <button id="login" type='button' onClick={() => { handleLogin(); changeView("logIn") }}>Log in</button>
            <div>
              <hr></hr>
              <p id="signup">Don't have an account? <a id="link" href="#" onClick={() => { changeView("SignUp") }}>Sign up</a></p>
            </div>
          </form>
        )
      default:
        break
    }
  }

  return (
    <section id="login">
      {!isLoggedIn && (
        <div key={currentView} className="scroll-up-page">
          {currentViewComponent()}
        </div>
      )}
    </section>
  )
}

export default Login