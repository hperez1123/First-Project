const iURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i="

const button = document.querySelector("button");
const input = document.querySelector("#input");
const list = document.querySelector(".list")

const iRecipe = (recipe) => {
  list.innerHTML = ''
  let info = document.createElement('div')
  info.innerHTML = `<h2>Meal: ${recipe.strMeal}</h2>`
  list.append(info)
}


button.addEventListener('click', async (e) => {
  e.preventDefault();
  const meal = input.value
  const response = await axios.get(`${iURL}${meal}`)
  iRecipe(response.data);
  console.log(response.data.meals[1].strMeal)
  list.innerHTML = ''
  let info = document.createElement('div')
  info.innerHTML = `<h2>Meal: ${response.data.meals[1].strMeal}</h2>`
});
