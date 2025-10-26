//counter program

const increasebtn= document.getElementById("mybtn1");
const reset= document.getElementById("mybtn2");
const decreasebtn= document.getElementById("mybtn3");
const countLabel=document.getElementById("countLabel");
let count=0;

increasebtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
reset.onclick = function(){
    count=0;
    countLabel.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
