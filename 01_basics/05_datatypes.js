//PRIMITIVE -> changes are not occured in original ,but a copy is provide
//7 types:

//String,Numbers,Boolean,null,undefined,Symbol,BigInt

//Note
//agar aap Symbol me same value bhi dete h to vah do variable compare krne pe equal nhi btaega
//e.g,

const a=Symbol('143')
const b=Symbol('143')
console.log(a==b);//-> it will give false

//REFERENCE(NON PRIMITIVE) -> meomry reference directly allocate

//Array,Objects,Functions

const c=["Ram","Shyam","shiv"]//->Array

{
    Name:"Sachin"
    Age:21       //->curly bracketcs ke ander ki cheez Objects hoti h
}

//Note: Non primitive ka datatype object hota h




