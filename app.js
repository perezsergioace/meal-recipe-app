const getMealBtn = document.getElementById('get-meal')
const mealContainer = document.getElementById('meal')

getMealBtn.addEventListener('click', async () => {
	const base = 'https://www.themealdb.com/api/json/v1/1/random.php'
	const response = await fetch(base)
	const data = await response.json()

	createMeal(data.meals[0])
})

const createMeal = (meal) => {
	const ingredients = []
	for (i = 1; i <= 20; i++) {
		if (meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		} else {
			break
		}
	}

	console.log(ingredients)

	mealContainer.innerHTML = `
        <div class="row">
            <div class="column five">
                <img src="${meal.strMealThumb}" alt="Meal Image" />
                <p><strong>Category:</strong> ${meal.strCategory}</p>
                <p><strong>Area:</strong> ${meal.strArea}</p>
                <p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>
                <h5>Ingredients</h5>
                <ul>
                    ${ingredients
						.map(
							(ingredient) => `
                        <li>${ingredient}</li>
                    `
						)
						.join('')}
                </ul>
            </div>
            <div class="column seven">
                <h4>${meal.strMeal}</h4>
                <p>${meal.strInstructions}</p>
        </div>
        <div class="row">
             <h5>Video Recipe</h5>               
             <div class="videoWrapper">
                  <iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"/>
             </div>
        </div>
    `
}
