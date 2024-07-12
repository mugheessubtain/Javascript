

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

