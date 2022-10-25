import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const UserDetials = ({ nextStep, name, setName, email, setEmail }) => {

  return (
    <>
      <p>Contribute your recipe. Let's start with some basic info.</p>
      <fieldset>
        <div className="element">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={name === undefined || name === '' ? 'Name' : name}
            required
          />
        </div>
        <div className="element">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={email === undefined || email === '' ? 'Email' : email}
            required
          />
        </div>
      </fieldset>
      <Button
        buttonType="button"
        cClass="btn__next"
        type="button"
        title="Next"
        icon="true"
        disabled={
          name === '' ||
          email === '' ? 'disabled' : ''
        }
        click={nextStep}
      />
    </>
  )
}

UserDetials.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,

};

export default UserDetials;