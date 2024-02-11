const container = document.querySelector('#container');
const gridButton = document.querySelector('.button-one');
const clearBtn = document.querySelector('.button-two');


function divs(){
const div = document.createElement('div');
container.appendChild(div);
div.classList.add('child-div');
div.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = randomColor();
});
container.appendChild(div);
}

function newGrid(){
    gridButton.addEventListener("click", () => {
        const newSize = prompt("enter the grid size");
        while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(newSize);
    styleNewGrid(newSize);
    });
}


function styleNewGrid(value){
   const parent = document.querySelector("#main-container"); 
   const container = parent.querySelector("#container");
   const babyDivs = container.getElementsByClassName("child-div");

   for(let i=0; i<babyDivs.length; i++){
    babyDivs[i].style.setProperty('width', `calc(100% / ${value})`);
    babyDivs[i].style.setProperty('height', `calc(100% / ${value})`);
   }

}

function createGrid(num){
    for(let i=0; i<num; i++){
        for(let j=0; j<num; j++){ 
            divs();   
        }
    }
}
function randomColor(){
    let randomNum = Math.floor((Math.random() * 7) + 1);
    let color;
    if(randomNum === 1){
        color = "red";
    }
    else if(randomNum === 2){
        color = "orange";
    }
    else if(randomNum === 3){
        color = "yellow";
    }
    else if(randomNum === 4){
        color = "green";
    }
    else if(randomNum === 5){
        color = "blue";
    }
    else if(randomNum === 6){
        color = "indigo";
    }
    else if(randomNum === 7){
        color = "violet";
    }
    return color;
}
 createGrid(64);
 newGrid();
