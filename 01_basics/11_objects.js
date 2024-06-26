//singleton->agar hum constructor se object bna rhe h to singleton bnega
//or yadi literals se bna rhe h to singleton nhi hoga

//object literals
const mysym=Symbol("key1")
const a={
    name:"Sachin kumar",
    year:2024,
    email:"hello@gmail.com",
    [mysym]:"key1"

}
console.log(a["name"])