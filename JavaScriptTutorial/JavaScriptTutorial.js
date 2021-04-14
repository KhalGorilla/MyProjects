/*
------Data Types------

var a=10;
var b="hello";
var c='C';
var d=5.25686;
var e=true;
var f=null;
var g=undefined;
let h=103;
*/

/*
------Mathmaticals Operaters------

var a=5;
var b=2;
var c;
c=a+b;
c=a-b;
c=a*b;
c=a/b;
c=a%b;
var d=20+5(35*2);
*/

/* 
------Escaping letiral------

\'  single quote
\"" double quote
\\  backslash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed

var a="hello\nComputer Science\'department\'";
*/

/*
------Concating String-------

var a="hello";
var b=a+"Anlel";

 */

 /*
 -----String methods------
 
var a="hello";

a.replace('h','d');
a.charAt(2);
a.concat(" Dear");
a.indexOf('e');
a.search('l');
a.match('hello');
a.substr(1,3);
a.substring(0,3);
a.slice(1,3);
a.toUpperCase();
a.toLowerCase();
a.toString();
a.valueOf();
a.split(" ");

*/

/*
-----if() Statment-----

var a=5;
var b=10;
if(a!=b)
    document.writeln("a+b=" +(a+b));
    else 
        document.writeln("a-b=" +(a-b));

*/

/*

-----Switch-Case Statment------

var a=1;
switch(a){
    case 1:document.writeln('One');
    break;
    case 2:document.writeln('Two');
    break;
    case 3:document.writeln('Three');
    break;
} 

*/

/*

------Loop------
var i=0;

1-for loop

for(i=0;i<=5;i++){
    document.writeln(i);
}

2-while loop

while(i!=5){
document.writeln(i);
i++;
}

3-do while

do{
    document.writeln(i);
    i++;
}while(i!=5)

*/

/*
------Functions------

function print(){
    document.writeln("hey");
}

*/

/*
-----Objects------
1-object literal

userObject={id:1,name:"Anlel",salary:5000};
document.write(userObject.name); 

2-reating instance of Object

var emp=new Object();
emp.id=1;
emp.name="Eren";
emp.salary=5000;
document.writeln(emp.name);

3-Object constructor

function emp(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}
e=new emp(1,"Mikasa",5000);
document.writeln(e.name);

!! We can use method(function) in Object

function emp(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
      
    this.changeSalary=changeSalary;  
    function changeSalary(otherSalary){  
    this.salary=otherSalary;  
    }  
    }  
    e=new emp(103,"Sonoo Jaiswal",30000);  
    document.write(e.id+" "+e.name+" "+e.salary);  
    e.changeSalary(45000);  
    document.write("<br>"+e.id+" "+e.name+" "+e.salary); 
    */
   