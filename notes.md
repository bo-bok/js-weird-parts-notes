# Javascript - Understanding the Weird Parts (aka understanding the hows and whys)

The goal: learn how JS works under the hood

How JS works and why it works the way it does.

> 'don't imitate, **_understand_**'

You should know and understand the things that the people who wrote Angular and jQuery know and understand

Weird parts are often the most beautiful parts

## conceptual aside 1
* syntax parsers
* execution contexts
* lexical environments

1) syntax parser:
  A program that reads your code and determines what it does and if its grammar is valid

  - aka the middleman between your code and what the computer can understand.

  - your code isn't actually given to the computer, a translation is given to the computer

2) lexical environments
  Where something sites physically in the code you write

  - a lexical environment exists in programming languages in which **_where_** you write something is important

  - the complier **_cares_** about where you put things

3) execution context
  A wrapper to help manage the code that is running

- contains your code but also things beyond what you've written in your code.

- the section of code that is running

## conceptual aside
* name/value pairs
* objects

1) name/ value pairs
  A name which maps to a unique value

  - the name may be defined more than once, but can have only one value in any given (execution )context

2) object
  A collection of name/value pairs

  - **don't think of objects any more deeply than this**



## The global environment and the global object
Whenever code is run in Js, it's run inside an execution context (a wrapper). \

the base execution context is the global execution context.

special things the JS engine creates for you:
* global object
* this (a special variable)


### see it in practice
1 ) open a file which has no js code (i.e. you have a html doc linked to a .js file at this point)
2) console log 'this', see the object that comes back

why? Because we ran the file, the execution context was created by the JS engine

Term **Global** = 'not inside a function'

The global object in the browser is the 'window' object

Note: at the global level there is no outer environment (you're at the outermost layer)


## The Execution Context: Creation and 'Hoisting'

What hoisting is not
- the js engine is not physically moving your code around

What is happening?
Linked to the way the execution context is created:

  1. creation phase: global object, 'this', 'outer environment'
  2. execution phase (?)

Whilst the parser is going through your code and figuring this out, it's recognising where you've created variables, and where you've created functions. So it's also **setting up the memory space for variables and functions aka _"hoisting"_**

before _your_ code starts to be executed line by line, the js engine has already set aside memory space for the vars and functions you've created. SO THEY ALREADY EXIST IN MEMORY, so when the code begins to execute line by line, it can access them

Difference between hoisting in VARS and in FUNCTIONS

Functions: is placed in its entirity into memory (meaning function, it's name and the code inside)

Vars: the JS engine doesn't deal with assignment (=) until the code is executed, so it stores the NAME and var to memory but not its value - hence UNDEFINED. Undefined is a placeholder.

So don't rely on hoisting, you could end up in an undefined mess.

Hoisting shows us that the JS engine is taking my code and _making decisions_

## Conceptual aside: JS and 'undefined'

## The execution context: code execution
We already have the things set up in the creation phase. And now it runs your code line by line.


## Conceptual aside: single threaded, synchronous execution
Single threaded: one command at a time
Remember that JS isn't the only thing that's happening in the browser. So under the hood it might not be single threaded, but that's how it appears to us as developers, it's doing one thing at a time

synchronous execution: one at a time (and in order)


## Function Invocation and The Execution Stack
Invocation: running/ calling a function (in JS, with parenthesis () )


## Functions, context and variable environments
variable environments: where the variables live and how they relate to each other in memory


## Scope, ES6 and `let`
scope: where a variable is a available in your code. And if it's truly the same var, or a new copy

`let` - new way of declaring variables introduced in ES6

let allows the JS engine to use what's called _block scoping_

```
if (a > b) {
  return c; // ERROR - in memory but engine won't allow it
  let c = true;
}
```

You can declare a variable as with var, during execution phase where it is created - the variable is still placed into memory and set to undefined. BUT, you're not allowed to use it until the line of code is run during the execution phase that actually declares the variable  

declared inside a block (if, for, curly braces). Variable is only available inside that block for that period of time during the running code. I.e, for loop with let statement would give you a different variable in memory each time it runs. Allows for 'block scoping'. (we'll return to this later)

## What about asynchronous callbacks?

asynchronous: more than one at a time

code that's executing, and starts off other code executing. all of those code are executing _inside the engine_ at the same time

But JS is synchronous, it doesn't execute code asynchronously (click events, fetching data)

So how can JS handle asynchronisity?

Let's think about JS engine.
It's not just the JS engine (in the browser?), there's other engines working too. e.g.

rendering engine - rendering/ painting to the screen

parts responsible to - Http request/ responses

JS engine has HOOKS which means it can interact with these these other things

when we aschronously go out and make a request, **what happens** because that is being handled async by another part of the browser.

### Event Queue
full of events, notifications of events that might be happening.

The event queue gets executed when the execution stack is empty. If an event triggers a function, that function will be placed on the execution stack, (and when that function is executed it will go back and look at the event queue to see if there's more events to process?)

JS processed events in the order they enter the event queue (like the queue for the bus at highgate station vs the queue for the bus at brixton station)


## conceptual aside: types and JS

dynamic typing: you don't tell the engine what type of data a variable holds, it figures it out while you code is running

(a single) variables can hold different types of values because it's all figured out during execution

static typing:
you tell the engine/ compiler ahead of time what type of date you intend a variable to hold inside a variable. Input any other type of value after, and you'll get an error

### primitive(simple) types
primitive type: a type of data that isn't a single value (i.e., something that isn't an object(name/values pair))  

There are 6 primitive types in JS

* undefined: represents a lack of existence (better not to set a variable to this)
* null: represents a lack of existence (you can set a variable to this, to say that the value of a variable is equal to nothing)
* boolean: true or false
* number: _floating point_ number (there's always some decimals). You can fake integers, but under the hood it's always a floating point number
* string: a sequence of characters
* symbol: ES6

## conceptual aside: operators
operators: a special **function** that is syntactically (written) differently.

Generally, operators take two parameters and return one result

operators include `+ - > <`


## operator precedence and associativity
They both help us to determine which function runs first.

* operator precedence: which operators function gets called first

Functions are called in order of precedence, HIGHER precedence wins

* associativity: what order operators functions get called in: left-to-right or right-to-left

When functions have the _same_ precedence


## conceptual aside: coercion
coercion: converting a value from one type to another

happens quite often in Js because its dynamically typed

## comparison operators

#when dynamic typing and coercion be useful?

## Existence and Booleans

all things which denote a lack of existence revert to false (when using Boolean() function )

## default values

## Framework aside
a grouping of javascript code that is performs a task and is intended to be reusable.

We'll learn throughout the course how frameworks like jQuery and Angular use the concepts we've been talking about in their libraries.

## Objects and functions
How and object lives/ resides in your computers memory

Things an object can be connected to:

* primitive: boolean, string etc (called property)
* another object (called property)
* a function (called method)

think of objects as: sitting in memory and having reference to other things sitting in memory which are connected to it

## Objects and Object Literals
