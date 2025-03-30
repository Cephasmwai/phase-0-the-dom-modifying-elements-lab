// Write your code here!

const main = document.querySelector('main#main');
if (main) {
  main.remove();
}


const newHeader = document.createElement('h1');


newHeader.id = 'victory';


newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your name or desired text


document.body.appendChild(newHeader);