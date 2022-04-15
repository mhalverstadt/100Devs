//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const searchRegExp = /\s/g;
  const replaceWith = '_';
  const choice = document.querySelector('input').value.toLowerCase().replace(searchRegExp,replaceWith)
  const url = `https://api.openbrewerydb.org/breweries?by_postal=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        data.forEach(obj => {
          console.log(obj.name)

          //Created an li for the names of the breweries and appended them to a ul
          let li = document.createElement('li')
          li.textContent = obj.name
          document.querySelector('.nameOfBrewery').appendChild(li)
          li.classList.add('name')
          //append ul to li
          let ul = document.createElement('ul')
          document.querySelector('.name').appendChild(ul)
          ul.classList.add('info')
          
          let span = document.createElement('span')
          for (let i = 0; i <= data.length; i++){
            let website = obj[i].website_url
            span.textContent = website
            document.querySelector('.info').appendChild(span)
          }
      })
      .catch(err => {
          console.log(`error ${err}`)
      })
  })
}

