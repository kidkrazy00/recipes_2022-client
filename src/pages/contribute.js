import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { dbRecipePost } from "../services/fetchContribute";
import UserDetails from "../components/UserDetails";
import RecipeDetails from "../components/RecipeDetails";
import Confirmation from "../components/Confirmation";

// layout
import Layout from '../layout/Layout'

const Contribute = (props, token) => {
  const [step, setStep] = useState(1);
  const [postData, setPostData] = useState();
  const [success, setSuccess] = useState(false);

  // form UserDetails
  const [name, setName] = useState(props.name || "");
  const [email, setEmail] = useState(props.email || "");
  // form RecipeDetails
  const [title, setTitle] = useState(props.title || "");
  const [category, setCategory] = useState(props.category || "");
  const [ingredients, setIngredients] = useState(props.ingredients || "");
  const [directions, setDirections] = useState(props.directions || "");
  // form additional message
  // const [message, setMessage] = useState(props.message || "");

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
            category={category}
            setCategory={setCategory}
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
            category={category}
            ingredients={ingredients}
            directions={directions}
            nextStep={nextStep}
            previousStep={previousStep}
          />
        )
      default:
    }
  }

  // when submit btn is clicked
  const onSubmit = (e) => {
    e.preventDefault();
    // convert category because we like lowercase
    let categoryResult = category.toLowerCase();
    dbRecipePost(name, email, title, categoryResult, ingredients, directions, setSuccess);
    // for testing uncomment next line
    // console.log('roundup: ', name, email, title, categoryResult, ingredients, directions)
    
    // const [response, loading, hasError] = useFetch("api/data")
  };
  
  if (success !== false) {
    return (
      <Layout
        pageClass="contribute"
        pageTitle="Awesome!"
        token={token}
      >
        <article className="response">
          <p>Your contribution is under review and will be added to our collection.</p>
          <p>Now Lets check out some<Link to={"/recipes/"} className="btn__text">recipes.</Link></p>
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