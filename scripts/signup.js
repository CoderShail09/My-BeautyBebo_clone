
 document.querySelector("form").addEventListener("submit" ,signUp);
 //var userStack=[];
 var arr=JSON.parse(localStorage.getItem("userDatabase")) || [];
 function signUp(event){
     event.preventDefault();
     var email= document.querySelector("#email").value;
     var num= document.querySelector("#num").value;
     var pass= document.querySelector("#pass").value;


     var userData = {
         emailAdd:email,
         mob:num,
         password:pass,
     }
    arr.push(userData);
 //    console.log(userStack);

 localStorage.setItem("userDatabase",JSON.stringify(arr));
 alert("Sign Up Success");
 window.location.href="/pages/login.html";
 }