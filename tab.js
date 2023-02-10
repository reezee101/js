let num = document.querySelectorAll('.tab-content').length;
let btn = document.getElementsByClassName('tab-button');
let divTab = document.getElementsByClassName('tab-content');
for(let i = 0; i < num; i++){
    btn[i].addEventListener('click', function(){
        for(let j = 0; j < num; j++){
            btn[j].classList.remove('orange');
            divTab[j].classList.remove('show');
        }
        
        btn[i].classList.add('orange');
        divTab[i].classList.add('show');
    })
}