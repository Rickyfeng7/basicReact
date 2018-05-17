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
const printMyName = (name) =>{
    console.log(name)
}

// to add more printMyName("ricky", 25)
printMyName("ricky")


// more lines of code to multiply by 2 
const multiples = (number) => {
    return number * 2
}

console.log(multiples(2))
// single line coding that multiples arguments
const multiply = (number) => number * 2

console.log(multiply(2))

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

