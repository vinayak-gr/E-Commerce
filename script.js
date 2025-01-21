const imgs = document.querySelectorAll(".header-slider ul img");
const controlPrev = document.querySelector(".control-prev");
const controlNext = document.querySelector(".control-next");

let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++){
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block";
}
changeSlide();

controlPrev.addEventListener("click", (e)=>{
    if(n > 0){
        n--;
    }
    else{
        n = imgs.length - 1;
    }
    changeSlide();
})

controlNext.addEventListener("click", (e)=>{
    if(n < imgs.length - 1){
        n++;
    }
    else{
        n = 0;
    }
    changeSlide();
})


