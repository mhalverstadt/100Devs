//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = `https://botw-compendium.herokuapp.com/api/v2/entry/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.data)
        document.querySelector('h2').innerText = data.data.name
        document.querySelector('h3').innerText = data.data.description
        document.querySelector('img').src = data.data.image


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

