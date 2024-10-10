let box = document.querySelector(".box");
let food = document.querySelector(".food");
let score = document.querySelector(".value");
let column = 0;
let row = 0;
let len= 1;
// about snake
let xposition = [5];
let yposition = [5];

food.style.gridColumnStart = 4;
food.style.gridRowStart = 3;

document.addEventListener("keyup",(event)=>{
    column = 0;
    row = 0;
    if(event.key === "ArrowUp"){
        row = -1;
    }
    else if(event.key === "ArrowDown"){
        row = 1;
    }
    else if(event.key === "ArrowRight"){
        column = 1;
    }
    else if(event.key === "ArrowLeft"){
        column = -1;
    }
    
    
});


setInterval(() => {
    let mouth = document.querySelector(".l1");
    if(mouth){

        for (let index = 1; index < len; index++) {
            if(mouth.style.gridColumnStart == xposition[index] && mouth.style.gridRowStart == yposition[index]){
                location.reload();
                column = 0;
                row = 0;
            }
        }    

    if(Number(mouth.style.gridColumnStart)>=12 && column == 1){
        column = 0;
        location.reload();  
    }
    if(Number(mouth.style.gridColumnStart)<=1 && column == -1){
        column = 0;
        location.reload();
    }
    if(Number(mouth.style.gridRowStart)>=12 && row == 1){
        row = 0;
        location.reload();
    }
    if(Number(mouth.style.gridRowStart)<=1 && row == -1){
        row = 0;
        location.reload();
    }
    if(Number(food.style.gridRowStart) === Number(mouth.style.gridRowStart) && Number(mouth.style.gridColumnStart) ===Number(food.style.gridColumnStart)){
        let minc = 1;
        let maxc = 12;
        let foodcolumn = Math.floor(Math.random() * (maxc - minc + 1)) + minc;

        let minr = 1;
        let maxr = 12;
        let foodrow = Math.floor(Math.random() * (maxr - minr + 1)) + minr;
        len= len+1;
        food.style.gridColumnStart = foodcolumn;
        food.style.gridRowStart = foodrow;
        score.innerText = `Score : ${len-1}`;
        
        xposition.push(0);
        yposition.push(0);
    }
}
    // update list  
    let tempx = xposition[0] + column;
    let tempy = yposition[0] + row;
    for (let i = len - 1; i > 0; i--) {
        xposition[i] = xposition[i - 1];
        yposition[i] = yposition[i - 1];
    }
    xposition[0] = tempx;
    yposition[0] = tempy;

    //print snake
    for (let index = 0; index < len; index++) {
        let snake = document.querySelector(`.l${index + 1}`);
        
        // Create a new segment if it doesn't exist
        if (!snake) {
            snake = document.createElement("div");
            snake.setAttribute('class', `l${index + 1}`);
            box.appendChild(snake); // Append to the body or a specific container
        }

        snake.style.width = "50px";
        snake.style.height = "50px";
        snake.style.backgroundColor = "red";
        snake.style.gridColumnStart = xposition[index];
        snake.style.gridRowStart = yposition[index];
        snake.style.position = "relative";
        snake.style.borderRadius = "20%";
    }

    

}, 200);