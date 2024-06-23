let score="33abc"
console.log(typeof score)

let value=Number(score)//due to Number(score) it is showing no. type 
console.log(typeof value)

console.log(value)//ab yaha ye NaN dikha rha h it means not a number so 33abc is not a number

//*************** */

let a=undefined
console.log(typeof a)//Undefined

let b=null
console.log(typeof b)//object

let c=true
console.log(typeof c)//boolean

let d=1;
let e=Boolean(1)
console.log(e)//true

let f=33
let g=String(f)
console.log(typeof g)//NUMBER TO STRING

//NOTE
//1-> true
// 0-> false
//""->false
//"sachin"->true