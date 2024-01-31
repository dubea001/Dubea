const displayTitle = document.querySelector('title');
const titles = ['UI/UX DESIGNER', 'WEB DEVELOPER', 'SOFTWARE ENGINEER', 'DEVOPS ENGINEER'];
let currentIndex = 0;
function updateContent() {
  displayTitle.textContent += title[currentIndex];
  currentIndex = (currentIndex + 1) % titles.length;
  // setTimeout(updateContent, 3000);
};

