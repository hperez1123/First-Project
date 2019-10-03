const cURL = "https://www.themealdb.com/api/json/v1/1/categories.php"
const rURL = "https://www.themealdb.com/api/json/v1/1/random.php"
const sURL = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const cbutton = document.querySelector("#cbutton");
const rbutton = document.querySelector('#rbutton')
const sbutton = document.querySelector('#sbutton')
const zinput = document.querySelector("#sinput")
const list = document.querySelector(".list")

const rRecipe = (rrecipe) => {
  console.log(rrecipe.meals)
  list.innerHTML = ''
  rrecipe.meals.map(meal => {
    let info = document.createElement('div')
    info.setAttribute('class', 'rdivvy')
    info.innerHTML = `<div class="rdivvy-child"><h2>${meal.strMeal}</h2> 
      <p>Region: ${meal.strArea}</p> 
      <p>Category: ${meal.strCategory}</p></div>
      <img src=${meal.strMealThumb}>
      <div class="rdivvy-child2"><p>${meal.strInstructions}</p> 
      <p><a href="${meal.strYoutube}">Come Cook Along!</a></p></div> `
    list.append(info)
  })
}

const cRecipe = (crecipe) => {
  console.log(crecipe.categories)
  list.innerHTML = ''
  crecipe.categories.map(category => {
    let info = document.createElement('div')
    info.setAttribute('class', 'cdivvy')
    info.innerHTML = `<div class="cdivvy-child"><h2>${category.strCategory}</h2>
    <p>${category.strCategoryDescription}</p></div>
    <img src=${category.strCategoryThumb}>`
    list.append(info)
  })
}

const sRecipe = (srecipe) => {
  console.log(srecipe.meals)
  list.innerHTML = ''
  srecipe.meals.map(meal => {
    let info = document.createElement('div')
    info.setAttribute('class', 'sdivvy')
    info.innerHTML = `<div class="sdivvy-child"><h2>${meal.strMeal}</h2>
    <p>Region: ${meal.strArea}<p> 
    <p>Category: ${meal.strCategory}</p></div>
    <img src=${meal.strMealThumb}> <p>${meal.strInstructions}</p>
    <p><a href="${meal.strYoutube}">Come Cook Along!</a></p></div>`
    list.append(info)
  })
}

cbutton.addEventListener('click', async (e) => {
  e.preventDefault();
  const response = await axios.get(`${cURL}`)
  cRecipe(response.data);
  console.log(response.data.categories[0].strCategory)
});

rbutton.addEventListener('click', async (e) => {
  e.preventDefault();
  const response = await axios.get(`${rURL}`)
  rRecipe(response.data);
  console.log(response.data.meals[0].strMeal)
});

sbutton.addEventListener('click', async (e) => {
  e.preventDefault();
  const meal = sinput.value
  const response = await axios.get(`${sURL}${meal}`)
  sRecipe(response.data);
  console.log(response.data.meals[0].strMeal)
});