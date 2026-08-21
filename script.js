const text = "Alive";
const typing = document.getElementById("typing");

let index = 0;
let deleting = false;

function type(){
if(!deleting){
typing.textContent = text.slice(0, ++index);
if(index === text.length){
deleting = true;
return setTimeout(type, 2200);
}
setTimeout(type, 160);
}else{
typing.textContent = text.slice(0, --index);
if(index === 0){
deleting = false;
return setTimeout(type, 500);
}
setTimeout(type, 90);
}
}

type();

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("visible");
observer.unobserve(entry.target);
}
});
},{threshold:0.15});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
