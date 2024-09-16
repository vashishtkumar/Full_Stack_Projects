const imageUrlInput=document.querySelector("#photo_url_id");  // imput to take image url
const addBtn=document.querySelector("#add");                   //button to add url
const imagePlaceholder =document.querySelector("#image_placeholder");  // images that will be shown

const Images=[];
let currentIndex=-1;



addBtn.addEventListener("click",()=>{
    const imageUrl=imageUrlInput.value;
    imagePlaceholder.setAttribute("src",imageUrl);
    imageUrlInput.value="";
    Images.push(imageUrl);
    console.log(Images);
    //currentIndex++;
})

//update Images when any key is pressed
function updateImage(){
    imagePlaceholder.setAttribute("src",Images[currentIndex]);
}

//handling indexes
function moveRight(){
    currentIndex++;
    if(currentIndex===Images.length){
        currentIndex=0;
    }
}

function moveLeft(){
    currentIndex--;
    if(currentIndex==-1){
        currentIndex=Images.length-1;
    }
}
// function to handle when any key is pressed

function goToNextImage(){
    moveRight();
    updateImage();
}

function goToPrevImage(){
moveLeft();
updateImage();
}

function clearImage(){
    Images.splice(currentIndex,1);
    moveLeft();
    updateImage();
}


document.addEventListener("keypress",(event)=>{
const keyPressed=event.key;
if(keyPressed=="n"){
    goToNextImage();
}
if(keyPressed=="p"){
    goToPrevImage();
}
if(keyPressed=="c"){
    clearImage();
}
})





