'use strict';

let username='lara';
let age=30;
let user='yes';
let res = user.toUpperCase();

let question =document.getElementById("question");
let result =document.getElementById("result");
let score =document.getElementById("score");
user=prompt('my favourite snak is banana?');

    if (user=='y' || user=='Y' || user=='YES' || user=='yes'){


    alert('this is wrong');}
   
     else{
     
        alert('this is correct');

     }


console.log("welcom");

console.log("guessing game about me");

let  userage=prompt("my age is 30?");

if (user=='y' || user=='Y' || user=='YES' || user=='yes'){


    alert('this is correct');}
   
     else{
     
        alert('this is wrong');

     }

 let userInput=prompt('does i love winter: ');


    if (user=='y' || user=='Y' || user=='YES' || user=='yes'){
        alert('this is correct');}
   
        else{
        
           alert('this is wrong');
   
        }
               
            let answer=15;
            let attempts=4;
            let input=prompt('guess number');
            while (parseInt(input)!==answer){
                if (!attempts){
                    alert ('you are out');
                    break;
                }
                if (parseInt(input)==answer){
                    userscore+=1;
                    break;
                }
                if (parseInt(input)>answer){
                    input=prompt('your guess is too high');
                    attempts-=1;
                }
                }
                alert('you guessed the number');
                console.log('you guessed the number');
            
            let states=[51,48,55,49]
            
            let attempts=6;
            let input=prompt('How many states in America?');
            while ((input)!=states[0]){
                if (!attempts){
                    alert ('you are wrong');
                    break;
                }
                if ((input)==states[0]){
                    score+=1;
                    break;
                }
                if ((input)!=states[0]){
                   input=prompt('no the answer is wrong');
                    attempts-=1;
                    
                }
                alert('yes your answer is correct');
                console.log('yes your answer is correct');
            }
            
let userout=prompt("enter your name");

alert("you win");
alert("welcome");