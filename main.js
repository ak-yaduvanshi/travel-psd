let user = document.querySelector("#user");
let loginBtn = document.querySelector("#login-btn");
let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let loginPage = document.querySelector(".loginpage");
let placeName = document.querySelector("#place-name");
let submit = document.querySelector("#submit");
let bar = document.querySelector("#bar");
let ul = document.querySelector("ul");
let more = document.querySelector("#more");
let moreBtn = document.querySelector("#more-btn");

user.addEventListener("click",function(){
    this.classList.toggle("active");
    loginPage.classList.toggle("active1");
})

loginBtn.addEventListener("click",function(){


    if(email.value == "" && pass.value == ""){
        alert("Please Fill Details");
    }
    else{
        alert("You Logged In")
        loginPage.style.display="none";
    }
})


submit.addEventListener("click",function(){
    if(placeName.value == ""){
        alert("Fill Form");
    }
    else{
        alert(placeName.value + " Tour Booked");
    }
})

bar.addEventListener("click",function(){
    this.classList.toggle("active");
    ul.classList.toggle("active2");
})

moreBtn.addEventListener("click",function(){
    more.classList.toggle("active3");
})