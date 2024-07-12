// function minus(num1,num2){
//     console.log(num1-num2);
// }
// minus(550,465);

// function sum(num1){
//     console.log(((num1*100)/550));
// }
// sum(465)

// let h1El = document.querySelectorAll("h1");
// let h3El = document.querySelectorAll("h3");


// function greetUser(greetmsg,username){
//     h1El[0].innerHTML=greetmsg+" "+username;
// }
// greetUser("Assalamualiakum","Mughees")


// function greeting(userName){
//     h1El[0].innerHTML="Assalamualaikum" +" "+ userName;
// }
// greeting(prompt("what is your name"))


// function displayMsg(greet,firstName,lastName,message){
//     h1El[0].innerHTML=greet+" "+firstName+" "+lastName;
//     h3El[0].innerHTML=message
// }
// displayMsg("Assalamualiakum","Mughees","Subtain","Maintain your percentage")




// function calculate(num1, num2, operator) {
//     if (operator === "+") {
//         console.log(num1 + num2);
//     }
//     else if (operator === "-") {
//         console.log(num1 - num2);
//     }
//     else if (operator === "*") {
//         console.log(num1 * num2);
//     }
//     else if (operator === "*") {
//         console.log(num1 * num2);
//     }
//     else if (operator === "/") {
//         console.log(num1 / num2);
//     }
//     else if (operator === "%") {
//         console.log(num1 % num2);
//     }

// }


// calculate(25, 25, "%")


// let num1=+prompt("enter first number")
// let num2=+prompt("enter second number")
// let operator=prompt("write an operation you perform")


// function calculate(num1, num2, operator) {
//     if (operator === "+") {
//         console.log(num1 + num2);
//     }
//     else if (operator === "-") {
//         console.log(num1 - num2);
//     }
//     else if (operator === "*") {
//         console.log(num1 * num2);
//     }
//     else if (operator === "*") {
//         console.log(num1 * num2);
//     }
//     else if (operator === "/") {
//         console.log(num1 / num2);
//     }
//     else if (operator === "%") {
//         console.log(num1 % num2);
//     }

// }

// calculate(num1,num2,operator)



// let firstName=prompt("enter your first name")
// let lastName=prompt("enter your last name")

// function titleCase(firstName,lastName){
//     let firLetter=firstName.charat(0).toUpperCase();
//     let rest=firstName.slice(1).toLowerCase();
//     firstName= firLetter+rest
     
//        let lastLetter=lastName.charat(0).toUpperCase();
//        let restchrs=lastName.slice(1).toUpperCase();
//        lastName=lastLetter+restchrs;
//     finalName=firstName+lastName

//        console.log(finalName);
// }

// titleCase(firstName,lastName)




// function titleCase(firstName){
//         let firLetter=firstName[0].toUpperCase();
//         let restF=firstName.slice(1).toLowerCase();
//         let first=firLetter+restF
// console.log(first);



// }
// titleCase("mughees")


// function check(sentence,word){
//     let sen=sentence.toLowerCase();
//     let wordindex=word.lastindexof(word);
//     if(wordindex===){}
// }

// let num = 13376879;
// let numString= num.toString();
// let numArray = numString.split('');
// for(let i = 0;i< numArray.length;i++){
// if(numArray[i] % 2 !== 0 && numArray[i + 1] % 2 !== 0){
// numArray [i] += '-';
// }
// }
// let result  = numArray.join('');
// console.log(result)
























let num=+prompt("Write any six digit number")
let str=num.toString();
let strEl=str.split("");
// console.log(strEl);
for(let i=0;i<strEl.length;i++){
    if(strEl[i]%2!==0 && strEl[i+1]%2!==0){
        strEl[i]+="-"
    }
}
let ans=strEl.join("");
console.log(ans);

