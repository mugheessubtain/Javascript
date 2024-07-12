

//array.reduce((init,items,index)=>{},initValue)

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = num.reduce((initialValue, items) => {
    return initialValue + items
}, 0)
console.log(sum);



let str = "Hello Js"
// let reverseStr=str.split("").reverse().join("")
let reverseStr = str.split("")
    .reduce((reverse, chr) => {
        return chr + reverse
    }, "")
console.log(reverseStr);


let sen = "the quick brown fox jumps over the lazy dog"
let vowels = ["a", "e", "i", "o", "u"];
let count = sen.split("")
    .reduce((vowcount, items) => {
        //     if(vowels.includes(items)){
        //         return vowcount+1
        //     }
        //     else{
        //         return vowcount
        //     }
        //   },0)  
        vowels.includes(items) ? (vowcount + 1) : (vowcount)
    }, 0)
console.log(count);




let str1 = "Saylani Mass Information Technology";

let abbr1 = str1.split(" ")
    .reduce((firstChrs, Words) => {
        return firstChrs + Words[0]
    }, "")

// function findAbbr(firstChrs, Words) {
//     return firstChrs + Words[0]
// }
console.log(abbr1);



let str2 = "Saylani Mass Information Technology";
let abbr2=str1.split(" ")[0]
console.log(abbr2[0]);
























// lab class nine


let ipEl = document.querySelectorAll(".count-input");
let h1El = document.querySelectorAll(".msg");
let errorEl = document.querySelectorAll(".error-msg");


function showMsg() {
    let formVal = ipEl[0].value
    if (isNaN(formVal)) {
        // console.error("You must enter a number");
        errorEl[0].innerHTML = "You must enter a number"
        errorEl[0].style.borderWidth = "1px";
        // errorEl[0].style.backgroundColor="black"
    }
    else {
        // console.log(formVal);
        h1El[0].innerHTML = Number(h1El[0].innerHTML) + Number(formVal);
        errorEl[0].innerHTML = "";
        errorEl[0].style.borderWidth = "0px";



    }
}
function abc() {
    let formVal = ipEl[0].value
    if (isNaN(formVal)) {
        // console.error("You must enter a number");
        errorEl[0].innerHTML = "You must enter a number"
        errorEl[0].style.borderWidth = "1px";
    }
    else {
        // console.log(formVal);
        h1El[0].innerHTML = Number(h1El[0].innerHTML) - Number(formVal);
        errorEl[0].innerHTML = "";
        errorEl[0].style.borderWidth = "0px";
    }
}
function clr() {
    ipEl[0].value="1";
    errorEl[0].innerHTML = "";
    h1El[0].innerHTML="";
    errorEl[0].style.borderWidth = "0px";

    
}




// index.html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <h1>Count Game</h1>
//     <div class="count-box">

//         <input type="text" name="count-input" value="1" class="count-input">
//     </div>
//     <div class="count-box">
//         <button onclick="showMsg()" class="plus">+</button>
//         <button onclick="abc()" class="minus">-</button>
//         <button onclick="clr()" class="clear">C</button>


//     </div>
//         <h1 class="msg"></h1>
//         <h3 class="error-msg"></h3>
//         <script src="app.js"></script>
// </body>
// </html>