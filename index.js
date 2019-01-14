const getDataPromise = () => {
  fetch("https://swapi.co/api/people")
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data.results)
    })
}

const getDataAsync = async () => {
  const response = await fetch("https://swapi.co/api/people")
  const data = await response.json()
  console.log(data.results)
}

getDataAsync()
getDataPromise()
