var btnOpen =   document.querySelector('.open-modal-btn');
var modal   =   document.querySelector('.modal');
var btn     =   document.querySelector('.modal__footer-close');

function    toggleModal(e) {
    console.log(e.target)
    modal.classList.toggle('.hide')
}

btnOpen.addEventListener('click',toggleModal)
modal.addEventListener('click',toggleModal)
btn.addEventListener('click',toggleModal)
modal.addEventListener('click',function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})
const x = 1;
const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }

console.log(factorial(3))