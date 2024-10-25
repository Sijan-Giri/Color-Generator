const btnEl = document.querySelector("#clickBtn");
const bodyEl = document.querySelector("body");

const generateColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    bodyEl.style.backgroundColor = randomCode;
    console.log(randomCode);
}

btnEl.addEventListener("click",generateColor);