document.getElementById("Red-Range").max = 255;
document.getElementById("Green-Range").max = 255;
document.getElementById("Blue-Range").max = 255;

let redValue = 0, greenValue = 0, blueValue = 0;

ChangeColor();

function ChangeRed(){
    redValue = document.getElementById("Red-Range").value;

    ChangeColor();

}

function ChangeGreen(){
    greenValue = document.getElementById("Green-Range").value;

    ChangeColor();

}

function ChangeBlue(){
    blueValue = document.getElementById("Blue-Range").value;

    ChangeColor();


}

function ChangeColor(){

    document.getElementById("Red-Input").value = redValue;
    document.getElementById("Green-Input").value = greenValue;
    document.getElementById("Blue-Input").value = blueValue;

    document.getElementById("Red-Range").value = redValue;
    document.getElementById("Green-Range").value = greenValue;
    document.getElementById("Blue-Range").value = blueValue;



    document.getElementById("Cube").style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}