'use strict';

const allBtns = document.querySelector('.calc__buttons'),
      calcBtn = document.querySelector('.calc__btns'),
      everyBtn = document.querySelectorAll('.calc__btn'),
      calcFirstBox = document.querySelector('.calc__firstbox'),
      calcInput = document.querySelector('input[type="text"]');

window.addEventListener('DOMContentLoaded', function() {
    
    calcFirstBox.addEventListener('click', (e) => {

       

       
        
   
           
            everyBtn.forEach(function(item) {
                let everyItemNum = item.textContent;

                let objNumbers = {
                    zero: everyItemNum,
                    firs: everyItemNum
                }

                function sum(a) {
                    console.log(a);
                }
                
                
                 if(e.target === item) {
                    calcInput.value = everyItemNum
                    
                    const newFun = sum.bind(objNumbers, everyItemNum);
                    newFun()
                } 
            })
            
            
            

            
        

        
    })
    


/* 
    calcBtn.addEventListener('click', function(e) {
        console.log(e.target);
        const inputBox = calcInput.value;
                console.log(inputBox);
    }) */
    
   /*  
    calcInput.addEventListener('input' , function() {
        const inputBox = calcInput.value;
        console.log(typeof inputBox);
}) */

})