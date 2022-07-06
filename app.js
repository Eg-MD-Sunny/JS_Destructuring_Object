//--Destructuring Object
//--Example-01  
var user = ["Bongo",27,"Dhaka"];  //---Destructuring Array [Trying to rember again]
var [name,age,city] = user;
console.log(name);


//--Example-02
var user = {
    name:'Sabrina Akter',
    study:'Bsc',
    city:'Dhaka'
}
var {name,study,city} = user;
console.log(name);


//--Example-03
var user = {
    name:'Sabrina Akter', //----Output showing using short name
    study:'Bsc',
    city:'Dhaka'
}
var {name : n,study : s,city : c} = user;
console.log(n);
console.log(s);
console.log(c);












