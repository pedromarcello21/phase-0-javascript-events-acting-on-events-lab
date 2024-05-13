// Your code here

const dodger = document.getElementById("dodger")

dodger.style.background = "#FF69B4"

const moveDodgerLeft = () =>{
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0 && left <=360){
        dodger.style.left = `${left-1}px`;
    }
}

const moveDodgerRight = () =>{
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left >= 0 && left < 360){
        dodger.style.left = `${left+1}px`;
    }
}

const moveDodgerUp = () =>{
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers,10);

    if (bottom >=0 && bottom < 380){
        dodger.style.bottom = `${bottom + 1}px`
    }
}

const moveDodgerDown = () =>{
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if(bottom >0 && bottom <= 380){
        dodger.style.bottom = `${bottom -1}px`
    }
}

document.addEventListener("keydown", function(e){
    if(e.key === "ArrowLeft") {
        return moveDodgerLeft();
    }
    else if(e.key === "ArrowRight"){
        return moveDodgerRight()
    }
    else if(e.key === "ArrowUp"){
        return moveDodgerUp();
    }
    else{
        return moveDodgerDown();
    }
});

