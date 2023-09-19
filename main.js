window.addEventListener('scroll',()=>{
document.getElementById("navbar").classList.toggle('coloring', window.scrollY > 120);

}
)

/////////////////question section //////////
// not complet
let add=document.querySelectorAll('.question_box');
add.forEach(element => {
    element.addEventListener('click',()=>{

element.classList.toggle('greatBox');

alert(element.classList.length);


    })
});