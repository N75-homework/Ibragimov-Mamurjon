var $InputText = document.querySelector("#input_text");
var $userSurName = document.querySelector("#user_surname");
var $userName = document.querySelector("#user_name");
var $married = document.querySelector("#married");
var $married2 = document.querySelector("#married2");
var $want = document.querySelector("#want");
var $box = document.querySelector("#box");
var $Form = document.querySelector("#form");
var $btn = document.querySelector("#btn");


$Form.addEventListener("submit", function(evt) {
    evt.preventDefault()

    $box.innerHTML = `<h2>Ismi: ${$userName.value}</h2>
    <h3>Familyasi: ${$userSurName.value}</h3>
    <p>Otasining ismi: ${$InputText.value}</p>
    <p>Uylanganmi: ${$married.value || $married2.value}</p>
    <p>Yana hohlaydimi: ${$want.value}</p>`

    $InputText.value = null
    $userSurName.value = null
    $userName.value = null
    $married.value = null
    $want.value = null
})
