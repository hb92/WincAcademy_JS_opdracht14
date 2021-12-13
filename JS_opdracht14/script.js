//Part1
const button = document.querySelector("#mybutton");

button.addEventListener('click', function(btnAlert) {
    btnAlert = alert('button clicked');
});

//Part2

const colorbtn = document.querySelector("#colorbutton");
const body=document.querySelector("body");

/*colorbtn.addEventListener('click', function (changeColor) {
    changeColor = body.classList.add('red-background');
});*/

//Part3

colorbtn.addEventListener('click', function (toggleColor) {
    toggleColor = body.classList.toggle('red-background');
});