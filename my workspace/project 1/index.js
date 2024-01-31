const input = document.querySelector('#input');
const searchBtn = document.querySelector('#submit');
const searchedWord = document.querySelector('#word');
const partOfSpeech = document.querySelector('#parts-of-speech');
const definitionDiv = document.querySelector('#definition-div');
const exampleDiv = document.querySelector('#example-div');
const antonymsParagragh = document.querySelector('#display-div');
const synonymsParagragh = document.querySelector('#display-div-2');
const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

let html = "";

async function getWord() {
  const data = await fetch(baseUrl + input.value);
  const response = await data.json();
  const result = response[0];
  const phonetics = result.phonetics;
  searchedWord.innerText = result.word;
  const resultObject = result.meanings[0];
  partOfSpeech.innerText = resultObject.partOfSpeech;
  const definitions = resultObject.definitions;
  const antonyms = resultObject.antonyms;
  const synonyms = resultObject.synonyms;
  definitionDiv.innerText = definitions[0].definition;
  console.log(result.meanings[0]);
  input.value = "";

  antonyms.forEach(item => {
    html += `<p>${item}</p>`;
    antonymsParagragh.innerHTML = `Antonyms- ${html}`;
  });
  synonyms.forEach(item1 => {
    html += `<p>${item1}</p>`;
    synonymsParagragh.innerHTML = `Synonyms- ${html}`;
  })

  if (definitions[0].example) {
    exampleDiv.innerText = `Example- ${definitions[0].example}`;
  } else {
    return;
  }
}

searchBtn.addEventListener('click', () => {
  if (input.value !== "") {
    getWord();
  } else {
    return;
  }
});

