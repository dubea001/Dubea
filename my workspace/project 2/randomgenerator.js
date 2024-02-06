const baseUrl = 'https://randomuser.me/api/';
const displayPicture = document.querySelector('#user-display-picture');
const userName = document.querySelector('#user-name');
const userDOB = document.querySelector('#user-dob');
const userContact = document.querySelector('#user-contact');
const userEmail = document.querySelector('#user-email');
const userLocation = document.querySelector('#user-location');
const userPersonal = document.querySelector('#user-personal');
let popUp = document.querySelector('#pop-up-div');


function openPopup() {
  popUp.classList.add('open-pop-up');
}
function closePopup() {
  popUp.classList.remove('open-pop-up');
}

async function generateRandomUser() {
  const data = await fetch(baseUrl);
  const response = await data.json();
  const results = response.results[0];
  const displayName = results.name;
  const userMail = results.email;
  displayPicture.src = results.picture.large;
  userName.textContent = `${displayName.title.toUpperCase()}. ${displayName.first.toUpperCase()} ${displayName.last.toUpperCase()}`;
  const location = results.location;
  const dateOfBirth = results.dob.date.slice(0, 10);
  const userAge = `${results.dob.age} years old`;
  function reversedDateOfBirth(value) {
    const splitParts = value.split('-');
    const reversedDate = `${splitParts[2]}/${splitParts[1]}/${splitParts[0]}`
    return reversedDate;
  }

  function fixEmailAddress(email) {
    const suffix = 'gmail.com';
    if (email.endsWith('example.com')) {
      return email.slice(0, -11) + suffix;
    }
    return email;
  }

  function callEvent(value) {
    value.addEventListener('click', () => {
      openPopup();

      if (value === userEmail) {
        popUp.innerHTML = `<p>${fixEmailAddress(userMail)}</p>
        <button class="close-btn" onclick="closePopup()">X</button>`;
      }
      if (value === userContact) {
        popUp.innerHTML = `<p>phone: ${results.phone}</p>
        <p>tel: ${results.cell}</p>
        <button class="close-btn" onclick="closePopup()">X</button>`;
      }
      if (value === userDOB) {
        popUp.innerHTML = `<p>${reversedDateOfBirth(dateOfBirth)}</p>
        <p>${userAge}</p>
        <button class="close-btn" onclick="closePopup()">X</button>`;
      }
      if (value === userLocation) {
        popUp.innerHTML = `<p>country: ${location.country}</p>
        <p>state: ${location.state}</p>
        <p>city: ${location.city}</p>
        <p>street: ${location.street.name}, ${location.street.number}</p>
        <button class="close-btn" onclick="closePopup()">X</button>`;
      }
      if (value === userPersonal) {
        popUp.innerHTML = `<p>full name: ${displayName.title}. ${displayName.first} ${displayName.last}</p>
        <p>username: ${results.login.username}</p>
        <p>password: ${results.login.password}</p>
        <button class="close-btn" onclick="closePopup()">X</button>`;
      }
    });

  }
  callEvent(userEmail);
  callEvent(userContact);
  callEvent(userLocation);
  callEvent(userDOB);
  callEvent(userPersonal);

};

const randomUserBtn = document.querySelector('#new-user-btn');
randomUserBtn.addEventListener('click', generateRandomUser);



