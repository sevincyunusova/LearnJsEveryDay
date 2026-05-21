const track = document.getElementById('track');
const images = document.querySelectorAll('.card');

setInterval(() => {
    track.appendChild(track.firstElementChild);
}, 5000);