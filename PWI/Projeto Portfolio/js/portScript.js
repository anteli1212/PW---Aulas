function ToggleMode(){
    const html = document.documentElement;
    html.classList.toggle("light");


    const img = document.querySelector("#profile-picture");
    
    if(html.classList.contains("light")){
        img.setAttribute("src", "./img/Profile-Picture2.png");
    }else{
        img.setAttribute("src", "./img/Profile-Picture1.png");
    }
}