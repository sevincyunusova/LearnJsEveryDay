const inputNum = document.getElementById('number');
const checkBtn = document.getElementById('check-btn');
const resultTxt = document.getElementById('result-txt');
const restartBtn = document.getElementById('restart-btn');

let compNum = Math.floor(Math.random() * 20) + 1;
console.log("komputer");
console.log(compNum);

checkBtn.addEventListener('click', () => {
    let userNum = inputNum.value;
    console.log(userNum);
 
    if(userNum === ""){
        alert("Ədəd Daxil Edin !");
    }

    else{
        if (userNum > compNum) {
        resultTxt.innerText = "Çox böyükdür!";
        document.body.style.backgroundColor = "#e74c3c";
    }

    else if (userNum < compNum) {
        resultTxt.innerText = "Çox kicikdir!";
        document.body.style.backgroundColor = "#e74c3c";
    }

    else {
        resultTxt.innerText = "Dogrudurr !";
        document.body.style.backgroundColor = "#2ecc71";
    }

    }

})

restartBtn.addEventListener('click', ()=>{
    inputNum .value= "";
    document.body.style.backgroundColor = " #1a1a2e";
    resultTxt.innerText = "";
})