import React, { useState } from "react";
import PropTypes from 'prop-types';
import { loginUser } from "../services/loginUser";
import { useNavigate } from 'react-router-dom'
import Layout from "../layout/Layout"
import Brand from './Brand'
import Button from "./Button"

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token)
    
    if (token) {
      navigate(`dashboard/`)
    }
  }

  return (
    <Layout
      pageClass="login"
    >
      <form method="post">
        <Brand type='color' />
        <fieldset>
          {/* <legend> Family Recipies</legend> */}
          <div className="element">
            <label htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              autoComplete="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="element">
            <label htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              autoComplete="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
        </fieldset>
        <Button
          buttonType="button"
          cClass="btn__submit"
          type="submit"
          title="Log In"
          name="Log In"
          value="Log In"
          icon="true"
          click={(e) => handleSubmit(e)}
        />
      </form>
    </Layout>
  )
}

export default Login

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}