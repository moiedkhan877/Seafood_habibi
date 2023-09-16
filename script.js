var menu = document.querySelector("h3");
var full = document.querySelector(".full-screen");

var flag = 0

menu.addEventListener("click", function(){
    if(flag === 0){
        full.style.left = "-100%"
        menu.innerHTML = '<i class="ri-menu-3-line"></i>'
        flag = 1
    }
    
    else{
        full.style.left = "0"
        menu.innerHTML = '<i class="ri-close-line"></i>'
        flag = 0
    };
})


