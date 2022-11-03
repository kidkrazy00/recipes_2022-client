import React from "react";
import Card from '../components/Card';
import { useNavigate } from "react-router-dom";

// layout
import Layout from '../layout/Layout';

const Dashboard = ({ user, isAuthenticated, isLoading, data, dataCategories }) => {
  let navigate = useNavigate();

  const currentCount = (`<small> ${data.length} </small>`);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Layout
      pageClass="dashboard"
      pageTitle={'Dashboard'}
      user={user}
      isAuthenticated={isAuthenticated}
    >
      <p>Hey {user.nickname}, welcome back to the family recipes app. Here you can find a collection of recipes contributed from other memebers of the family.</p>
      <small>Contributed recipes held for review and will not appear immediately in the recipes list.</small>
      
      <hr />

      <div className='tiles'>
        <Card
          cardType='default'
          onClick={() => {navigate(`/recipes`)}}
          cardTitle={`Recipes (${data.length})`}
          cardContent={<p>Discover contributed recipes.</p>}
        />
        <Card
          cardType='default'
          onClick={() => {navigate(`/contribute`)}}
          cardTitle='Contribute'
          cardContent={<p>Got a recipe to share? Click here to post a recipe.</p>}
        />
      </div>
      {/* <div>total recipes contributed: {data.length}</div> */}
    </Layout>
  )
}

export default Dashboard;