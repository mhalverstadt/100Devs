//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://zoo-animal-api.herokuapp.com/animals/rand'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.image_link
        document.querySelector('.name').innerText = `Name: ${data.name}`
        document.querySelector('.latinName').innerText = `Latin Name: ${data.latin_name}`
        document.querySelector('.lifespan').innerText = `Lifespane: ${data.lifespan} years`
        document.querySelector('.diet').innerText = `Diet: ${data.diet}`
        document.querySelector('.geoRange').innerText = `Geographic Range: ${data.geo_range}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

