let greetings = ["Good Morning", "Good Afternoon", "Good Evening", "Good Night"];
let num = 0;
function greet_afternoon() {
    let text = document.getElementById("greet");
    text.innerText = greetings[num];
    num += 1;
    if (num > 3) { num = 0; }
}
function turn_on() {
    let light = document.getElementById("on");
    light.src = "on.jpg";
}
function turn_off() {
    let light = document.getElementById("on");
    light.src = "off.jpg";
}
function change_color() {
    let colour = document.getElementById("cap");

    colour.style.backgroundColor =
        colour.style.backgroundColor === "black" ? "white" : "black";

    colour.style.color =
        colour.style.color === "white" ? "black" : "white";
}