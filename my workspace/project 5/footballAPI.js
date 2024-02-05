const APIKEY = 'af7ad7b547a04d12830025532398916d';
const defaultUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`;
const newsArticleDiv = document.querySelector('#newsArticleDiv');

async function fetchNews(generatedUrl = defaultUrl) {
  const data = await fetch(generatedUrl);
  const response = await data.json();
  console.log(response.articles);
  response.articles.forEach(article => {
    function switchTime(value) {
      if (value.slice(0, 2) >= 12) return `${value} pm`;
      if (value.slice(0, 2) < 12) return `${value} am`;
    }

    if (article.url && article.description && article.author && article.source.name !== null) {
      let generatedHtml = "";
      generatedHtml += `<div class="parent-news-div">
      <div class="child-news-div">
      <img src="${article.urlToImage}" class="cover-image">
      <h2 class="news-title">
      ${article.title}
      </h2>
      </div> 
      <div class="child-news-div-two">  
      <p class="news-description">
      ${article.description}<br>
      <a href="${article.url}" target="_blank" class="link-to-full-post" title="${article.source.name}">
      Read more
      </a>
      </p>
      </div> 
      <div class="child-news-div-three">
      <h4 class="news-source">
      Source: ${article.source.name}
      </h4>
      <p class="date-published">
      Date Published: ${article.publishedAt.slice(0, 10)} ${switchTime(article.publishedAt.slice(11, 16))}
      </p>
      </div>     
      </div>`;
      newsArticleDiv.innerHTML += generatedHtml;
    }

  });
}

function fetchNewsByCategory(category) {
  return `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${APIKEY}`;
}


const searchCloseBtn = document.querySelector('#search-close-btn');
function toggleSearchBtn() {
  const search = document.querySelector('#search');
  if (search.classList.contains("hide")) {
    search.classList.remove("hide");
    searchCloseBtn.src = "images/close.png";
  } else {
    search.classList.add("hide");
    searchCloseBtn.src = "images/search.png";
  }
};
searchCloseBtn.addEventListener('click', toggleSearchBtn);



function getNewsBySearch(input) {
  return `https://newsapi.org/v2/everything?q=${input}&language=en&sortBy=publishedAt&apiKey=${APIKEY}`;
}

const searchBar = document.querySelector('#search');
searchBar.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    let inputValue = this.value;
    fetchNews(getNewsBySearch(inputValue));
  }
})
