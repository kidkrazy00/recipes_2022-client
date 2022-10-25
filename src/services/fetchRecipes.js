export function fetchRecipes() {
  let endpoint = 'recipes';

  return fetch(`${process.env.REACT_APP_API}` + endpoint)
    .then(data => data.json())
}