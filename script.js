
const button = document.getElementById("myButton");


function doSomething() {
alert("Hello World");
}


button.addEventListener("click", doSomething);



const box = document.getElementById("boxElement");
box.addEventListener("mouseover", function() { console.log("El cursor está sobre el elemento");
});


box.addEventListener("mouseout", function() {
console.log("El cursor ha salido del elemento");
});



window.addEventListener("keydown", (e) => {
console.log("Objeto de evento completo:", e);
console.log("Código de tecla pulsada:", e.code);




if (e.code === "KeyF") {
console.log("¡Se ha presionado la tecla F!");
}
});
const inputField = document.getElementById("usernameInput");
const heading = document.getElementById("greetingHeading");



inputField.addEventListener("input", (e) => {


heading.innerText = e.target.value;
});


const singleButton = document.getElementById("singleButton");


singleButton.addEventListener("click", () => {
console.log("Este mensaje y acción solo ocurrirán una sola vez.");
}, { once: true });