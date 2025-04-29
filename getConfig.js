const getConfig = (url) => {
  return fetch(url)
    .then(data => data.json())
    .then(jsonData => {
      const {type} = jsonData
      if (type === "master") {
        const nestedConfig = jsonData.configs[0].url
        return getConfig(nestedConfig)
      }

      return jsonData
    })
}

getConfig("https://raw.githubusercontent.com/alcazes/demojson/refs/heads/main/testmaster.json")
  .then( (json) => {
    console.log(json)
  })
