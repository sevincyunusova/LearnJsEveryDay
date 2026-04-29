const lamp = document.getElementById('lamp');

lamp.style.backgroundColor = "gray";
document.body.style.backgroundColor = "beige" ;

lamp.addEventListener('click' , ()=>{
    if(lamp.style.backgroundColor === "gray"){
        lamp.style.backgroundColor = "yellow";
        document.body.style.backgroundColor = "black" ;
    }
    else{
        lamp.style.backgroundColor = "gray";
        document.body.style.backgroundColor = "beige";
    }
})