//variables

//string
var myName = "Sebastian";

//numbers
var age = 27;
var price = 12.4;

//booleans
var imTall = true;

//Arrays
var studentsNames =["Sebastian", "Yerok", "Thomas", "Raul", "Kermit"]; 

console.log(studentsNames[0])
//Arays index starts at 0




//flow control
//if(condition){some code}
if(12>3){
    console.log("older")
}
else{
    console.log("is smaller")
}

//loops
console.log(studentsNames[0])
console.log(studentsNames[1])
console.log(studentsNames[2])
console.log(studentsNames[3])
console.log(studentsNames[4])

for(var index = 0; index < studentsNames.length; index++){
    console.log(studentsNames[index]);
}
//index++ = index=index+1

//studentsNames.forEach(function(){
//    console.log("hello");
//})




//functions



//function sayMyName(){
//    
//    console.log(myMotherName);
//    
//}
//console.log(myMotherName); //var input next line
//var myMotherName = "Filipiak";
//
//sayMyName()
//sayMyName()

//parameters


function sayMyName(x){
    
    console.log("my name is "+ x +"leon");
}

sayMyName("Sebastian")

function printAllNamesInThisFuckingArray(myArray){
    
   studentsNames.forEach(function(element){
    console.log(elements);
})
       
}

printAllNamesInThisFuckingArray(["raul","yerok"]);



































