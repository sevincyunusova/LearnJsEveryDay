const changeBtn = document.getElementById('change-btn');
const resetBtn = document.getElementById('reset-btn');
const colorName = document.getElementById('colorName');

changeBtn.addEventListener('click', ()=>{
    let userColor = colorName.value;
    document.body.style.backgroundColor = userColor;
})

resetBtn.addEventListener('click', ()=>{
    document.body.style.backgroundColor = "white";
})