// // Execution context
// var a = 'Hello World'!;
//
// function b() {
//   // empty function
// }
//
// // in JS, when you create variables and functions and your not inside a function, they get attached to the global (window) object, e.g.
//
// console.log(a);
// // returns 'Hello World!'
//
// console.log(window.a);
// // also returns 'Hello World!'


// // The Execution Context: Creation and 'Hoisting'
// //
// var a = 'Hello world!';
//
// function b(){
//   console.log('called b!');
// }
// b();
// console.log(a);
// // returns 'called b!' 'Hello World!' as expected
//
// // Hoisting example
// b();
// console.log(a);
//
// var a = 'Hello world!';
//
// function b(){
//   console.log('called b!');
// }
// // returns 'called b!' 'undefined'
// // in most programming languages this would throw an error, because the code is read top-to-bottom. However, it still works in JS, giving us a value of 'undefined'
//

// // Conceptual aside: undefined
// // Undefined and 'not' defined ARE NOT THE SAME.
//
// // Undefined is a keyword, a value. IT IS TAKING UP MEMORY SPACE. 'Not defined' does not exist in memory.
//
// var a; //placed into memory and initially set to undefined, so here is the default.
//
// // If I didn't 'declare' the var, i'd get 'not defined'. When the JS engine went through, it didn't see any 'var a' (referenced later in function), so it didn't set up any memory space for it.
//
// if (a === undefined) {
//   console.log('a is undefined')
// }
// else {
//   console.log('a is defined')
// }
//
// // Tip: NEVER set a value to undefined(this is valid JS). It's better to have it as something which means 'I as a developer have never set this value' - helps with debugging.
//
//
// // ## The execution context: code execution
//
//
// // ## Function Invocation and The Execution Stack
// function b() {}
//
// function a() {
//   b(); // woah, hold up, now I have another new execution context. Let me look at this. When I've gone through b, I'll pop it off the top of the stack and go to a. Woah, great i've worked through a. Great! now I'll go to the next highest execution contenxt (the new top of the stack), then I'll pop it and and you'll be left with an just the global execution context
// }
//
// a(); // when we call a, a new execution context is created and put on the execution stack



// // ## Functions, context and variable environments
// function b() {
//   var myVar; // myVar = undefined
//   console.log(myVar)
// }
//
// function a(){
//   var myVar = 2; //myVar = 2
//   console.log(myVar)
//   b(); // undefined
// }
// var myVar = 1; //myVar = 1 - global!
// console.log(myVar)
// a(); // myVar = undefined
//
// // every execution context has it's own variable environment
//
//


// // The Scope Chain
//
// function b() {
//     console.log(myVar) //myVar = 1
//     // why not undefined? because it's sees what's avaialable to it through the reference to the outer environment
// }
//
// function a(){
//   var myVar = 2;
//   b();
// }
//
// var myVar = 1;
// a();
//
// // act of searching, this chain of references to outer environemtns (stack could be TALL, it have to go a long way down the CHAIN). This chain is called the scope chain
// //
// // scope - is where can I access those variables?
// // chain - links of outer environment references
//
//
// // functions inside functions and the scope chain
//
// function a() {
//
//   function b() {
//     console.log(myVar);
//   } // changed the lexical environment, its environment is different
//
//   var myVar = 2;
//   b();
// }
//
// var myVar = 1;
// a();
// b(); // can't call b() at the global level because the global execution environment will look for the function b() but that was never added to its var environment because it's inside a(). It didn't look inside function a, it jsut kept going. Function a was visable lexically, but not b
//
// // who created me aka who's creation do I rely on? I'll look to that to find answers (aka var values)  (getting biblical here LOLLL)

//
// // operators
// var a = 3 + 4; // + is an operator
// console.log(a);
// // how does the JS engine know that my intention was to add 3 and 4?
//
// // infix notation - the function name, the operator sits between the two parameters
//
// // aka instead of
//
// +(3, 4);
// function + (a, b) {
//   return; // add
// }
//
// // we can do
//
// 3 + 4
//
// + 3 4 // prefix notation
// 3 4 +// postfix notation
//
// // inside these functions (operators), is prewritten functions that handle common operations for you
//
// // ## operator precedence and associativity
//
// var a = 3 + 4 * 5 // which gets called first - look at the operator precedence table on MDN
//
// // remember, operators are functions and JS can only process one function at a time
//
//
// // associativity
// var a = 2, b = 3, c = 4;
//
// a = b = c; // assignment operators are right-associative, so a = 4, b = 4, c = 4;


// // ## coercion
// // what happens if a pass an operator two different types?
//
// var a = 1 + '2'; // returns 12
//
// // looks like a number but is actually a string because it has treated it as if we wrote:
//
// var a = '1' + '2' // coerced the number and concatonated the values
//
// // in memory 1 and '1' look NOTHING along


// // # comparison operators
// console.log(1 < 2 < 3); // returns true
// console.log(3 < 2 < 1); // returns true
//
// // how can they ^ both return true?
// // answer: operator precendence. two < operators - same predenence. Associativity: left- right
//
// console.log(false < 1); // mixed types so we JS engine tried to convert the boolean to a number.
// // false as number is 0
// // so what we're getting it
// console.log(0 < 1);
//
// // so to a human the below looks like it should obviously be false
// console.log(3 < 2 < 1);
// // but JS engine has a good reason for this and it does actually make sense
//
// // == leads to unpredictability e.g.
// Number(null); // result 0
// null == 0; // result false
// null === 0; // result false
//
// // tip: use === (strict equality) by default
//


// ## Existence and Booleans
// var a;
//
// // goes to the internet and looks for a value
// //
//
// if (a) { // it will try to convert anything inside an if to true or false value
//   console.log('something is there');
//   // will fail because a is undefined (aka false)
// }


// // ## default values
// function greet(name) {
//   name = name || <'Your name here'>; // default value
//   // will return the first one that can be coerced to true
//   console.log(name);
//   console.log('Hello' + name);
// }
//
// greet(); // won't throw an error, will return undefined. I don't care, the value is already in memory, you simply didn't give me a new one!
// greet('Jessica'); // returns 'Hello '
//


// // ## Framework aside
// // Look at 03:00 for code snippet.
//
// // when using multiple libraries
// // file 1
// libraryName = "Lib 1"
// // file 2
// libraryName = "Lib 2"
// window.libraryName = window.libraryName || "Lib 2";
//

// // ## Objects and functions
// var person = new Object();
//
// person["firstname"] = "Jessica";
//
// // it doesn't exist yet, so when I use = it's going to create that spot in memory and give it a name
// // this object will get a reference to the address of that location in memory
//
// // computed member access operator []. Takes the object(person), then the property name(firstname) and looks for the existence of the peoprty on the object
//
// var firstNameProperty = "firstname";
// console.log(person[firstNameProperty])
//
//
// // cool thing
// var firstNameProperty = "firstname";
//
// // why is [] often used in frameworks and libraries(as opposed to the clearer . notation)? because you can dynamically decide what property you're trying to get (because you can base it off a string)
//
// // can then use this variable
// console.log(person);
// console.log(person[firstNameProperty]);
//
// // the other approach . notation (member access). Members of the object (fingers and toes are members of your body)
//
// console.log(person.firstname);
//
// person.address = new Object(); // object in an object
// person.address.street = "11 main street"; //sub-object
//
// console.log(person["address"]["state"]);
//
// // dot operator preferred(cleaner to human eye, easier to de-bug), unless you really need other apprach
//
// // ## Objects and Object Literals
// // Better way to make a new object
//
// var Jessica = {
//   firstname: 'Jessica',
//   lastname: 'Salmon',
//   address: {
//     street: '11 Main St.'
//   }
// };
// // can set initial properties/ values on the object at the same time as creating it and it's treated as one line of code
//
// // js enginge when parsing the syntax, it assumes that you are creatinf an object
// //
//
// // can pass objects into functions
// function greet(person) {
//   console.log('Hi' + person.firstname);
// }
//
// greet(Jessica);
//
// greet({
//   firstname: 'Mary', lastname: 'Doe'
// }); // can pass this to a function on the fly
//
// // can also:
// Jessica.address2 = {
//   street: '333 Second St'.
// }
