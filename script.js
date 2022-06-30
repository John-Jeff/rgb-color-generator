const heading = document.querySelector('h1');

const button = document.querySelector('button');

button.addEventListener('click', randomColor);

function randomColor() {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);

    rgbSum = red + green + blue;

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    heading.textContent = `rgb(${red}, ${green}, ${blue})`

    if (rgbSum <= 360) {
        heading.style.color = 'white';
    }

    else heading.style.color = 'black';
}
