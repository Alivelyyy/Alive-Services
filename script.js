const text = "Alive";
const typing = document.getElementById("typing");

let index = 0;

function type(){
if(index < text.length){
typing.innerHTML += text.charAt(index);
index++;
setTimeout(type,150);
}
}

type();
