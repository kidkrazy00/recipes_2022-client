import React from "react";
import PropTypes from "prop-types";
import TagButton from "./TagButton";

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
            disabled
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
            disabled
            required
          />
        </div>
      </fieldset>
      <TagButton
        buttonType="button"
        className="btn__next"
        type="button"
        title="Next"
        icon="true"
        disabled={
          name === '' ||
          email === '' ? 'disabled' : ''
        }
        onClick={nextStep}
      />
    </>
  )
}

UserDetials.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,

};

export default UserDetials;