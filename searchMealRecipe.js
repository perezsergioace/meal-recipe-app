const searchMealRecipe = async (meal) => {
	const base = ''
	const query = `${meal}`

	const response = await fetch(base + query)
	const data = await response.json()

	console.log(data.meals)
}

searchMealRecipe('pizza')
