const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const overlay = document.querySelector('.overlay');

openBtn.addEventListener('click', ()=>{
    overlay.style.display = 'flex';
})

closeBtn.addEventListener('click', ()=>{
    overlay.style.display = 'none';
})

window.addEventListener('click', ()=>{
    if(event.target === overlay){
            overlay.style.display = 'none';
    }
})