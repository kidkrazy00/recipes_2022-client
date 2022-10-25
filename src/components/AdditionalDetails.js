import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const AdditionalInfo = ({ previousStep, nextStep, message, setMessage }) => {

  return (
    <>
      <p>Anything else?</p>
      <fieldset>
        <div className="element">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={message === undefined || message === '' ? 'Message' : message}
            required
          />
        </div>
      </fieldset>
      <Button
        buttonType="button"
        cClass="btn__back"
        type="button"
        title="Previous"
        icon="true"
        click={previousStep}
      />

      <Button
        buttonType="button"
        cClass="btn__next"
        type="button"
        title="Next"
        icon="true"
        click={nextStep}
      />
    </>
  )
}

AdditionalInfo.propTypes = {
  message: PropTypes.string,
};

export default AdditionalInfo;