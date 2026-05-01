const input = document.getElementById('input');
const addBtn = document.getElementById('add-btn');
const removeBtn = document.getElementById('remove-btn');
const list = document.getElementById('task-list');

addBtn.addEventListener('click', ()=>{
    let taskValue = input.value;
    if(taskValue.trim() != ""){
        const newLi = document.createElement('li');
        newLi.textContent = taskValue;
        list.appendChild(newLi);
        input.value = "";
    }

    else{
        alert("Task yazin!!!");
    }
}) 