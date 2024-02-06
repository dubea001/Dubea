async function getAnimals() {
  const inputValue = document.querySelector('#searchBox').value;
  const apiKey = 'TqXSQjjYmy8utguzHPQhrczrlr5afSgOO2xnEThP';
  const baseUrl = 'https://api.api-ninjas.com/v1/animals?name=' + inputValue;
  try {
    const data = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'content-type': 'application/json'
      }
    })
    if (!data.ok) throw new Error('Request Failed');
    const response = await data.json();
    function generateRandomNumber() {
      return Math.floor(Math.random() * response.length);
    }

    const questionSection = response[generateRandomNumber()];
    const correctAnswer = questionSection.name;
    const optionsToSelect = [];
    //  a for loop to generate 3 incorrect answer
    for (let index = 0; index < 3; index++) {
      const randomIndex = Math.floor(Math.random() * response.length);
      const incorrectOption = response[randomIndex].name;
      optionsToSelect.push(incorrectOption);
      response.splice(randomIndex, 1);
    }
    // push the correct answer inside the optionsToSelect array
    optionsToSelect.push(correctAnswer);
    // this function shuffles the answers [optionsToSelect] array everytime the function is called
    function shuffleOptions(options) {
      const shuffledArray = [...options];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    }
    const shuffledArray = shuffleOptions(optionsToSelect);
    // this function adds the option alphabet from A-D
    function addOptionsAlphabet(word) {
      let alphabet;
      if (word === 0) alphabet = 'A.';
      if (word === 1) alphabet = 'B.';
      if (word === 2) alphabet = 'C.';
      if (word === 3) alphabet = 'D.';
      return alphabet;
    }

    // looping through the shuffled array and display on page
    let generatedSection = '';
    shuffledArray.forEach((option, index) => {
      const generatedDiv = `<div>
        <h4>
        ${addOptionsAlphabet(index)}
        <button id="optionButton">
        ${option}
        </button>
        </h4>
        </div>`;
      generatedSection += generatedDiv;
    })
    document.querySelector('#optionsDiv').innerHTML = generatedSection;

    // specie name
    document.querySelector('#header').textContent = questionSection.name;


    let currentIndex = 0;
    function displayNextProperty() {
      const objectValue = getObjectValues();
      const keys = Object.keys(objectValue);
      const currentProperty = keys[currentIndex];
      const displayHint = document.querySelector('#displayHint');
      displayHint.innerHTML = `${currentProperty}: ${objectValue[currentProperty]}`
      currentIndex++;
      if (currentIndex >= keys.length) {
        currentIndex = 0;
      }
    }


    function getObjectValues() {
      return questionSection.characteristics;
    }
    document.querySelector('#useHint').addEventListener('click', displayNextProperty);
    // document.querySelector('#nextBtn').addEventListener('click',);

  } catch (error) {
    console.error('Error:', error.message);
  }
  document.querySelector('#searchBox').value = '';
}

document.querySelector('#searchBtn').addEventListener('click', getAnimals);