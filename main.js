
const homework = document.querySelector(".lesson__homework-paragraph--js");
homework.innerHTML = "Wszystko działa!";

const name = "Jola";
const age = 34;

function hello(name, age) {
    console.log(
        `Siema, nazywam się ${name} i mam ${age} lat.`
    );
}
hello(name, 24);

const greet = (age, name) => {
    console.log(
        `Witam Cię serdecznie, nazywam się ${name} i mam ${age} lat.`
    );
    }
greet(56, 'Maja');