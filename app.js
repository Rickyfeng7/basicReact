// function Person(props){
//         return(
//         <div className="person">
//             <h1>{props.name}</h1>
//             <p>Your Age: {props.age}</p>
//         </div>
//         );
//     }
//     let app = (
//     <div>
//         <Person name="Ricky" age="25"/>
//         <Person name="Emily" age="24"/>
//     </div>
//     );
//     ReactDOM.render(app, document.querySelector('#app'));

                //name is a sigle arguement
                //to pass more (name, age)
// const printMyName = (name) =>{
//     console.log(name)
// }

// // to add more printMyName("ricky", 25)
// printMyName("ricky")


// // more lines of code to multiply by 2 
// const multiples = (number) => {
//     return number * 2
// }

// console.log(multiples(2))
// // single line coding that multiples arguments
// const multiply = (number) => number * 2

// console.log(multiply(2))

//---// different ways to import files 
// const person = {
//     name:'ricky'
// }
// import default './person' 
// import prs from './person.js'

//---//  importing certain parts of the files 
// export const clean = () =>{..}
// export const baseData = 10
//--// nothing is marked 
//---// name import
// import {baseData} from './utility.js'
// import {clean} from './utility.js'
//--// importing a file then renaming it chicken can be anything
// import {chicken as chicken} from './utility.js'
//--// importing all from utility as a bundle
// import * as bundled from './utility.js'

// class Person {
//     // this is a property - variables attached to class 
//     name = 'ricky'
//     // this is a method - functions attached to class
//     call = () => {...}
// }

// const myPerson = new Person()
//     myPerson.call()
//     console.log(myPerson.name)

// class Human {
//   constructor(){
//     this.gender = 'male';
//   }
//   printGender() {
//     console.log(this.gender)
//   }
// }


// class Person extends Human {
//   // name of method with ()
//   constructor(){
//     super();
//     this.name = 'ricky';
//     this.gender = 'female'
//   }
//   printMyName (){
//     console.log(this.name)
//   }
// }

// const person = new Person();
// person.printMyName();
// person.printGender();

// // oop objected orented poperties 

// // can only inherat twice in js 

                                        //------------------------// ES7

                                        // class Human {

                                        //     gender = 'male';
                                        
                                        //   printGender = () => {
                                        //     console.log(this.gender)
                                        //   }
                                        // }


                                        // class Person extends Human {
                                        //   // name of method with ()

                                        //     name = 'ricky';
                                        //     gender = 'female';
                                        
                                        //   printMyName = () => {
                                        //     console.log(this.name)
                                        //   }
                                        // }

                                        // spread / rest operator === ...
// // spread - used to split up array eleemnts Or object properties
// const newArray = [... oldArray, 1,2]
// const newObject = {...oldObject, newProp:5}

// // rest - used to merge a list of function arguments into an array
// function sortArgs(...args){
//   return args.sort()
// }


// const numbers = [1,2,3]
// // if no ... numbers would = [[1,2,3],4,5]
// const newNumbers = [numbers, 4, 5]
// right now it console.logs [1,2,3,4,5]
// console.log(newNumbers) 
// const person = {
//   name: 'Ricky'
// };

// const newPerson = {
//   ... person,
//   age: 25
// }
// console.log(newPerson);
// const filter = (...chicken) => {
//     return chicken.filter(el => el === 1);
//   }
//   console.log(filter(1,2,3))

// Destructuring - easily extract array elements or object properties and store them in variables
// Array Destructuring
// [a,b] = ['hello','Ricky']
// console.log(a)//hello
// console.log(b)//Ricky
// object Destructuring
// {name} ={name:'ricky', age:25}
// console.log(name)//ricky
// console.log(age)// undefined
//------------------------
// array destructuring
// const numbers = [1, 2, 3];
// //console.log(1,2)
// // [num1, num2] = numbers;
// // console.log(num1, num2;
// //console.log(1,3)
// [num1, , num3] = numbers;
// console.log(num1, num3)

// conse number = 1;
// const num2 = number;

// console.log(num2)

// const person = {
//     name:'ricky'
//   };
//   const secondPerson = person;
//   console.log(secondPerson) - 'ricky
//   person.name = 'tony'
//   console.log(secondPerson) - 'tony'
//-------- makes a copy of the person
// const secondPerson =  {
//   ...person
// }
// simple js to double numbers
// const numbers = [1,2,3];

// const doubleNumArray = numbers.map((chicken) => {
//   return chicken * 2;
// })

// console.log(numbers)
// console.log(doubleNumArray)