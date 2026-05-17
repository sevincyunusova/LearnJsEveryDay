const questions = document.querySelectorAll('.question');

questions.forEach(function(btn){
    btn.addEventListener('click', function(){
        const answer = this.nextElementSibling;
        const isOpen = answer.style.display === 'block';

        document.querySelectorAll('.answer').forEach(function(item){
            item.style.display = 'none';
        })  
        if(!isOpen){
            answer.style.display = 'block';
        }
    })
})