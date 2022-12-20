//created a nav-feature to allow for sleek scroll 
// let nav = document.querySelector('nav');

//       window.addEventListener('scroll', function () {
//         if (window.pageYOffset > 100) {
//           nav.classList.add('bg-dark', 'shadow');
//         } else {
//           nav.classList.remove('bg-dark', 'shadow');
//         }
//       });

//      const button = document.getElementById('button')
//      const bodyContent = document.getElementById('lds-roller')
//      const dataInput = document.getElementsBy
const baseUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5c6898b87a119919b82f3da7cb07bc46&page=1'
const imagePath = 'https://image.tmdb.org/t/p/w1280/';
const searchAPI = "https://api.themoviedb.org/3/search/movie?api_key=5c6898b87a119919b82f3da7cb07bc46&query="

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

// here we getting the movies
getMovies(baseUrl)
async function getMovies(url){
const res = await fetch (url)
const data = await res.json()
console.log(data.results)
}
function displayMovies(movies){
main.innerHTML = ''
movies.forEach((movie) => { 
  
});
}
form.addEventListener('submit',(e) =>{
  e.preventDefault()
  const searchValue = search.value 
  if(searchValue && searchValue !== ''){
    getMovies(searchAPI+searchValue)
    searchValue=''
  }else{
    window.location.reload
  }
} )