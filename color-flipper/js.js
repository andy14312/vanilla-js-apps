const hexColorValues = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

const btn = document.getElementById('change-color-button');
const wall = document.querySelector('.wall');

btn.addEventListener('click',(e) => {
    wall.style.backgroundColor = getRandomColor();
});

const getRandomColor = function() {
    const color = `#${getRandomIndex(hexColorValues)}${getRandomIndex(hexColorValues)}${getRandomIndex(hexColorValues)}${getRandomIndex(hexColorValues)}${getRandomIndex(hexColorValues)}${getRandomIndex(hexColorValues)}`
    return color;
}

const getRandomIndex = function(array) {
    return hexColorValues[Math.floor(Math.random()*array.length)];
}