const getRandomMeal = async () => {
	const query = 'https://www.themealdb.com/api/json/v1/1/random.php'

	const response = await fetch(query)
	const data = await response.json()

	console.log(data.meals[0])
}

getRandomMeal()
