

// logon functionality has been given here

document.querySelector("#login-form").addEventListener("submit",logIn)


let arr = JSON.parse(localStorage.getItem("myData")) || []
function logIn(event){
    event.preventDefault()
    var mail = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

   

    var data = {
        email: mail,
        password: pass,
    }
    arr.push(data)



    localStorage.setItem.apply("myData",JSON.stringify(arr));

    alert("You Have succesfully Logged In");
    window.location.href = "/index.html"
}