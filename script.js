//===================Product Slider===============================================
let products=document.getElementsByClassName("productCD");

let count=-1;

forwardSlide.addEventListener("click",()=>{
    count++;
    if(count==products.length-2){
        forwardSlide.style.display="none";        
    }
    products[count].style.display="none";
})

backICN.addEventListener("click",()=>{
    forwardSlide.style.display="block";
    products[count].style.display="block";
    count--;
});
//==============================Review Section Slider==============================
let flag=0;
let num=0;

function controller(x){
    flag=flag+x;
    slideShow(flag)
}
slideShow(flag);
function slideShow(num){
    let slides=document.getElementsByClassName("review_cover");
    if(num==slides.length){
        flag=0;
        num=0;
    }
    if(num<0){
        flag=slides.length-1;
        num=slides.length-1;
    }
    for(let y of slides){
        y.style.display="none";
    }
    slides[num].style.display="block";
}