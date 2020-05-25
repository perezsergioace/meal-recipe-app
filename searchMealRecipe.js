const searchMealRecipe = async (meal) => {
	const base = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
	const query = `${meal}`

	try {
		const response = await fetch(base + query)

		if (!response.ok) {
			throw new Error(response.status)
		}
		const data = await response.json()
		console.log(data.meals[0])
	} catch (error) {
		console.log('Network Error, something is wrong here!')
		console.log(error)
	}
}

// searchMealRecipe('pizza')
