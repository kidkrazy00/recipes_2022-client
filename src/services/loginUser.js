export const loginUser = async ({ username, password }) => {
  // console.log(username, password)
  if (username === `fam` && password === `welcome`) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
      .then(data => data.json())
  }
  return false
}