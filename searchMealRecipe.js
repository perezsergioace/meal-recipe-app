const searchMealRecipe = async (meal) => {
	const base = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
	const query = `${meal}`

	const response = await fetch(base + query)
	const data = await response.json()

	console.log(data.meals[0])
}

// searchMealRecipe('pizza')
