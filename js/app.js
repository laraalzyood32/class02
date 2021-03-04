'use strict';
console.log('welcom');
console.log('guessing game about me');
let username='lara';
let age=30;
let score=0;
let user=prompt('my favourite snak is banana?');
if (user==='y' || user==='Y' || user==='YES' || user==='yes') {
  alert('this is wrong');
} else if (user==='n' || user==='N' || user==='NO' || user==='no'){
  alert('this is right');
  score++;
  console.log(score);
}
let user2=prompt('my age is 30?');
if (user2==='y' || user2==='Y' || user2==='YES' || user2==='yes') {
  alert('this is right');
  score++;
  console.log(score);
} else if (user2==='n' || user2==='N' || user2==='NO' || user2==='no'){
  alert('this is wrong');
}
let user3=prompt('does i love winter?');
if (user3==='y' || user3==='Y' || user3==='YES' || user3==='yes') {
  alert('this is wrong');
} else if (user3==='n' || user3==='N' || user3==='NO' || user3==='no'){
  alert('this is right');
  score++;
  console.log(score);
}
let user4=prompt('does i love america ?');
if (user4==='y' || user4==='Y' || user4==='YES' || user4==='yes') {
  alert('this is wrong');
} else if (user4==='n' || user4==='N' || user4==='NO' || user4==='no'){
  alert('this is right');
  score++;
  console.log(score);
}
let user5=prompt('does i love chocolete?');
if (user5==='y' || user5==='Y' || user5==='YES' || user5==='yes') {
  alert('this is right');
  score++;
  console.log(score);
} else if (user5==='n' || user5==='N' || user5==='NO' || user5==='no'){
  alert('this is wrong');
}
let states=['california','miamy','arizona','utah'];
for(let i=0;i<6;i++)
  {
    let user8=prompt('guss state in america :');
    if (user8===states[0]||user8===states[1]||user8===states[2]||user8===states[3]){
      alert('You are Right!!');
      console.log('CORRECT');
      score++;
      break;
    }
    else {
      if (i===5){
        alert('you out');
      }else if (user8!==states[0] || states[1] ||states [2] || states[3]){
        alert('this is wrong');
      }
    }
  }
let answer=15;
for(let i=0;i<4;i++)
  {
    let user6=prompt('Guess the Number :');
    let user7=parseInt(user6);
    if (user7===answer){
      alert('You are Right!!');
      console.log('CORRECT');
      scoe++;
      break;
    }
    else {
      if (i===3){
        alert('you out');
      }else if (user7>answer){
        alert('Number is lower than that');
      }
      else if (user7<answer){
        alert('number is higher than that!!');
      }
      else if(user6!==Number) {
        alert(' enter Number');
      }
    }
  }
