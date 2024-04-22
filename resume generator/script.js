function addnewwefeild(){
    let newnode=document.createElement('textarea');

    newnode.classList.add('form-control');
    newnode.classList.add('wefeild');
    newnode.classList.add('mt-2');
    newnode.setAttribute("rows",3);
    newnode.setAttribute('placeholder',"enterhere");

    let weob=document.getElementById("we");
    let weaddbuttonob=document.getElementById("weaddbutton");

    weob.insertBefore(newnode,weaddbuttonob);
}

function addnewaqfeild(){
    let newnode=document.createElement('textarea');

    newnode.classList.add('form-control');
    newnode.classList.add('aqfeild');
    newnode.classList.add('mt-2');
    newnode.setAttribute("rows",3);
    newnode.setAttribute('placeholder',"enterhere");

    let aqob=document.getElementById("aq");
    let aqaddbuttonob=document.getElementById("aqaddbutton");

    aqob.insertBefore(newnode,aqaddbuttonob);
}

//generating CV
function generateCV(){
   // console.log("generate cv");
   let nameFeild=document.getElementById("nameFeild").value;
   let nameFeild1=document.getElementById("nameT1");
   nameT1.innerHTML=nameFeild;

   document.getElementById("nameT2").innerHTML=nameFeild;

   document.getElementById("contactT").innerHTML=document.getElementById("contactFeild").value;

   document.getElementById("addressT").innerHTML=document.getElementById("addressFeild").value;

   document.getElementById("fbT").innerHTML=document.getElementById("fbFeild").value;

   document.getElementById("instaT").innerHTML=document.getElementById("instaFeild").value;

   document.getElementById("linkedinT").innerHTML=document.getElementById("ldknFeild").value;

   //objective
   document.getElementById("objectiveT").innerHTML=document.getElementById("objectivefeild").value;

   //work experience
    let wes=document.getElementsByClassName("wefeild");
    let str='';
    for(let e of wes){
        str+=<li>${e.value}</li>;
    }
    document.getElementById("weT").innerHTML=str;

    //academic qualification
    let aqs=document.getElementsByClassName("aqfeild");
    let str1='';
    for(let e of aqs){
        str+=<li>${e.value}</li>;
    }
    document.getElementById("aqT").innerHTML=str;

    document.getElementById("cv-form").style.display="block";
}

function printCV(){
    window.print();
}