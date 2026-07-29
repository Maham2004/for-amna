let clickedStars = [];
let attempts = 0;

function checkAnswer() {

    let answer = document
        .getElementById("answer")
        .value
        .trim()
        .toLowerCase();

    let login = document.getElementById("login");
    let main = document.getElementById("main");
    let wrong = document.getElementById("wrong");

    if (
        answer === "janum" ||
        answer === "jaanum" ||
        answer === "jaan"
    ) {

        wrong.style.color = "#90EE90";
        wrong.innerHTML = "💙 Access Granted... Welcome, Janum.";

        setTimeout(() => {

            login.style.display = "none";

            main.style.display = "flex";
            main.classList.add("fadeIn");

            setTimeout(() => {

                alert("🤍 I knew you'd get it right.");

            }, 1200);

        }, 1800);

    } else {

        attempts++;

        login.classList.add("shake");

        setTimeout(() => {

            login.classList.remove("shake");

        }, 500);

        if (attempts < 3) {

            wrong.innerHTML =
                "🥹 Oops... that's not the answer.<br>Hint: It's the name that always makes you smile.";

        } else {

            wrong.innerHTML =
                "💙 Last Hint: It starts with the letter 'J'.";

        }

    }

}

function nextPage(){

    document.getElementById("main").style.display="none";

    document.getElementById("page2").style.display="flex";

    let text =
`Some people become a beautiful part of our lives without even realizing it.

You are one of them, Amna.

Thank you for staying.

Thank you for understanding me.

Thank you for making ordinary days feel special.

I'm really grateful to have you in my life. 🤍`;

    let i=0;

    let speed=45;

    document.getElementById("messageBox").innerHTML="";

    function type(){

        if(i<text.length){

            document.getElementById("messageBox").innerHTML += text.charAt(i);

            i++;

            setTimeout(type,speed);

        }

    }

    type();

}

function showPage3(){

document.getElementById("page2").style.display="none";

document.getElementById("page3").style.display="flex";

}

function openGift(){

document.querySelector(".gift").style.display="none";

document.getElementById("letter").style.display="block";

}

function finishJourney(){

document.getElementById("page3").style.display="none";

document.getElementById("finalPage").style.display="flex";

setInterval(createHeart,500);

}

function createHeart(){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="🤍";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}
function showMemory(number){

if(!clickedStars.includes(number)){
clickedStars.push(number);
}

let text="";

switch(number){

case 1:
text="💙 You're my comfort person.";
break;

case 2:
text="🌸 Thank you for always listening to me.";
break;

case 3:
text="🤍 You make ordinary days feel special.";
break;

case 4:
text="✨ I hope life always gives you reasons to smile.";
break;

case 5:
text="🥹 No matter what happens... You'll always be my Janum.";
break;

}

document.getElementById("memoryText").innerHTML=text;

if(clickedStars.length==5){

    setTimeout(function(){

        document.getElementById("finalPage").style.display="none";

        document.getElementById("secretPage").style.display="flex";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },1000);

}

}   // ⭐ Ye closing brace missing thi. Isay zaroor add karo.

function lastMessage(){

document.getElementById("lastSecret").innerHTML =
"🥹 If you're still reading this... then my mission is complete, because I managed to make my Janum smile. ❤️";

setTimeout(function(){

document.getElementById("goodbye").innerHTML =
"🤍 See you in the next surprise...";

},2500);

setTimeout(function(){

document.body.style.transition="2s";
document.body.style.opacity="0";

},7000);

setTimeout(function(){

document.body.innerHTML = `
<div style="
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:100vh;
background:black;
color:white;
font-size:28px;
text-align:center;
padding:30px;
font-family:Arial;
">

<h2>Connection Closed...</h2>

<p style="margin-top:25px;">
But our friendship never will. 🤍
</p>

<br>

<button onclick="location.reload()"
style="
padding:15px 35px;
font-size:18px;
border:none;
border-radius:35px;
background:#2563eb;
color:white;
cursor:pointer;
">

🔄 Read Again

</button>

</div>
`;

document.body.style.opacity="1";

},9000);

}
