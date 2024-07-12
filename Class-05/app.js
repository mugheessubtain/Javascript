// Sheet 8-11 and Question number 17
let num1=+prompt("Enter first number ");
let num2=+prompt("Enter second number");
let operation=prompt("Enter any opertaion you want to perform");

if(operation==="+"){
    document.write(num1+num2)
}
else if(operation==="-"){
    document.write(num1-num2)
}
else if(operation==="x"){
    document.write(num1*num2)
}
else if(operation==="/"){
    document.write(num1/num2)
}
else if(operation==="%"){
    document.write(num1%num2)
}