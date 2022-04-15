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

          for(const property in obj){
            //Creating an li of Name and adding it to the DOM. Adding class of name
            let li = document.createElement('li')
            li.textContent = obj.name
            document.querySelector('.nameOfBrewery').appendChild(li)
            li.classList.add('name')
            //Create a new ul and appending it to the li of name, adding class of website
            let ul = document.createElement('ul')
            document.querySelector('.name').appendChild(ul)
            ul.classList.add('website')
            //New li
            let li1 = document.createElement('li')
            li1.textContent = obj.website_url
            document.querySelector('.website').appendChild(li1)    
          }

        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

