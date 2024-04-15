console.log("welcome To My First WebPage");

let display = 0;
let tripleDot = document.querySelector(".navBarOpen");
let navContent = document.querySelector(".navContent");
let crossImg = document.querySelector(".navBarClose");

tripleDot.onclick = () =>{
    console.log("3 dot is clicked");
    if(display === 0){
        navContent.style.display = "block";
        crossImg.src = "/my/image/crossImg.png";
        console.log("nav bar is visible");
        display=1;
    }
    else if(display === 1 ){
        navContent.style.display = "none";
        crossImg.src = "/my/image/3dot.png";
        console.log("nav bar is not visible");
        display=0;
    }
}










