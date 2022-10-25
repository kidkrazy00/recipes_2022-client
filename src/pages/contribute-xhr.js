import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import UserDetails from "../components/UserDetails";
import RecipeDetails from "../components/RecipeDetails";
// import AdditionalDetails from "../components/AdditionalDetails";
import Confirmation from "../components/Confirmation";

// layout
import Layout from '../layout/Layout'

const Contribute = (props, token) => {
  // const [submit, setSubmit] = useState(false);
  const [step, setStep] = useState(1);
  const [emailStatus, setEmailStatus] = useState(false);

  // form UserDetails
  const [name, setName] = useState(props.name || "");
  const [email, setEmail] = useState(props.email || "");
  // form RecipeDetails
  const [title, setTitle] = useState(props.title || "");
  const [ingredients, setIngredients] = useState(props.ingredients || "");
  const [directions, setDirections] = useState(props.directions || "");
  // form additional message
  const [message, setMessage] = useState(props.message || "");


  // Run once on first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // proceed to the next step
  const nextStep = () => {
    setStep(step + 1);
  }
  // go back to previous step
  const previousStep = () => {
    setStep(step - 1);
  }

  const renderSwitch = (step) => {
    switch (step) {
      case 1:
        return (
          <UserDetails
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            nextStep={nextStep}
          />
        )
      case 2:
        return (
          <RecipeDetails
            title={title}
            setTitle={setTitle}
            ingredients={ingredients}
            setIngredients={setIngredients}
            directions={directions}
            setDirections={setDirections}
            nextStep={nextStep}
            previousStep={previousStep}
          />
        )
      case 3:
        return (
          <Confirmation
            name={name}
            email={email}
            title={title}
            ingredients={ingredients}
            directions={directions}
            message={message}
            nextStep={nextStep}
            previousStep={previousStep}
          />
        )
      default:
    }
  }

  // when submit btn is clicked
  const onSubmit = (ev) => {
    ev.preventDefault();

    // check field validation here
    // if (true === false) {
    //   return false;
    // }

    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener("load", () => {
      // update the response state and the step
      setEmailStatus(xhr.responseText);
    });

    // open the request with the verb and the url
    xhr.open(
      "GET",
      process.env.GATSBY_MAILER +
      "?sendto=" +
      email +
      "&name=" +
      name +
      "&title=" +
      title +
      "&ingredients=" +
      ingredients +
      "&directions=" +
      directions
    );

    // send the request
    xhr.send();

    // reset the fields
    // setName("");
    // setEmail("");
    // setTitle("");
    // setIngredients("");
    // setDirections("");
    // setMessage("");
  };
  // console.log('roundup: ', name, email, title, ingredients, directions, message)
  if (emailStatus !== false) {
    return (
      <Layout
        pageClass="contribute"
        pageTitle={emailStatus}
      >
        <article className="response">
          <p>Now Lets check out some<Link to={"/recipes/"} className="btn__text">recipes</Link>.</p>
        </article>
      </Layout>
    );
  }

  return (
    <Layout
      pageClass="contribute"
      pageTitle="Contribute"
      token={token}
    >
      <form id="contact-form" className="" onSubmit={onSubmit} method="POST">
        {
          renderSwitch(step)
        }
      </form>
    </Layout>
  )
};

export default Contribute;