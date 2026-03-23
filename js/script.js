const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",async function(e){

e.preventDefault();

const data = {

name: document.getElementById("name").value,
email: document.getElementById("email").value,
phone: document.getElementById("phone").value,
message: document.getElementById("message").value

};

await fetch("YOUR_N8N_WEBHOOK_URL",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

});

alert("Message Sent Successfully");

});

}


/* CV FORM OPEN */

function openCVForm(){

document.getElementById("cvPopup").style.display="flex"

}


/* DOWNLOAD CV */

function downloadCV(){

const name=document.getElementById("cvname").value
const email=document.getElementById("cvemail").value

if(!name || !email){

alert("Please fill the form")

return

}

document.getElementById("cvPopup").style.display="none"

window.location.href="cv/Yashraj-CV.pdf"

}