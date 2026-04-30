const btn = document.getElementById('color-change-btn');
const text = document.getElementById('color-name');
const colors = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Pink", "Cyan", "Lime", "Gold"];

//  <!-- Səhifədə bir düymə və bir yazı (<span> və ya <h2>) olacaq. Düyməyə hər dəfə klikləyəndə, sənin əvvəlcədən təyin etdiyin rəng siyahısından (massivdən) təsadüfi bir rəng seçilməli və həm arxa fon, həm də yazı o rəngin adını göstərməlidir. -->

btn.addEventListener('click', ()=>{
    const randomIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomIndex];
    document.body.style.backgroundColor = color;
    text.innerText = color;
})