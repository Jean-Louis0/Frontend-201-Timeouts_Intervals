/* a function that mimics the behaviour of a typewriter */


/* --------------------------------------------------------- */

// let interval
// let times = 3
// const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// var textarealabel = document.createElement('div')
// textarealabel.classList.add('tlabel')
// const labelfield = document.createElement('label')
// labelfield.textContent= letters
// textarealabel.appendChild(labelfield)
// document.body.appendChild(textarealabel)

// const textfield = document.createElement("textarea")
// document.body.appendChild(textfield)
// function typewriter(){
//     const randomIndex =  Math.floor(Math.random() * letters.length)
//     textfield.value += letters[randomIndex];
//     times++
//     interval = setTimeout(typewriter, randomIndex)
// }

// typewriter();

/* Using setInterval display the word prout one character at a time (one letter per second). 
Once the word is written on the screen clear the interval. */

/* ---------------------------------------------------------------------------------------- */

// let times = 0
// let word = "prout"

// function displayWord() {

//     if (times >= word.length) {
//         clearInterval(setInterval(displayWord, 1000));
//       } 
//     else {
//         console.log(word[times]);
//         times++;
//     }
// }

// setInterval(displayWord, 1000);


/* Write a function that displays every second that has passed on the page since it was opened. 
The display should be refreshed every second. 
If 60 seconds are elapsed, write "a minute has passed", 
then "2 minutes have passed" (for 120 seconds and more), etc. */

/* --------------------------------------------------------------------------------------------- */

// let times = 0
// const labelfield = document.createElement('label')
// function displayElapsedTime() {
//     times++

//     if(times % 60 == 0){
//         let minutes = times/60
//         labelfield.textContent= `${minutes} minutes have passed`
//     }
//     else{
//         labelfield.textContent= `${times} seconds have passed`
//     }

//     document.body.appendChild(labelfield)
// }


// setInterval(displayElapsedTime, 1000)
