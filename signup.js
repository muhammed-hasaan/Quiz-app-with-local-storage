function signup() {
var users = [
 
];
  let obg = { 
    email:document.getElementById("Email").value,
    password:document.getElementById("Password").value,
    rollno:document.getElementById("Roll").value,
    number:document.getElementById("Number").value

}
users = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")) : []
users.push(obg)
localStorage.setItem("users",JSON.stringify(users))
window.location.href = "./login.html"
}
