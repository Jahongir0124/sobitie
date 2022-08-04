const btn = document.querySelector('#btn');
const H1 = document.querySelector('#h1');
const  callFunction = () => {
    H1.textContent = 'Ruxshonaxon sizni yaxshi koraman';
}
H1.addEventListener('mouseenter',callFunction);
H1.addEventListener('mouseleave',() => {
    H1.textContent = 'salom';
});


// btn.addEventListener('mouseover',()=>{
//     alert('salom Ruxshonaxon');
// });