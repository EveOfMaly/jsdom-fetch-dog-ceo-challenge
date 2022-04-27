console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breedContainer = document.getElementById('dog-breeds');
let allBreeds = []


function fetchImage() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImage(json))
  }
  

  
  function renderImage(images) {
    const dogContainer = document.getElementById('dog-image-container');
    images.message.forEach(message => {
      const img = document.createElement('img');
      img.src = message
      dogContainer.appendChild(img);
    });
  }

  function fetchBreed() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(dogbreedjson => { 
      allBreeds = Object.keys(dogbreedjson.message)
      renderBreed(allBreeds)})
  }
  
  function renderBreed(breeds) {
    const breedContainer = document.getElementById('dog-breeds');
    breedContainer.innerHTML = ""

    //dump the cup out befire you fill it out.


    breeds.forEach(breed => {
      const li = document.createElement('li');
      li.className = "dog-breed"
      li.innerHTML = breed
      li.style.cursor = 'pointer';
      breedContainer.appendChild(li);
      li.addEventListener('click', changeFontColor)
    });
  }

function checkFilter() {
  let breedInput = document.getElementById('breed-dropdown');
  breedInput.addEventListener('change', (e) =>  {
  applyFilter(e)
  })
}

function applyFilter(e){
 let filterBreeds = allBreeds.filter(breed => breed[0] == e.target.value)
 renderBreed(filterBreeds);
}


function changeFontColor(event) {
  event.target.style.color = 'orange';
}


  document.addEventListener('DOMContentLoaded', () => {
    fetchImage();
    fetchBreed();
    checkFilter();
  });

  



  
  
  