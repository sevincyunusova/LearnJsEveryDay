const changeBtn =  document.getElementById('change-btn');
const colorName = document.getElementById('color-name')
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
changeBtn.addEventListener('click', ()=>{
    let color = "#";

    for(let i = 0 ; i < 6 ; i++){
        const randomIndex = Math.floor(Math.random()*hex.length);
        const nowColor = hex[randomIndex];
        color+=nowColor;
    }
            document.body.style.backgroundColor = color;
            colorName.innerText = color;

})