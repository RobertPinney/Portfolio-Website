/* Four functions for each cogwheel to turn red and produce text */

let dadJoke = document.querySelector('#cogwheel-dad-joke-generator');
dadJoke.onclick = () => {
    dadJoke.style.color = 'red';
    teaCozy.style.color = 'black';
    originalHomepage.style.color = 'black';
    getBaked.style.color = 'black';
    let dadJokeText = document.querySelector('#generated-text');
    dadJokeText.innerHTML=`Push the big button and receive your dad joke of the day!`;
};


let getBaked = document.querySelector('#baked-goods');
getBaked.onclick = () => {
    getBaked.style.color = 'red';
    teaCozy.style.color = 'black';
    originalHomepage.style.color = 'black';
    dadJoke.style.color = 'black';
    let getBakedText = document.querySelector('#generated-text');
    getBakedText.innerHTML=`Excluding a very basic homepage in HTML and CSS, this is my very first project. I created this webpage, and focused a good deal on using Flexbox for the first time.`;
};

let teaCozy = document.querySelector('#tea-cozy');
teaCozy.onclick = () => {
    teaCozy.style.color = 'red';
    originalHomepage.style.color = 'black';
    getBaked.style.color = 'black';
    dadJoke.style.color = 'black';
    let teaCozyText = document.querySelector('#generated-text');
    teaCozyText.innerHTML=`Static website built using basic instructions to simulate real-life experience.`;
};

let originalHomepage = document.querySelector('#original-homepage');
originalHomepage.onclick = () => {
    originalHomepage.style.color = 'red';
    teaCozy.style.color = 'black';
    getBaked.style.color = 'black';
    dadJoke.style.color = 'black';
    let originalHomepageText = document.querySelector('#generated-text');
    originalHomepageText.innerHTML=`Original homepage. It looks terrible now, but I was so proud at the time. :-)`;
};

// Taking user back to top
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});