let newClass = document.querySelectorAll('span');
console.log(newClass);

for(let index = 0; index <= newClass.length; index++){
    newClass[index].addEventListener('click',function(evt){
        let currtClass = this;
        if (currtClass.classList.contains('box-red')){
            // currtClass.classList.remove('box-red');
            currtClass.classList.add('box-green');
        }else if(currtClass.classList.contains('box-green')){
            // currtClass.classList.remove('box-green');
            currtClass.classList.add('box-blue');
        }else {
            currtClass.classList.remove('box-blue');
            currtClass.classList.add('box-red');
        }
    })
}
