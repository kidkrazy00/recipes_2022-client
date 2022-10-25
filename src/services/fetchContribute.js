export const dbRecipePost = async (name, email, title, category, ingredients, directions, setSuccess) => {
  const data = {
    name: name,
    email: email,
    title: title,
    category: category,
    ingredients: ingredients,
    directions: directions
  }

  fetch('http://localhost:8080/contribute', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success', data);
      setSuccess()
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
  // console.log('fetch: ', name, email, title, category, ingredients, directions)
}

// import React, { useState, useEffect } from 'react';
// export const useFetch = fetching(url, opts) => {
//   const [response, setResponse] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [hasError, setHasError] = useState(false)
//   useEffect(() => {
//       setLoading(true)
//       fetch(url, opts)
//           .then((res) => {
//           setResponse(res.data)
//           setLoading(false)
//       })
//           .catch(() => {
//               setHasError(true)
//               setLoading(false)
//           })
//   }, [ url ])
//   return [ response, loading, hasError ]
// }