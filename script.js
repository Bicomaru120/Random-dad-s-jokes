const API_KEY = "MO5o3DbSktjjVXYuuZKXl4l1HGDX8AtQvzAkQnmr";


const joke = document.getElementById('joke');

const options = {
  method: 'GET',
  headers: {
  "X-Api-Key": API_KEY,
  },
};
const apiurl = "https://api.api-ninjas.com/v1/dadjokes";


const btn = document.getElementById('btn');


async function getJoke(){
 try { 
   btn.innerText = 'Loading...';
   joke.innerText = 'Updating....'
   btn.disable = true;
   const response = await fetch(apiurl, options);
  const data = await response.json();
  joke.innerText = data[0].joke;
  btn.innerText = 'Click to generate jokes';
   btn.disable = false;
  }
  catch (e) {
    joke.innerText = 'Oops, an error occur, please try again later';
  }
  
}






btn.addEventListener('click', getJoke);