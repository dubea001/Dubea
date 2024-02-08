const APIKEY = 'af7ad7b547a04d12830025532398916d';
const defaultUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`;
const newsArticleDiv = document.querySelector('#newsArticleDiv');
const selectOptionDiv = document.querySelector('#selectOptionDiv');
// const displayCategoryHeader = document.querySelector('#displayCategoryHeader');
const countryArray = [
  { code: 'us', name: 'United States' },
  { code: 'ae', name: 'United Arab Emirates' },
  { code: 'au', name: 'Australia' },
  { code: 'br', name: 'Brazil' },
  { code: 'ca', name: 'Canada' },
  { code: 'ch', name: 'Switzerland' },
  { code: 'de', name: 'Germany' },
  { code: 'fr', name: 'France' },
  { code: 'gb', name: 'United Kingdom' },
  { code: 'kr', name: 'South Korea' },
  { code: 'ng', name: 'Nigeria' },
  { code: 'ru', name: 'Russia' },
  { code: 'sa', name: 'Saudi Arabia' },
  { code: 'ua', name: 'Ukraine' }
];

let selectHtml = '<option disabled selected>select a country</option>';
countryArray.forEach(item => {
  let html = `<option value="${item.code}">
  ${item.name}
  </option>`;
  selectHtml += html;
});
selectOptionDiv.innerHTML = selectHtml;

async function fetchNews(generatedUrl = defaultUrl) {
  newsArticleDiv.innerHTML = '';
  const data = await fetch(generatedUrl);
  const response = await data.json();
  response.articles.forEach(article => {
    function reversedDate(value) {
      const splitParts = value.split('-');
      const reversedDate = `${splitParts[2]}/${splitParts[1]}/${splitParts[0]}`
      return reversedDate;
    }

    if (article.url && article.description && article.author && article.source.name !== null) {
      let generatedHtml = "";
      generatedHtml += `<div class="cover-image" style="background-image: url(${article.urlToImage});">
      <div class="news-details">
      <h2 class="news-title">
      ${article.title}
      </h2> 
      <p class="news-description">
      ${article.description}
      <a href="${article.url}" target="_blank" class="link-to-full-post" title="${article.source.name}">
      Read more
      </a>
      </p>
      <div class="generated-div">
      <div class="author-div">
      <img src="images/author.png" class="author-image" title="author">
      ${article.author.toLowerCase()}
      </div>
      <div class="date-div">
      <img src="images/calender.png" class="date-image" title="date published">
      ${reversedDate(article.publishedAt.slice(0, 10))}
      </div>
      </div>
      </div> 
      </div>`;    
      newsArticleDiv.innerHTML += generatedHtml;
    }
  });
}

function fetchNewsByCategory(defaultCountry = 'us', category) {
  if (category !== undefined) return `https://newsapi.org/v2/top-headlines?country=${defaultCountry}&category=${category}&apiKey=${APIKEY}`;
  if (category === undefined) return `https://newsapi.org/v2/top-headlines?country=${defaultCountry}&apiKey=${APIKEY}`;
}

selectOptionDiv.addEventListener('change', (event) => {
  const optionUrl = `https://newsapi.org/v2/top-headlines?country=${event.target.value}&apiKey=${APIKEY}`;
  fetchNews(optionUrl);
});

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
  return `https://newsapi.org/v2/everything?q=${input}&language=en&searchIn=title&sortBy=publishedAt&apiKey=${APIKEY}`;
}

const searchBar = document.querySelector('#search');
searchBar.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const inputValue = searchBar.value;
    fetchNews(getNewsBySearch(inputValue));
    searchBar.value = '';
  }  
})

