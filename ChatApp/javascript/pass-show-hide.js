const paswrdField = document.querySelector(".form input[type='password']"),
toggleBtn = document.querySelector(".form .field i");

toggleBtn.onclick = ()=>{
    if(paswrdField.type == "password"){
        paswrdField.type = "text";
        toggleBtn.classList.add("active");
    }
    else{
        paswrdField.type = "password";
        toggleBtn.classList.remove("active");
    }
}