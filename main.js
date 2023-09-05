let title=document.querySelector(".title");
var turn = 'x';
let arr=[];
let i=0;
let spscreen=document.querySelector(".splachScreen");
let strtbtn=document.querySelector("button");
let strtbtn_span=document.querySelector("button span");
let oPlayer;
let xPlayer;
function get_info1(elem){
    xPlayer=elem.value;
    xPlayer.toUpperCase();
}
function get_info2(elem){
    oPlayer=elem.value;
    xPlayer.toLowerCase();
}


function removeScreen(){
    if(oPlayer==null||xPlayer==null)
    alert("Enter Names To Start 😠");
    else
    {
        strtbtn.innerHTML="Loading ";
    setInterval(()=>{strtbtn.innerHTML+="."},500);
    setTimeout(()=>{spscreen.remove()},2000); 
    document.getElementById("player1").value='';
    document.getElementById("player2").value='';
}

}
function rebeet(a,b,c)
{
    document.querySelector(".game").classList.add("no-clicking");
    title.innerHTML=(arr[a]==='X')?`${xPlayer} Won 🤩` : `${oPlayer} Won 🤩`;
    document.getElementById("item"+a).style.backgroundColor="white";
    document.getElementById("item"+b).style.backgroundColor="white";
    document.getElementById("item"+c).style.backgroundColor="white";
    document.getElementById("item"+a).style.color="black";
    document.getElementById("item"+b).style.color="black";    
    document.getElementById("item"+c).style.color="black";

    setTimeout(function(){
        document.querySelector(".playAgainsc").style.display="block";
    },3000);
}

function winner()
{
    for(let i=1 ; i<10 ; i++){
        arr[i]=document.getElementById("item"+i).innerHTML;
    }
    if(arr[1]==arr[2]&&arr[2]==arr[3]&&arr[1]!='')
    {
        rebeet(1,2,3);
    }
    else if(arr[4]==arr[5]&&arr[5]==arr[6]&&arr[4]!='')
    {
        rebeet(4,5,6);
    }
    else if(arr[7]==arr[8]&&arr[8]==arr[9]&&arr[7]!='')
    {
        rebeet(7,8,9);
    }
    else if(arr[1]==arr[5]&&arr[5]==arr[9]&&arr[1]!='')
    {
        rebeet(1,5,9);
    }
    else if(arr[3]==arr[5]&&arr[5]==arr[7]&&arr[3]!='')
    {
        rebeet(3,5,7);
    }
    else if(arr[1]==arr[4]&&arr[4]==arr[7]&&arr[1]!='')
    {
        rebeet(1,4,7);
    }
    else if(arr[2]==arr[5]&&arr[5]==arr[8]&&arr[2]!='')
    {
        rebeet(2,5,8);
    }
    else if(arr[3]==arr[6]&&arr[6]==arr[9]&&arr[3]!='')
    {
        rebeet(3,6,9);
    }

}winner();

function game(id)
{
    stopClicking();
    let elemnt=document.getElementById(id);
    if(turn==='x' && elemnt.innerHTML==='')
    {
        
        elemnt.innerHTML='X';
        i++;
        turn = 'o';
        title.innerHTML=`${oPlayer} Turn (O)`;
        title.style.color='white';
        winner();
    }
    else if (turn==='o' && elemnt.innerHTML==='')
    {
        
        elemnt.innerHTML='O';
        i++;
        turn = 'x';
        title.innerHTML=`${xPlayer} Turn (X)`;
        title.style.color='white';
        winner();
    } 
    
}

function stopClicking(){
    document.querySelector(".game").classList.add("no-clicking");
    setTimeout(()=>{
        document.querySelector(".game").classList.remove("no-clicking");
    },1000);
}


function playAgain()
{
    document.querySelector("button#ok").innerHTML="Loading ";
    setInterval(()=>{
        document.querySelector("button#ok").innerHTML+=".";
    },500);
    setTimeout(()=>{
        location.reload();
    },2000);
}
function cansel()
{
    document.querySelector(".playAgainsc").remove();
}