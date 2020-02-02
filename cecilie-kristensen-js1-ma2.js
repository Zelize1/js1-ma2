// question 1

const myFunctionExpression = function () {
    console.log("Cecilie");
};

myFunctionExpression();

// question 2

const clickButton = document.querySelector(".btn");

clickButton.addEventListener("click", function() {
    console.log("I was clicked");
});

// question 3

const textInput = document.querySelector("#firstName");

textInput.addEventListener("keydown", function(event) {
    console.dir(event);
    console.log("A key was pressed");
});

// question 4

const hoverButton = document.querySelector("button");
hoverButton.classList.add("hover");

for(let i = 0; i < hoverButton.length; i++) {
    hoverButton[i].addEventListener("click");
}

hoverButton.addEventListener("mouseover", function() {

});

// question 5

const buttonAttribute = document.querySelector('[data-animal]');
buttonAttribute.classList.remove("btn");

for(let i = 0; i < buttonAttribute.length; i++) {
    buttonAttribute[i].addEventListener("mouseout");
}

// question 6

const lists = document.querySelectorAll("li");

for(let i = 0; i < lists.length; i++) {
    lists[i].addEventListener("mouseover", lists)
}

console.dir(lists);

// question 7

const animal = "cow";

switch(animal) {
    
    case "cat":
        console.log("Meow");
        break;

    case "cow":
        console.log("Moo");
        break;

    case "bird":
        console.log("Tweet");
        break;

    default:
        console.log("Harrumph");
}

// question 8

const sheep = ["Malcolm", "Anders", "Marie"];

function handleEachSheep(sheep) {
    console.log(sheep);
}

sheep.forEach(handleEachSheep);

// question 9 

function sayHello() {
    console.log( new Date());

    if(counter === 5) {
        clearInterval(helloInterval);
    }

    counter++;
}

let counter = 0;

const helloInterval = setInterval(sayHello, 500);

// question 10

const twoSeconds = document.querySelector(".container");

function updatedText() {
    twoSeconds.innerHTML = "Text updated";
}

setTimeout(updatedText, 2000);
