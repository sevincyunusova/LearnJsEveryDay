const btn = document.getElementById('change-btn');
const text = document.getElementById('color-name');
const colors = ['red','green','blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'cyan', 'magenta'];

btn.addEventListener('click', ()=>{
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[randomIndex];

    document.body.style.backgroundColor = selectedColor;
    document.getElementById('color-name').innerText = selectedColor;
})