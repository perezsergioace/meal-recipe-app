const getRandomMeal = async () => {
	const query = 'https://www.themealdb.com/api/json/v1/1/random.php'

	try {
		const response = await fetch(query)
		if (!response.ok) {
			throw new Error(response.status)
		}
		const data = await response.json()
		console.log(data.meals[0])
		// document.getElementById('data').innerHTML = data.meals[0].strMeal
	} catch (error) {
		console.log('Network Error, something is wrong here!')
		console.log(error)
	}
}

// getRandomMeal()
