/*
Objects {}
Variable with properties

*/

let person = {
    name: `Derek`,
    age: 35,
    inClass: true,
    instruments: [`guitar`, `bass`, `piano`, `drums`]
}


/*

1
how to access

1a
objects.propName


1b
object["propname"]
quotation marks are essential



2
Destructuring
unpacks values from objects or create variables from onjects



*** Object Methods ***
Object.method


~keys()
Object.keys()
provides all keys within the object - does not show value.

ex
const allProps = Object.keys(person)
console.log(allProps)


~freeze()
Object.freeze()
Does not allow changes to Object which is now frozen.

~push()

ex

let teacher = {
    name: `Damian`,
    classes:[],
    currentlyTeaching: true
}


teacher.classes.push(`Javascript`)
teacher.classes.push("Node.js")


teacher.classes.push("Node.js")





*/


// let person = {
//     name: `Jonathan`,
//     age: 32,
//     city: `Boca Raton`
// }

// console.log(person)





// console.log(person)
// delete person.name
// console.log(person)

// console.log(person.name)


// person.name = `derek`

// console.log(person.name)






//destructuring 
// let{name, age, inClass} = person

// console.log(name)
// console.log(age)

// as opposed to:

// console.log(person.name)
// console.log(person.age)

