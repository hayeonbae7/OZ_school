let form = document.getElementsByClassName("form");

form.addEventListener('submit', function(){
    let email = document.querySelector(".email").value
    let username = document.querySelector(".name").value
    let pw = document.querySelector(".pw").value
    let pw2 = document.querySelector(".pw2").value
    let phone1 = document.querySelector(".phone1").value
    let phone2 = document.querySelector(".phone2").value
    let phone3 = document.querySelector(".phone3").value
    let region = document.querySelector(".region").value
    let gender = document.querySelector(".gender").value
})

console.log({
    'email:': email,
    'name:': username,
    'pw': pw,
    'pw2': pw2,
    'phone1': phone1,
    'phone2': phone2,
    'phone3': phone3,
    'region': region,
    'gender': gender
})