const prevBtn = document.getElementById('prev-btn');
const track = document.querySelector('.track');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', ()=>{
    track.prepend(track.lastElementChild);
})

nextBtn.addEventListener('click', ()=>{
    track.append(track.firstElementChild);
})