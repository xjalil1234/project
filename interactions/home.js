


/*navbar anmimation*/

let navbar=document.querySelectorAll(".navbar .btn");


for(let j=0;j<navbar.length;j++){
    document.querySelectorAll(".navbar .btn")[j].addEventListener("click",gotClicked);
}


function gotClicked(){
for (i=0;i<navbar.length;i++){
    if(navbar[i]!=this){navbar[i].classList.remove("clicked")}
}
this.classList.add("clicked");
}

/** */


let projects=document.querySelectorAll(".project");


for (let index = 0; index < projects.length; index++) {
   projects[index].addEventListener("mouseover", hover);
   projects[index].addEventListener("mouseout", unHover);
    
}


function hover(){
let icon= this.querySelector(".icon");
let title= this.querySelector(".title");



icon.classList.add("hovered");
title.classList.add("hovered");


}

function unHover(){

let icon= this.querySelector(".icon");
let title= this.querySelector(".title");




icon.classList.remove("hovered");
title.classList.remove("hovered");



}




/** projects animation*/
function display(entries,observer) {
    entries.forEach(entry => {
        console.log(entry.target);
        if (entry.isIntersecting){entry.target.classList.add("animated")}
              
        });};
        const option={
        
                root:null,
                threshold: 0.3 ,
            
        }
const observer= new IntersectionObserver(display,option);

projects.forEach(project=>{
    observer.observe(project);
})
;