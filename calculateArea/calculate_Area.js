let length;
let width;

function calculateArea(){
    length = parseFloat(document.getElementById("length").vaule);
    width = parseFloat(document.getElementById("width").vaule);
    let area = length * width
    document.getElementById("result").innerText = `The are of the rectangle is: ${area}`;
}
