//ways to print in javascript 
console.log("amit");
console.warn("warn");
console.error("this is error");

/* javascript variables are the container which store the value*/
var num1=4
var num2=9
console.log(num1*num2);

/* this is way to multi line commment */


// datatypes of javascript//
//objects//
var marks={
    ravi:34,
    ram:12
}

// there are two types of data types//
// primitive: undefined,symbolic,null and boolean//
// refrence : arrays and objects//

var arr=[1,2,3,4]
console.log(arr)
  

//operators//
var a=10;
var b=9;
console.log('the sum of a and b',a+b);

//assignment operator//
var c=b;
c+=2;
console.log(c)

//logical operators//
var s=9;
var t=8;
//logical and
console.log(true && true); //and operator both condition must be true //
//logical or
console.log(true || false); // or operator only one condition will be ture//
//logical not
console.log(!false);
console.log(!true)

//function
function avg(a,b){
    return(a+b)/2
}
c=avg(4,5);
console.log(c)

//conditional statement
var age = 34
if(age>10){
    console.log('you are not kid')
}
else{
    console.log('you are not kid')
}

// if -else statement
if (age>18){
    console.log("you are adult ")
}
else if(age<18){
    console.log("you are kid ")
}
else if(age>50){
    console.log('you are senior citizen')
}

//array
var arr=[1,2,3,4,5,6,7];
//console.log(arr);
// for loop syntax
for(var i=0;i<arr.length;i++){
   // console.log(arr[i])
   if(i==2){
      continue;
   }
console.log(arr);
}

/*if you want or iterate the array .you can use the 
arr.forEach(function(element){
    console.log()
})*/

/*let j = 0;  
const ac =0;  const use when you don,t want to change in your program
ac=ac+1;
*/

// while condition 
let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

//do while loop
do{
    console.log(arr[j]);
    j++

}while(j<arr.length);


let myArr = ['amit','fan','table','ram','cooker'];
// array method
console.log(myArr) //it gives you length of the array
//myarr.pop();
//myarr.push();
//myarr.shift(); it use to remove the element in the first position
const newlen = myArr.unshift("sita");
console.log(newlen);

// string method 
let mystring ="desire and happiness ineterrelated with each other "
//console.log(mystring.indexOf("with"));
//console.log(mystring.lastIndexOf('each'))
//console.log(mystring.slice(0,5));
//d=mystring.replace("and","us");
//console.log(d)

let date=new Date();
//console.log(date)
//console.log(date.getTime())
//console.log(date.getHours())

//DOM MANIPULATION it stand of document object model
let elem=document.getElementById('click')
console.log(elem)

//if you want innerhtml elemClass[0].innerHTML[0]

//here we manipulate the class with id 
let elemclass = document.getElementsByClassName('container')
console.log(elemclass)
//elemclass[0].style.background= "green"
//now we add the class which define in styling
elemclass[0].classList.add("bg-primary")
console.log(elemclass[0].innerText)
//console.log(elemclass[0].innerHTML)
tn=document.getElementsByTagName('div')
console.log(tn)
create=document.createElement('p')
create.innerText="this is a create element"
tn[0].appendChild(create);
create2=document.createElement('b')
create2.innerText="this is replace child"
tn[0].replaceChild(create2,create);

//arrow function
function summ(a,b){
    return a+b;
}

//selecting query selector
sel=document.querySelector('.container')
console.log(sel)
sel2=document.querySelectorAll('.contianer')
console.log(sel2)


//events in javascript
// here we discuss abouth the event ;

function clicked() {
    console.log('the button was clickedd')

}
//window.onload=function(){
  //  console.log('the document was loaded')
//}

//for this you need id 
//firstcontainer.addEventListener('click',function(){
    //document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked</b>"
    //console.log('click count')

//})
//firstcontainer.addEventListener('mouseover',function(){
   // console.log('mouseover')
//})
//firstcontainer.addEventListener('mouseout',function(){
   // console.log('mouseout')
//})

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstcontainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML=prevHTML;
    console.log('mouse up when clicked on container');

})

firstcontainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked</b>"
    console.log('mouse down when clicked on container');

})


//arrow function
//function summ(a,b){
    //return a+b;
//}
//summ=(a,b)=>{
  //  return a+b;
//}
//settimer and setinterval

a=()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b> set interval fired</b>"
    console.log('i am your timeout')
}
//setTimeout(a,2000);
//clr=setInterval(a,2000); // it is used for repeatative and clr used clear the timeout interval timeout

// javascript local storage
//localStorage.setItem('name','amit')
//localStorage
//localStorage.getItem('name')
//localStorage.removeItem()
//localStorage.clear

//json

obj={name:'amit',length:1} // json interchange the data.it accept the double quote 
jso=JSON.stringify(obj)
console.log(typeof jso)
console.log(jso)
parsed=JSON.parse('{"name":"harry","length":1}')
console.log(parsed)
