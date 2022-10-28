import React from "react";
import Card from '../components/Card';
import { useNavigate } from "react-router-dom";

// layout
import Layout from '../layout/Layout';

const Dashboard = ({ user, isAuthenticated, isLoading }) => {
  let navigate = useNavigate();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Layout
      pageClass="dashboard"
      pageTitle="Dashboard"
      user={user}
      isAuthenticated={isAuthenticated}
    >
      <p>Hi there {user.nickname},</p>
      <p>welcome to the Family recipes app. Here you can find a collection of recipes contributed from other memebers of the family.</p>
      <p className="small">Contributed recipes held for review and will not appear immediately in the recipes list.</p>
      
      <hr />

      <div className='tiles'>
        <Card
          cardType='default'
          onClick={() => {navigate(`/recipes`)}}
          cardTitle='Recipes'
          cardContent={<p>Discover recipes contributed by others.</p>}
        />
        <Card
          cardType='default'
          onClick={() => {navigate(`/contribute`)}}
          cardTitle='Contribute'
          cardContent={<p>Got a recipe to share? Click here to post a recipe.</p>}
        />
      </div>
    </Layout>
  )
}

export default Dashboard;