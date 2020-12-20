let btnHamburger = document.querySelector('.btn-hamburger');
let nav = document.querySelector('nav');

btnHamburger.addEventListener("click", navBarToggler);

function navBarToggler(){
    if(btnHamburger.classList.contains('is-active')){
        btnHamburger.classList.remove('is-active');
        nav.classList.remove('is-active');
        setTimeout(function(){
            nav.querySelector('.list-container').style.display = 'none';
        },300);

    } else{
        btnHamburger.classList.add('is-active');
        nav.querySelector('.list-container').style.display = 'flex';
        setTimeout(function(){
            nav.classList.add('is-active');

        },10);

    }
}