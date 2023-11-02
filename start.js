//this is bad 
number = 1;

//outdated 
var number2 = 2;

var number2 = "string";

//good ones 
const MyName = "Frank";

let MyNumber = 10;

MyNumber = 20.5;

let text = `Hello my name is ${MyName}`

let MyBool = false;

if(MyBool == false){ //if statement 
    //do something
}

/* multi 
line 
comment 
*/

let NewNum = 0;
//loops
while(NewNum < 5){
    NewNum++;

    console.log(NewNum);
}
//i++ = i+1  i-- = i-1
for(let i = 0; i <= 10; i++ ){
    console.log(i);
}
//message user 
alert("Hello");
//prompt = input (like in python)
let colour = prompt("Favourite colour?");

let answer = confirm("Do you like dogs?");
//like def
function Test(num1,num2){
    return num1 + num2;
}

