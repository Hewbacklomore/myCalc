'use strict';

const allBtns = document.querySelector('.calc__buttons'),
      calcBtn = document.querySelector('.calc__btns'),
      everyBtn = document.querySelectorAll('.calc__btn'),
      calcFirstBox = document.querySelectorAll('.calc__firstbox'),
      calcInput = document.querySelector('input[type="text"]');

window.addEventListener('DOMContentLoaded', function() {

    allBtns.addEventListener('click', (e) => {

       
            
            
            if(e.target.className === 'calc__btn') {
                
                        calcInput.innerHTML = '<button class="calc__btns">click!</button>'
              
             }


        
        
    })
    
    calcBtn.addEventListener('click', (e) => {
        if(e.target.className === 'calc__btns') {
                 
        calcInput.addEventListener('input', (e) => {
            let myInput = Number(calcInput.value);
            minus(myInput);


    })
        }
   
     })





    function btnInput() {
        everyBtn.forEach((item) => {
            console.log(item);
     })
    }

    function minus(num) {
        const newEl = document.createElement('div');
        newEl.innerHTML = `<div>${num + num}</div>`;
        newEl.style.backgroundColor = 'white';
        newEl.style.fontSize = '30px';
        newEl.style.color = 'red'
        calcInput.prepend(newEl);
    }


})