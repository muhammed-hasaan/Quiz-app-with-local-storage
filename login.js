function login(){
    var users = JSON.parse(localStorage.getItem("users"))
    var flag  = false
    for(var i =0; i <users.length; i++){

        if(users[i].email === document.getElementById("Email").value && users[i].password === document.getElementById("Password").value){
alert("you are successfully login")
flag =true
window.location.href ="./quiz.html"
        }
    }
  if(flag = false){
        
        alert("your password and email is wrong")
    }
}