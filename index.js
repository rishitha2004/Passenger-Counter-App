let entr=document.getElementById("previous");

function increment(){
    document.getElementById("count").innerHTML++;
}

function save(){
    let cnt=document.getElementById("count").innerHTML;
    document.getElementById("count").innerHTML=0;
    let toSave=cnt+"  -  ";
    entr.innerText+=toSave;
}

function erase(){
    console.log("Clear pressed");
    document.getElementById("count").innerHTML=0;
    document.getElementById("previous").innerHTML="Previous entries:";
}