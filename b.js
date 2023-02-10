
var arr=[1,2,3];
console.log(arr);
//concat
var arr1=[4,5,6]
var arr2=arr.concat(arr1)
//copy within
console.log(arr2)
arr.copyWithin(1,0,2) 
console.log(arr)
//entries
arr4=[12,17,18]
let f=arr4.entries()
for (let x of f)
{
    console.log (x);
}
//every
var num=[10,20,49]
console.log(num.every(fn))

function fn(a)
{
    return a%10==0;
}
//fill

var music=["arr","u1","harris"]
music.fill("ani")
console.log(music)
//filter
var num1=[10,20,49]
console.log(num1.filter(fn))

function fn(a)
{
    return a%10==0;
}
//find
var num2=[10,20,49]
console.log(num2.find(fn))

function fn(a)
{
    return a%10==0;
}
//findindex
const even3 = [11, 22, 32, 42]
const final = even3.findIndex(even)
function even(even2)
{
    return even2%2==0
}
console.log(final)

//forEach

const numbers = [1,2,3,4,5,6];
numbers.forEach(myFun)

function myFun(value, index, arr9) {
  arr9[index] = value * 10;
  console.log(arr9[index])
}

//Array.from()
const arr10 = Array.from("kawin")
console.log(arr10)

//includes()
arr11 = ["kawin", "kumar", "ragul", "gopi", "mohan"];
console.log(arr11.includes("kumar",1))

//index()
const arr12 = ["kawin", "kumar", "ragul", "gopi", "kumar"];
let index = arr12.indexOf("kumar",3);
console.log(index)

//isArray()
const arr13 = ["kawin", "kumar", "ragul", "gopi", "kumar"];
let result = Array.isArray(arr13);
console.log(result)
//join
var alp=["a","b","c"]
console.log(alp.join())
//keys
var a=[1,3,5]
keys=a.keys()
let t=""
for(let v of keys)
{
    t+=v+ " "
}
console.log(t)
//lastindexof
let na=["ragul","kawin","nithish","ragul"]
console.log(na.lastIndexOf("ragul"))
//length
console.log(na.length)
//map
var num5=[10,20,49]
console.log(num5.map(fn1))

function fn1(a)
{
    return a*2;
}
//pop
var a1=[12,13,14]
console.log(a1.pop());
console.log(a1)
//push
a1.push(6)
console.log(a1)
//slicing
var veg=["tomato","onion","potato"]
console.log(veg.slice(0,2))
//splice
var hero=["ironman","ca","hulk"]
hero.splice(1,0,"spidy")
console.log(hero)
//sort
var b1=[12,4,2,1,3,5]
b1.sort(function(a,b)
{
return a-b;}
)
console.log(b1)
//unshift
na.unshift("kitty")
console.log(na)
//shift
na.shift()
console.log(na)
//tostring
var str =["tam","eng"]
console.log(str);
t=str.toString();
console.log(t);
//valueof
let val=["ragul","jeeva"]
v=val.valueOf();
console.log(v);

//reduce
const arr21 = [1,2,3,4,5];
const res3 = arr21.reduce(getSum, 0);

function getSum(total, num) {
  return total + num };
console.log(res3)

//reduce right
const arr22 = [1,2,3,4,5];
rr = arr22.reduceRight(myFunc);

function myFunc(total, num) {
  return total - num;
}
console.log(rr)

//reverse
const num12 = [1,2,3,4,5];
console.log(num12.reverse());
//some
const even4 = [12, 22, 32, 42];

console.log(even4.some(checkEven))

function checkEven(even) {
  return even%2==0;
}