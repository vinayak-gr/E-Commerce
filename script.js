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

const products = document.querySelectorAll(".products");
for (const product of products){
    product.addEventListener("wheel", (e)=>{
        e.preventDefault();
        product.scrollLeft += e.deltaY
    })
}

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 100){
        backToTop.style.display = "block";
    }else{
        backToTop.style.display = "none"
    }
})

backToTop.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior: "instant"
    })
})