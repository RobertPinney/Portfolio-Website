/*
const newText = () => {
    let paragraph = document.createElement('p');
paragraph.id = 'cogwheel-dad-joke-generator';
paragraph.innerHTML = 'Please please please let this work'
document.cogwheelDadJokeGenerator.appendChild(paragraph);
};

cogwheelDadJokeGenerator.onclick = newText;
*/
/*
const heading = document.getElementsByTagName('h1');
heading = "<h2>This is a test</h2>";
console.log(heading);
*/
//document.body.innerHTML = '<h2>This is a test!</h2>';
/*
let eventTarget= document.querySelector('h1');

synopsis.onclick = () => {
    eventTarget.style.color = 'red';
};


synopsis.addEventListener('click', turnRed);
*/

let turnRed = document.querySelector('.synopsis');
//turnRed.style.color = 'red'
turnRed.onclick = () => {
    turnRed.style.color = 'red';
};
