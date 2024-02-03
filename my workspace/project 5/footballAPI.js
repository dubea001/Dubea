// new api key below
const APIKEY = 'af7ad7b547a04d12830025532398916d';
//const newsUrl = `https://newsapi.org/v2/everything?q=Apple&from=2024-02-03&sortBy=popularity&apiKey=${APIKEY}`;
const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`;

async function fetchNews() {
  const data = await fetch(newsUrl);
  const response = await data.json();
  response.articles.forEach(article => {
    const author = article.author;
    const content = article.content;
    if (author && content !== null) {
      console.log(article.author);
      console.log(article.content);
    }
  });
}

// fetchNews();
const search = document.querySelector('#search');
const searchCloseBtn = document.querySelector('#search-close-btn');

function toggleSearchBtn() {
  if (search.classList.contains("hide")) {
    search.classList.remove("hide");
    searchCloseBtn.src = "images/close.png";
  } else {
    search.classList.add("hide");
    searchCloseBtn.src = "images/search.png";
  }
};

searchCloseBtn.addEventListener('click', toggleSearchBtn);

