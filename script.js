//HEADER

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
menuToggle.onclick = function(){
    header.classList.toggle('active')
};

// CONTACT PAGE WHATSAPP

function whatsapp() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    var wppurl = "https://api.whatsapp.com/send?phone=5511949700993&text=*MINHAS INFORMAÇÕES:* %0a*Nome:* "+ name +"%0a" + "*E-Mail:* "+ email +"%0a" + "*Telefone:* "+ phone +"%0a";

    window.open(wppurl, "_blank").focus();
}

// BACK TO HOME FIXED BUTTON

let sec = document.querySelectorAll('section');
let links = document.querySelectorAll('ul li a');

window.onscroll = () => {
    sec.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 60;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove('active');
                document.querySelector('ul li a[href*=' + id + ']').classList.add('active');
            })
        }
    })
};

const btn = document.getElementById("btnTop")

btn.addEventListener("click", function () {
    window.scrollTo(0, 0)
})

document.addEventListener('scroll', ocultar)

function ocultar() {
    if (window.scrollY > 10) {
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}

ocultar()
 
function aparecerTextoSubir() {
    if(window.screen.width >= 900) {
        setTimeout(() => {
            document.getElementById("btnTop").innerHTML = '<i class="fa-solid fa-arrow-up" aria-hidden="true"></i> &nbsp; Início';
        }, 200)
    };
}
function resetSubir() {
    setTimeout(() => {
        document.getElementById("btnTop").innerHTML = '<i class="fa-solid fa-arrow-up" aria-hidden="true"></i>';
    }, 200)
}

// FIXED WHATSAPP BUTTON

const btnWpp = document.getElementById("btnTopWpp")

document.addEventListener('scroll', ocultarWpp)

function ocultarWpp() {
    if (window.scrollY > 10) {
        btnWpp.style.display = "flex"
        btnWpp.style.bottom = "76px"
    } else {
        btnWpp.style.bottom = "15px"
    }
}

ocultarWpp()

function aparecerTextoWpp() {
    if(window.screen.width >= 900) {
        setTimeout(() => {
            document.getElementById("btnTopWpp").innerHTML = '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i> &nbsp; Whatsapp';
        }, 200)
    };
}

function resetWpp() {
    setTimeout(() => {
        document.getElementById("btnTopWpp").innerHTML = '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i>';
    }, 200)
}

btnWpp.addEventListener("click", function () {
    setTimeout(() => {
        window.open("https://api.whatsapp.com/send?phone=5511949700993&text=Rafa%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20Treinos.", '_blank')
    }, 300);
})