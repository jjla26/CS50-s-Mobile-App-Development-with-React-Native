Hello.
Welcome back for Lecture One.
And this week, we're going to be diving into more JavaScript
and talking about ES6.
So previous lecture, we talked about a few different topics, types being one.
Who can name some types that we talked about last week?
Anyone?
AUDIENCE: String.
SPEAKER 1: A string.
AUDIENCE: A number.
SPEAKER 1: A number.
AUDIENCE: Null.
SPEAKER 1: Null.
AUDIENCE: Undefined.
SPEAKER 1: Undefined.
AUDIENCE: Object.
SPEAKER 1: Object.
And---
AUDIENCE: A symbol.
SPEAKER 1: A symbol.
And-- true or false.
A boolean.
Yeah.
We talked about coercion, which was the process by which we
change one type to other.
Objects, of course, the non primitive type.
Prototypal inheritance.
Who can remember what prototype inheritance was?
This was one of the complex topics from last week.
Yeah.
AUDIENCE: [INAUDIBLE]
SPEAKER 1; Yeah, exactly.
It's the process by which a more complex object can have methods and properties.
We talked about scope which is basically how long a variable lives.
How JavaScript gets executed.
The global object, and I left you on a cliffhanger about closures.
But before we dive into closures, I just want
to give a little bit of more background on what
these ES5, ES6, 2016, 2017, ESNext, what are those?
So we talked a little bit last week on what ECMAScript was.
ECMAScript is basically the spec for this language.
It defines exactly what this language should do
and how much of these functions behave.
And JavaScript is actually an implementation of ECMAScript spec.
And so which of these versions do environments support?
Because every year, roughly, a new version comes out.
So this is a little bit of a tricky question.
It's kind of the bane of all JavaScript programmer's existence.
Because we really don't know exactly what environment
our code is going to be run in.
And therefore, we don't really know exactly what is supported.
And so, generally, what we do is the convention
is to assume that the environment supports all of ES5.
And so what are we supposed to do about these future language things
that we can use?
A big thing in JavaScript right now is what's called a transpiler.
A transpiler is basically some code that goes from newer language features
and actually makes it backwards compatible with the ES5 spec.
So, basically, it takes all of your new language, any functions you
are using that is defined by ES6, ES2016 and beyond,
and actually turns them into code that's basically ES5 code.
So some of these, the most popular one is probably Babble.
But other ones you may have heard of are TypeScript, or CopyScript, etc.
So which syntax should we use?
Generally, what people do is they use the future syntax
because either the language and the environments will catch up,
or we just transpile things back to ES5.
Does that makes sense to everybody?
So in course, we will be using a lot of ES6 and beyond features.
Cool.
So going back to last week, we talked a bit about closures.
At least I showed you exactly what the problem behind closures were.
But to explain exactly what they are it's functions basically
have access to variables that are around when functions are defined.
And these functions actually retain the ability
to use variables declared by a parent function
even after that parent function has returned and possibly disappeared.
And this is possible because of JavaScript scoping.
And so let's see an example of how this works in action.
So last week I talked about a possible bug with using closures.
And let me just type that out really quick.
So we had a function.
And basically what it does is it creates a new array
and pushes a bunch of functions to that array.
And so let's do--
So does everybody following along what's going on here?
So, basically, I'm creating a new empty array.
I'm iterating through the numbers 0 through 5 and pushing on to a function
to that array, which will cancel that log i.
And then I'm going ahead and invoking that and storing the return
as function array.
And I'm going in and invoking the first one.
And as we saw last week, even though we expected this to console.log0,
it actually console logs 5.
And so this week, we're going to go ahead and explain
exactly why that happens.
So before we do that, let's actually explore closures a little more deeply.
And so what did we say a closure was?
A closure is basically a function that has access to some variables that
might have already left scope.
So, basically, let's create a function--
OK.
So what I just did here is I wrote a function that
declares a variable called message.
This message is just set to the string called hello.
And then we create a new function that console logs a variable called message.
And then return that function.
And so at line 11, we invoke that.
And so at line 12, what is the value of message here?
Can anybody tell me?
AUDIENCE: [INAUDIBLE]
SPEAKER 1: Yeah. it's going to actually error.
Because there's no such thing called message.
Yet so let's just confirm that.
We have an error because message is not defined.
But now let's comment the out and run the code.
And what we see is that say hello will actually console.log that message.
And so let's dive a little bit more deeply into this.
So we see that type of message at that point is undefined.
And if we console.log say hello is is console logging
a variable called message.
And when we invoke that it prints hello.
And so that there is a closure.
Because we can see that the variable called message when say hello
is invoked does not actually exist.
Yet say hello still has access to this message up here.
Because it was within scope when that function was created.
And so that is what a closure is.
Does that make sense to everybody?
Yeah.
AUDIENCE: [INAUDIBLE]
SPEAKER 1: No.
So the question was, would it make a difference
if rather than having a const here we had a var or a let,
and, no, it does not.
Any other questions about this closure example?
No.
So and now let's go ahead and explore exactly why this bug exists.
And so here what is the value of i?
Can anybody tell me?
Is it 4?
Right here at line 13.
Yeah.
AUDIENCE: [INAUDIBLE]
SPEAKER 1: Yeah, it's going to be undefined, right?
Just because it's not actually within scope at that point.
But as we talked about in the last example, because of closures,
functions that are declared have access to their variables
at the point of declaration.
And so now right here what is the value of i?
Can anybody tell me?
AUDIENCE: Five.
SPEAKER 1: It's going to be five, right?
Because we iterated through the numbers 0 and 5.
And by the time we got to 5, that was where I was left.
And since it was declared with var, a var's lifecycle
is basically until the function ends.
And so line 8 right there, i has a value of 5.
And so that's what gets wrapped up in the closure at line 5.
And so when we invoke line 15, it now prints out 5.
Does that make sense to everybody?
It's a little bit strange.
It's hard to wrap your head around.
But does that kind of makes sense to why that's happening?
So if we instead of using a var here, because var's lifecycle
is from when it's declared until the end of its function, so line 11.
What happens if we instead use a let?
So what is the scope of a variable declared with the let keyword?
Anybody remember from last lecture?
AUDIENCE: [INAUDIBLE]
SPEAKER 1: Yeah, exactly.
It's until the end of the code block.
And so this variable called i, it ends at line 6.
And so if we tried to console.log i here, we get oh, it does not exist.
And so i for each time this four loop runs, its scope is only from line four
to line six.
Therefore, this one, the closure will actually work as expected.
So when we run this, it prints out a 0 as expected.
Does that make sense to everybody?
It is a little bit weird.
And I'm about to show you an alternate way to create closures.
But does this difference in scoping make sense
to why it would print a five versus a zero?
AUDIENCE: [INAUDIBLE] Sorry, can I ask a question.
SPEAKER 1: Of course.
AUDIENCE: [INAUDIBLE]
SPEAKER 1: So the question was, what happens
if we add another variable called i outside the four loop?
Well, if we had one declared with a let or const key word,
line five would error because we cannot create multiple let or const with
the same names.
If it were a var then it would get shadowed by this one
and basically be overwritten.
Any other questions with this example?
AUDIENCE: [INAUDIBLE]
SPEAKER 1: Ah, the question is what happens
if we create a i variable [? outside. ?] So if we did let i equals sub number.
Basically, the closure would wrap up the most specific variable.
So since this variable is more specifically declared than the i
outside, it would bind with this one.
So if we ran this, it prints a 0.
Cool.
So let's look at another way to create a closure.
So has anybody heard of immediately invoked function expression?
Or the term iife?
I-I-F-E, for short.
So, basically, what an iife is is a function expression that gets
invoked immediately.
And so this also creates a closure.
Has anybody seen this before or heard of it?
AUDIENCE: [INAUDIBLE]
SPEAKER 1: So the question was, is it like a nameless function?
In a way, yes.
It's a nameless function oftentimes.
But it's a nameless function that gets invoked immediately.
I'll show you what that looks like.
And a benefit of using an iife is that it doesn't add or modify
the global object.
So we talked about last week how when you create variables or create
functions, those functions are actually attached to the global object.
But with iifes since they're just statements
that are immediately invoked, they do not add to the global object.
So let's take a look at what those look like.
So say we had something like--
so we in the previous closure example, we
defined this thing called a hello function, which
was basically a function-- actually let's just copy that directly.
So we defined a make hello function which had a message called hello
which got wrapped in a closure by the say hello function.
And we returned that function.
And so as part of a global object we have
this thing called make hello function.
Which might not be ideal if we are running low on like names of functions
that we can use.
It's a way to basically create the same closure without actually creating
a globally scoped function is an iife.
So let's see what that looks like.
So the goal is to have a say hello function which basically gets created
by this make hello function with a variable called
message that gets wrapped in a closure.
And so another way to do that would be just saying const
say hello is equal to this function.
And we can make it an anonymous function.
That's actually immediately invoke it.
So does everybody see what happened here?
So we went from this where it's make hello function.
Which is declared as a function, which you can use anywhere in your code,
and then at line 11, we go ahead and invoke that function
which returns that function defined at line four
which is a say hello function that wraps that var message in a closure.
But here instead we don't create a function
called make hello function, instead we declare an anonymous function, which
just gets invoked immediately at line 9.
And so we're left with that same exact function which is defined on line four.
Where it's a function that console.log as a message which
is defined by its parent function.
But we don't actually have to create that global function name.
Does that make sense to everybody?
And so if we ran this we see the same exact thing.
So why might an iife be useful?
I'll just delete these.
So say we want to have some class or something called a counter.
And we want to keep track of some number that we can just keep incrementing,
and we can get that number.
But say we also did not want that number to be accessible to other people.
How might we go about doing that?
One way would be to use an iife.
And so we can actually create that variable within a very limited function
scope that is non-accessible globally.
And so doing that real quick, we can create this thing
called a counter which is a function where within here we
create this variable called account.
And we set it equal to zero.
And then we can do something like return an object
where if we do something like increment, it's
actually a function which does count equals count plus 1.
So it just increments that count.
Or we can have a function called get which just returns.
Or let's just console log the count.
So this creates a function but instead we actually want that object back.
So we can actually wrap that function in parentheses and immediately invoke it.
And now we have an object that has an ink and a get function.
And we can go ahead and invoke those.
So we can do counter dot get, counter dot ink, counter dot get.
And if we run that, we can see it gets the zero,
increments it, and then prints out the one.
But nowhere does any body have access to that variable at line 12.
Because it's wrapped in that function that nobody can access.
Because its scope is limited to lines 11 through 18.
And the only things that have access to that variable are the return functions.
And so that that count variable is not accessible in the global scope.
Does that make sense to everybody?
Do we see how that could be useful?
Any questions?
So how might we be able to use iifes to solve that closure
problem from earlier?
So let's copy that closure bug too.
So we have this from earlier which is buggy.
How might we use an iife to solve this problem?
The goal is now to print 0.
Any thoughts?
So what if instead of pushing a function that consoles.logs i,
we create a function that returns a function that console that logs i
and pass in i.
A little bit weird.
So now we have a function that returns a function that
console that log something called i.
Now what we can do is we can immediately invoke that function with i.
Do people see how that creates a closure by using an iife?
So let's change a couple of these variable names
so that it's easier to see.
So we're pushing onto that array.
The result of a function that returns a function that console.logs x.
And what do we pass in as x, we pass in i.
And so that creates a closure around that value
of x Which is then accessible later on in the code.
So if we go ahead and run this, we get that 0 as expected.
Any questions on that?
Is that a question?
It is a little bit crazy.
This is not something that you use every day.
But this is something that it helps to know.
Because you might see things like libraries
get imported by using an iife.
So that a lot of variables that they declare while creating a library
don't pollute the global scope.
All right.
Moving on.
So first class functions.
So who knows what a first class function is?
Has anybody heard this term before?
So first class functions basically describes the way
that language handles functions.
And so in JavaScript, classes are first class citizens, people like to say.
Or in other words, functions are treated the same way as any other value.
And so as we learned last week that functions are really just objects.
Everything that isn't a primitive is just an object.
So it really makes sense that functions can be treated as other values.
So functions can be assigned to variables.
We've seen that when we do something like const
say hello equals some anonymous function.
They can be signed into array values, which we saw with this previous example
where we're pushing onto the array anonymous functions.
And they can be set as an object values, which we saw in our iife example
when we returned an object that had an inc and a get function.
They can also be passed as arguments to other functions.
There's nothing stopping us from declaring a function which
expects a function as an argument.
And what that does is it allows--
oh, they can also be returned from functions as we saw earlier.
In the previous example, we saw a function
that returned another function.
And so it allows the creation of higher order functions.
So higher order function is basically any function
that takes one or more functions as arguments or returns a function.
And so some big examples of those are map, filter, and reduce.
So does anybody have any questions on what a first class citizen means
or a first class function?
We have seen almost all of these bullets as examples in the past couple days.
Cool.
So has everybody heard of map, filter, and reduce?
Has anybody not?
OK.
So basically these are three of the most famous higher order functions.
What map does is it's an operation that can be done to an array.
And what it does is it maps a particular function,
any function to every single value in the array
and then you get back an array where the values in the array
are the result of passing the original values into some given function.
What the heck does that mean?
Well, it just happens to be that map is already built into the array class.
So if we create an array like const x equals an array with 0, 1, 2, 3.
And say we create some function called add 1.
And takes in a number, let's actually do this in node.
So say we had an array with 0, 1, 2, 3.
And we had a function called add 1 which takes some number,
and it returns the number plus 1.
And so if we do add 1 to 1, what do we expect to be returned?
Two.
And how about if we did zero?
We expect 1.
1 returns 2.
2 returns 3.
3 returns 4.
And so if we were to map that function to each of the values in that array,
we should expect to have an array that has 1, 2, 3, and 4.
And so if we do x dot map, which is built into the array,
if we passed in that function called add 1,
it basically maps that function to each value in that array
and returns the new one, the new value.
And so as we expected 0, 1, 2, 3 returns 1, 2, 3, 4.
Any questions on map?
So what were the other two?
Filter.
So filter is basically another high order function
where it expects a function and this function
that you pass in can either return true or false.
And basically what filter does is it retains
the values that return true and gets rid of the values that return false.
And say we have a function called is greater than 1.
It takes a number, and it returns whether that number is greater than 1.
It returns whether that number is greater than 1.
So say we pass in is greater than 1, a number like 100,
we expect it to be true.
If we pass in a number like 1, we expect it to be false.
And say we were to filter that original array 0, 1, 2, 3 by the function
is greater than 1, what do we expect to get back?
Is 0 greater than 1?
No, so it shouldn't be included.
Nor is 1.
But 2, and 3 are.
And so if we filter is by is greater than 1, we get 2 and 3 back.
And the last high order function that we'll talk about it is called reduce.
And basically what reduce does is it takes an array of multiple values
and reduces it into a single value.
And basically what that does is it takes a function that
expects two arguments where the first argument is some accumulator basically.
It marches down each value and returns that accumulator to the next value.
And the second argument is whatever's next in that array.
And so basically if we were to define a function called
add which takes in two values and returns x plus y,
we expect add 1 and 2 to return what?
3.
And what would we expect 0, 1, 2, 3 to return?
AUDIENCE: 6.
SPEAKER 1: 6.
So if we do x dot reduce and pass in add, we get back 6.
Why is that?
Because first it starts with zero.
And basically it starts by invoking the first two arguments.
So it has zero and one.
It invokes add.
So 0 plus 1 is 1.
It passes 1 on as the first argument.
And y is the next value in the array, so 2.
So we have 1 plus 2 is 3.
And so for the next iteration, x is 3, y's is this next value called 3.
It returns 6.
And since that's every value in the array, it returns 6.
Does that make sense?
So those are the three higher order functions
that we're going to talk about.
And let's actually implement those.
So in four higher order functions, let's go ahead and declare some higher order
functions of ourselves.
So let's do-- does anybody have a preference if they want to do map,
filter, or reduce?
Let's do map.
All right.
So let's declare a function called map.
And let's take two arguments.
First, is the array that we want to map over,
and the second is some function that we want
to invoke to every value on the array.
So can anybody give me a strategy on how we might go about implementing this?
So first we're going to want to create a brand new array.
And then at the very end, we're going to want to return that.
Now what do we want to do before we return?
AUDIENCE: [INAUDIBLE]
SPEAKER 1: Yeah.
So the comment was first, we should check if the array is an array
and the function is a function.
I completely agree.
But let's just assume that for now.
So what does map do?
It takes every value in an array runs through some function,
and returns another array with the return values.
So who wants to give me a strategy?
Yeah.
AUDIENCE: [INAUDIBLE]
SPEAKER 1: Yeah.
So some sort of four loop that will grab that value in the array and apply that
function.
Cool.
So we can do four let's use let i equal zero.
i is less than however many values that are in the array.
And that's do that the value just be array i.
And then what we want to do is new array push a value onto that new array.
And what do we want to push on it?
The result of running that function on that value.
Does that make sense?
Cool.
So this would be absolutely correct.
Unless somebody sees a bug.
Shall we test it?
So we want to map over x, add 1, and we expect to see 1,2, 3,4.
And we do.
Nice.
And so one handy built in function to all arrays
is this thing called a for each loop.
So we could actually clean up our code by using a for each loop.
And so we could do the original array dot for each.
And what that does is it's a higher order function itself
that allows us to pass it a function.
And it will invoke that function on each of the values.
So it's basically like map but instead of returning a new array
with those values, it just invokes that function on those
values without taking the return function and putting it in an array.
And so we can say for each value here we just push onto that new array the value
after we run it through that function.
Does that make sense?
Cool.
Any questions on the implementation of map?
Any questions on functions as first class citizens?
Do you think it would help if we implemented filter or reduce?
Or are we good here?
No?
OK.
Moving on.
Cool.
So you may have heard these terms thrown around when
dealing with JavaScript, things like synchronous, asynchronous, single
threaded.
So what is JavaScript?
JavaScript is actually single threaded synchronous language.
And so since a synchronous is a function that takes a really long time to run
will cause a page to become unresponsive.
And we can actually demonstrate this.
We can do this right now by opening up our dev tools.
And I'm going to actually cause this website to stall out.
So we can write a function called hang.
And let's say for some amount of seconds.
And basically what this hang does-- oops.
Let's override that function called hang.
And what it does is we can say const done at is some time in the future.
So date dot now which gets us to the current time plus however many seconds
we want times 1,000.
Because date dot now returns milliseconds.
And so now we have some value called done at which is the time
that we're going to be done.
We can do while date dot now is less than the time that we're done.
Just do nothing.
And so now everything is good.
As you can see, we can move back and forth in the slide.
But if I did hang for 10 seconds, we're stuck for another 10 seconds
until the page is done with that [? what ?] loop.
Well.
Does that make sense?
And this is because JavaScript is single threaded and synchronous.
And so since this while loop was running for 10 seconds,
it was just doing while this is true don't do anything.
It's just going through that while loop, it locks up the entire page.
Yeah.
AUDIENCE: [INAUDIBLE]
SPEAKER 1: I believe so.
So the question is if we did something like while true,
would it just lock up the page permanently?
I believe so.
Unless the browser protects against that.
And I don't want to try because it will take down the presentation.
But as we just demonstrated, since JavaScript is single threaded
and synchronous, while that while loop was happening,
we couldn't do anything at all on that whole website.
Which you could take advantage of if you wanted to like
have some malicious web site which just does some while loop
and locks up somebody's computer.
But JavaScript also has some functions that act asynchronously.
And so let's take a look at some of those functions.
So one of those functions is called set time out.
And we'll look into it a little bit more in detail.
But let me just show you how that works.
So let's do a function call a print 3 or print 1.
And what that does is it consoles logs 1.
And let's it have a print 2.
And a print 3.
And then if we invoked print 1, print 2, print 3, what would we expect to see?
1,2, 3.
But say we use this thing called set timeout which
is basically an asynchronous function.
So say rather than printing 1, we did set time out on print 1
to be a second, a 1,000 milliseconds, or did set time out on print 2
with a time out of zero seconds.
And then print 3 knowing nothing about set time
out other than it set some time out before running a function.
What do we expect to be console logged?
So what order do we expect these to print?
Anybody care to guess?
3, 2, 1.
Why do you say that?
AUDIENCE: [INAUDIBLE]
SPEAKER 1: OK, so 2, 3, 1 is the other guess.
So let's actually just run this.
And we see 3,2,1 even though set time out for print 2 is zero.
So let's dive a little bit more into how this works.
We we'll dive a little more into this how this works in a couple more slides.
But that's just a teaser at asynchronous functions.
So how exactly can a language be both synchronous and asynchronous.
In order to explain that, we have to explain
these concepts called executions stack, browser
API's, function queue, and event loop.
So let's dive deeply into what an execution stack is.
Has anybody heard the term stack or execution stack?
So functions that get invoked by other functions get
added to this thing called a call stack.
And we'll discuss a little bit about more what that is in a second.
And when functions complete, they are removed from the stack
and frames below continue executing.
So does anybody or everybody know what a stack is?
So a stack is one of those data structures
that you may have seen in CS 50.
And the example that we give for a stack is something like a deck of cards
or a stack of lunch trays where when you add things to the stack,
they appear on the top.
And so when you want to grab the next thing, whatever you grab first
is the most recent thing that you've put onto the stack.
So if you imagine a deck of cards, say you have cards called 5, 4, 3, 2, 1,
and you place 5, 4, 3, 2, and 1 on the stack, the first thing that you
get back is 1 and then 2, 3, 4, 5.
As opposed to something like a queue where it's like a line of people
where the first person in line is the first person who comes out.
And so let's explore what stacks are.
Actually I'll show you in code first, and then I'll draw it.
So say we had a function called a.
That just does console that log.
i, a function called b, that just calls a,
and a function called c that just calls b.
And then we invoked c.
So can everybody imagine in their head exactly what's going to happen?
So c is going to get invoked which calls b.
b is going to get invoked [INAUDIBLE] a, and a
is going to console.log [? high. ?] And so as you can imagine,
the JavaScript interpreter knows exactly where which function gets added next.
Actually a better example would be something
like we can use or add 1 function from above from earlier.
All right here's a little bit of a better example.
So when we invoke c, c is going to console log, get numb plus get numb.
And so what is the value of get numb?
So when you invoke the first get numb, it returns add 1 of 10.
And so it calls add 1, passes in 10, add 1 returns that original number plus 1.
So it returns 11.
Which returns to here, which gets returned to here.
And so somehow JavaScript has to know that 11 is what get numb evaluates to.
And then it does it again.
And so as you expect, this would return a number [INAUDIBLE]
console that log a number called 22.
But let's actually go through exactly how that works in drawing.
So we have a function called add numb or add 1.
Which expects some numb.
We have a function called get numb.
And we have a function called c.
And what c does is it gets two numbs and adds them.
And what add 1 does is--
or what get numb does is it gets the value of add 1 of 10 and returns it.
So imagine we have this mythical call stack.
Which is basically the way that JavaScript knows what's going on.
And so first, we invoke c.
And so c gets added onto this stack.
And so it's basically JavaScript remembering like,
oh, he called the c function.
And what does the c function does?
Well, it returns get numb plus get numb.
And so in order to find out what get numb is for the first time,
we have to add get numb.
We have to evaluate that.
And so what is the value of get numb?
Well, we have to figure out what add one of ten is.
And so we need to evaluate that.
And so JavaScript now knows and is keeping track
that we have to evaluate this thing called add 1, and once we get it,
it gets passed to this thing called get numb, and once we have that value,
it gets passed to c.
And so this returns 10 or 11.
So it returns 11 to get numb.
11 just returns that to c.
And then what happens in c?
Well, it needs to find get numb plus get numb.
So it has to evaluate get numb again.
So get numb gets added to that stack.
And how does get numb evaluate?
Well, it needs to evaluate get 1 or add 1.
And so that evaluates.
And after it evaluates, it just gets erased from the stack
because it's done.
And then when get numb evaluates, that also gets erased from the stack.
And then c console logs 22.
And then c gets erased from the stack.
Because that has finished executing.
Does that make sense to everyone?
Yeah.
AUDIENCE: [INAUDIBLE] like if one of the stacks
creates a [INAUDIBLE] do those variables [INAUDIBLE]??
SPEAKER 1: So the question is what happens if one of those functions
creates a closure?
Does it still disappear from the stack?
The answer is yes with an asterisk.
So as long as nothing else needs to remember
all of those variables and stacks.
So if these functions don't create other closures then they'll just be erased.
And you can just think of it as being erased
from memory because that's really something
that the engine itself handles.
And you really don't have to worry about memory and stuff.
But you can just think of it as it just gets erased from the stack
and from memory if no closure is left around.
But great question.
Any other questions?
Does this call stack makes sense to everybody?
Great.
And so a quick demo of just showing that JavaScript does indeed
keep track of this call stack is what happens if an error is found.
So if one of these functions ends up creating an error, in this case add 1,
and we run this, it says, oh, no, an error
which is the error that we created.
And it says add 1 which was called by get numb which was called by c.
And so JavaScript does indeed keep track of this call stack.
And you can see when an error gets thrown,
it basically dumps the call stack to the console.
Does that make sense to everybody?
Any questions on call stack, execution stack?
Great.
And so now going back to asynchronous JavaScript.
So how exactly does this thing called set time out work?
How does it not just immediately get invoked?
How does any asynchronous things work.
And in order to understand that, you first
need to understand execution stack.
And then I can talk you through exactly how
things get handled in terms of browser API's, function queue, and event loop.
Let's go ahead and draw that on the board as well.
So this thing here we can call the stack.
And this is basically exactly the same stack
that we were talking about before.
Over here we can call this API's.
Basically these are functions that you can
call that are not directly built into JavaScript
but might get run in the browser.
We have this thing we can draw down here called the function queue.
And we have this thing called the event loop.
So basically we talked in depth about how that stack worked.
But we have not mentioned API's, event loop, or function queue.
So basically what API's are these things like set time out
or fetch or any of these other asynchronous
functions which get run and handled by the browser
but not necessarily by JavaScript itself.
And so say we had something-- does everybody remember the example
from before with print 1, 2, and 3?
Let me remind you of the code real quick.
So we have print 1, print 2, and print 3, are our three functions
that we defined.
And we set time out print 1 to 1 second, set time out print 2 to zero seconds,
and then print 3 immediately.
And so when this file gets executed, three things happen.
First we call print 1.
But set time out for 1 second.
Then we do the same thing with print 2 for zero seconds,
and then we'd call print 3.
And so basically set time out of print 1 for 1,000 seconds
gets tossed on the stack here.
And set time out is actually one of those asynchronous functions
that gets handled by the browser.
And so that gets tossed over here.
And so that's print 1 in one second.
And so the browser actually is the thing that
handles keeping track of the seconds until print 1 should get executed.
And then the function queue says, OK, I executed that line of code, I'm done.
Next is set time out of print 2 for 0 seconds which
gets thrown on here, that gets evaluated,
and that's handled by the browser as well since it's a set time out call.
So this gets print 2 with a time out of zero seconds.
And then the next line of code in the file
was print 3 which immediately gets tossed on the queue or on the stack,
and it consoles that logs 3.
And so 3 gets consoled out logged.
And then the state of the world is basically this.
Because all of this happened in very, very quickly.
Is everybody with me so far?
And so now the browser says, hey, it's been zero seconds.
It's time to call print 2.
And so this gets put in the function queue.
And so as we alluded to earlier a queue is basically
a line where the first things that get added
are the first things that come out.
And so it says print 2 is ready.
And that gets erased from here.
And so now the state of the world is this.
There is nothing on the stack because that file has finished executing.
It did set time out of print 1 1 second.
It did set time out of print two for zero seconds.
And it did set print 3 which immediately console log 3.
And so now the state of the world is this.
There's nothing on the stack.
There is one thing in the function queue.
And there's one thing over there called print 1,
and the browser is keeping track of the time.
And so there's this thing called the event loop which it just constantly
checking.
First, is there anything on the stack?
If there's something in the stack, just keep doing what you're doing.
Finish the stack.
But once the stack gets emptied, it says hey,
is there anything in the queue that's ready to go onto the stack?
And now there is.
The stack is empty.
And there's something on the queue.
Until the event loop says, hey, let's move this into the stack.
And so the event loop takes care of moving print two onto the stack
and erases it from the queue.
So now the state of the world is this.
There's something on the stack called print two.
Function two is empty, and the browser is still
keeping track of when it should print 1.
And this is basically still 1,000 milliseconds.
So now it's good, what happens?
Since there is something on the stack that always gets the highest
priority, since we know JavaScript is synchronous,
it's just going to execute everything on the stack
before even looking anywhere else.
And so since there's something on the stack called print 2, it executes that.
What does it do?
It prints out 2.
And then says, OK, I'm now done with the stack.
And so now this is the state of the world.
There's something over there being tracked by the browser called print 1.
It still has 1,000 milliseconds or so on the clock.
There's nothing in the stack.
And there's nothing in the queue.
And the event loop is saying, oh, there's nothing for me to do.
So now what happens?
Well, basically nothing for a whole second.
So basically this timer runs down.
And as soon as this hits zero, can somebody tell me what happens?
AUDIENCE: [INAUDIBLE]
SPEAKER 1: Yeah.
So print 1 moves to the queue.
So as soon as this hits 0, this gets moved down to here.
So now we have print 1.
This gets erased.
And now what happens?
AUDIENCE: [INAUDIBLE]
SPEAKER 1: Exactly.
The event loop says, hey, the stack is empty.
But there's something on the queue, so let
me move that up to the queue or the stack I mean.
Move the thing from the queue to the stack.
And so now print 1 is here.
Gets erased from the queue.
And then what happens?
Print 1.
And then the stack is cleared.
And now we're done.
There's nothing left being tracked by the APIs.
There's nothing left in the stack, and there's nothing in the queue.
And so what happens at the very end, well, we print 3,2,1.
Does that make sense to everybody?
Yeah.
AUDIENCE: [INAUDIBLE] whereas everything that is on the [INAUDIBLE]
which it appeared there?
SPEAKER 1: Yes, exactly.
So the question was about ordering, and how is order
affected when things are on the stack?
Queue and the APIs.
Over there.
And the answer is exactly as you said.
Everything in the stack has a definite order.
Things at the top get executed before things on the bottom.
And same things at the queue.
Things get queued up.
And as soon as the stack is empty, whatever's
next in the queue is guaranteed to be in the next thing on the stack.
And if that thing calls other functions, the stack
will grow and shrink before even grabbing
another function from the queue.
And then things in the APIs over here, these
you have no real guarantees on what order they're going to return in.
And so that's what the asynchronous or the concurrency of model of JavaScript
is.
It is basically these APIs are handled by the browser.
And they will basically let the rest of the JavaScript
know when they are done by pushing things onto that function queue.
And then as soon as they're on the function queue,
then you have a guaranteed order when they're
going to get put onto the stack.
Does that make sense?
AUDIENCE: So if you set time out on three different things
for the same amount of time, is there a guaranteed order?
SPEAKER 1: So the question is if you set time out three different things
is there a guarantee in order?
I believe so.
So if you do set time out of print 1, 0, set time out of print 2, 0,
set time out of print 3, 0, I believe you're guaranteed to print out 1,2,3.
But the caveat is that it depends on the implementation of the API.
So it really depends on the browser you're using.
But I believe browsers will have that guarantee.
Any other questions?
Yeah.
AUDIENCE: For the event loop, you said it starts with [INAUDIBLE] So
like that's just whenever [INAUDIBLE]
SPEAKER 1: Exactly.
So what the event loop does is it basically
checks when the stack is empty.
It moves something from the queue to the stack.
And that's all it does.
Is it's just constantly checking, hey, is the stack empty?
If not, then I'll wait.
Is the stack empty?
Oh, now it is.
Is there anything on the queue?
Oh, there is.
So let me move it to the stack.
Yeah.
AUDIENCE: Is there a limit to the queue?
SPEAKER 1: Is there a limit to the queue?
AUDIENCE: A realistic limit?
SPEAKER 1: Is there a realistic limit to the queue?
No.
The limit to the queue is basically what can be held in memory.
And so what happens if we run out of memory?
Let's have an example that does that.
So this won't actually overflow the queue.
But this one will overflow the stack.
So we have a function called recurse.
And recurse let's console that log, recursion, and then return recurse.
So what do we expect to happen here?
Yeah.
So recurse is going to console long recursion.
And in return, the return value of recurse.
What's the return value of resurce?
Well, it's recurse is return value.
And so we're going to keep going down that rabbit
hole until we run out of stack.
So if we run this, oh, maximum call size exceeded.
Because if we scroll--
I'm actually scrolling.
There are a lot of these, a lot of them.
So that's what happens when we run out of stack size.
Cool.
Any questions about the asynchronous JavaScript?
So what are some examples of asynchronous functions in JavaScript?
Well, we saw set time out.
I alluded to this thing called fetch which is
the way of fetching network requests.
JQuery, if you've ever used it, it has a lot
of asynchronous functions for fetching things like Ajax.
EXML HTTP request which is built into the browsers
for fetching things, things like database calls.
Anything really that relies on something other than the JavaScript
is going to be asynchronous.
Cool.
So what happens if we want something, say we have some asynchronous call,
and we want to do something with the return value of that call.
How might we do that?
Well, we could just wait for it to come back, but that wouldn't be really great
would it?
If say we have some web site which is what's shown
is relying on some database call, we don't
want to like lock up the entire web site until that database call comes back,
right?
That wouldn't be very good for the user.
The analogy there would be say you wanted to hang out with your friend,
and you call him, and you say, hey, let's hang out, and he says,
oh, I'm at work, I'll be done in five hours.
You don't say, OK, and then just sit there for five hours, right?
You go ahead and do other stuff.
And then five hours later, you say, oh, my friend is done with work,
now let's go do something.
And so that's exactly how JavaScript's concurrency model or asynchronous model
works, is this thing called callbacks.
Callbacks are the way that you control flow with asynchronous calls.
Or in other word, you execute some function
as soon as some asynchronous call returns a value.
And what that means is the program doesn't
have to halt and wait for that values.
You don't just sit there until your friend is done with work.
You go do other stuff, and when he's done then
you say, OK, now let's go hang out or something.
Does that make sense?
You want to see this in action?
So let's have this function which takes a callback.
Well, first let's just do something and then--
so function do something takes a callback and console logs the result
of invoking that callback on 1.
So what type is that call back?
It must be a function, right?
If it's getting invoked.
And so do something is basically a higher order function
like we discussed earlier, which takes as an argument some function
and will invoke it with 1.
And so say we did do something, let's not even console log.
Let's just invoke it.
And we pass it into do something console dot log.
What would happen?
Well, we passed in this function called console dot log to do something.
And then at line 2, we invoke console dot log with 1.
And so we expect this to console log 1.
But say do something was actually an asynchronous call.
Say rather than invoking the callback on 1 immediately,
it did set time out for some number of time, one second.
And set time out takes a function that immediately invokes.
So we'll just create an anonymous function that invokes callback on 1
in one second.
Now it's not do something, but rather it's do something async.
Now what do we expect to happen?
Well, one second later, it console logs 1.
And so this is an example of a callback.
So we have some function that does something asynchronously.
In this case, it returns 1 basically a second later.
I mean how do we control what we are going to do with that value
soon as it returns?
Well, we just pass in a function that says, hey,
we know that this asynchronous function is
going to return some value eventually.
And so let's just pass it a function to handle
what we're going to do with that value.
And so with do something async, what we're doing
is we're passing in a function called console dot log, and what we do
is we console dot log the return value of the async function whenever
it decides to return.
And so for things like network requests where
we don't know exactly how long it's going to return, what we do is we
pass in a function that handles the eventual return value.
And so as soon as that network request comes back,
then we have the function that will say, oh, I
know what I'm supposed to do with that network request let me do it.
Does that pattern make sense?
Any questions on callbacks?
Great.
Let's look at an example with callbacks.
A real life example taken from some code that I've actually written.
So from personal project of mine, I have this function called log in.
And what log in does is it has a whole bunch of asynchronous functions.
So log in takes a request and a result and some callback.
And so what we're doing basically is we're looking for the user
by their email.
This is an asynchronous function.
And we're passing in a callback with it.
And this callback takes in an error, if an error occurs,
and the user, if the user exists.
And if there's an error, we return this original callback.
It says, hey, there's an error.
Let me handle like that.
Otherwise, there's a user that came back.
And so let's do this user dot compare password which is asynchronous.
And so we need to pass in a callback function with that.
And that callback function is here.
And so either there is an error or it matches.
If there's an error, handle that error.
If there's not a match, say, oh, incorrect password.
Otherwise, create this token and then sign that token
which is another asynchronous function.
It takes a callback which expects and error and a token.
If there's an error we handle the error.
Otherwise, we handle that token, save that user,
which is another asynchronous function.
And so the callback takes the error.
If there's an error, handle it.
Otherwise, return.
And now we're waiting nested into this what is known as a technical term
callback hell.
Basically callback with a callback with a callback
with a callback and another callback.
And so that there is called callback hell.
We see this that kind of looks like a Christmas tree.
If you've ever seen there are some pictures online of callback hell
where it's like 10 20 iterations deep.
And you see basically this Christmas tree of code.
And that there is the downside of callbacks within callbacks.
And we're going to take a short break now.
And after the break, we'll look at some ways of combating this callback hell.
All right, welcome back.
Before the break, we were showing this function
that I wrote on a personal project of mine
demonstrating this thing that we called call back hell.
That is callbacks within callbacks within callbacks recursively.
Which gets a little bit messy and hard to read.
And I alluded to this thing that we could
use to alleviate callback hell which is promises.
So who here has heard of a promise before?
Who here has heard of a promise in real life before?
Hopefully, everybody.
So what's a promise in real life?
It's basically you telling somebody that you're
going to do something eventually, and they can just
have your word that you are going to do it eventually, right?
And so that kind of seems like the asynchronous model of JavaScript.
Whereby you basically get some sort of promise
that something is eventually going to happen.
And so JavaScript also has this object called a Promise, capital P,
whereby you can alleviate callback hell by writing
code that assumes that a value is going to be returned eventually
with the access function.
And a big upside about Promises is that you only need a single error handler.
And so we saw with the callbacks' example over here,
we see line 15, if there's an error return this.
If line 8, if there's an error handle it, line 5, if there's an error
handle it.
Like 19, if there's an error, handle it.
And with Promises what we have--
a big advantage of promises is that we don't
have to handle the error within every single callback.
We can just do it once and be done.
So let's go ahead, and let me show you how Promises work.
So say we have some function that returns a Promise.
One of those functions is called fetch.
And we'll talk about fetch in depth in a few weeks.
But just take my word for now that fetch returns a Promise.
So we could do something like fetch some URL.
And then we know that fetch returns a Promise.
And eventually it's going to return to us this URL.
So we can start to do is write a function that
expects the response to come back and start handling it already.
And the way you would do this with a promise
is this thing called dot then which takes a callback itself.
So we could have a callback that takes the response
and does something with it.
If we want it to then handle that later, we can chain a dot then
that takes whatever, some JSON maybe, and does something with that.
And maybe if we wanted to do something with that JSON dot later,
we can do dot then again.
Do something with that.
So on.
And we can just keep chaining these thens as long as we want.
And so this is basically the same as putting a callback
within a callback within a callback.
But as you see, we don't keep creating this Christmas tree of callbacks.
Rather we just chain a new dot then.
And we don't actually have to worry about handling an error here.
Instead, what we can do is a dot catch.
And this catch function down here will actually
handle any errors that get thrown in any of the preceding then statements.
And so we could handle the error here.
And we would not actually have to do it in any
of the then statements over here.
And so something that you might see, we'll discuss this in later lectures.
But you might see something like return res dot JSON.
Which is basically saying extract the JSON out of this result.
And here you might be doing something like return only the important parts
of the data maybe.
We could do like important data is JSON dot important.
And so on.
And maybe down here we eventually want to just console dot log it.
And so this would be an example of using a Promise
rather than using callbacks within callbacks within callbacks.
And so let's actually refactor my old authentication
code to use these Promises.
So here we have a bunch of callbacks.
And one thing that we know is that we don't actually
have to handle any of the errors.
So first thing that we do is we're going to do user dot find 1.
So basically this.
And so before let me show you a before and after.
Before we had this function called user dot
find 1 which takes in basically the query that we're looking for
as well as the callback function.
But rather than passing in a callback function,
we can actually, since this does return a Promise,
we can do a dot then that has a callback function which expects a user.
And so we've started to start refactor line 5 here.
So rather than passing a callback function
that takes an error in the user, we just do a dot then that handles the user.
And how do we handle the error?
Well, we just have a dot catch dot error.
And what have we been doing with that?
Well, if there's an error, we just return callback error.
So we can do that in the [? catch lock ?] there.
And now we're done handling errors for the rest of the Promise.
And so we can get rid of line 11.
You can get rid of line 17.
And we can get rid of line 20.
Now we can get rid of 10 since we already refactored it out.
Then what do we do with that user?
Well, you can cut and paste that into there.
So we want to compare the password.
And compare password takes in a password as well as a callback.
And so let's go ahead and return that.
And then handle that callback with another then instead.
And so rather than having a callback that expects an error and is a match,
we can just only handle that is match case.
And so what do we do if there's not a match?
Then we want to tell them there's an incorrect password in return.
Otherwise, we want to take what the payload is
and return this new [? jot ?] sign Promise.
So let's do this.
Copy and paste this.
Get rid of that callback which expects an error and a token.
And, instead, return that, and handle that in another then.
What did we expect?
We expected a token.
And what do we do?
We do this.
And user dot save, it looks like it takes another callback which
is only looking for the error.
So we could return user dot save.
And then, finally, do that.
And then we get to get rid of all these closing curly brackets.
And that there is our new login function with Promises rather than callbacks.
Did that refactor make sense to everybody?
And does this Promise structure look nicer than the callback structure?
This is something we're going to go into a lot more depth in when
we talk about data in a few weeks.
But do Promises in general make sense to people?
Yeah.
AUDIENCE: [INAUDIBLE]
SPEAKER 1: So, yeah the question is how does the catch function
know when to get invoked basically?
And basically this is all so user dot find
1 dot then dot then dot catch is all one big basically Promise handling chain.
And promises, which are built in, know exactly what
to do when an error is found.
So if an error is found, it'll just march down that chain
until it finds a catch statement.
And then it will invoke that callback with that error object.
AUDIENCE: But that's not [INAUDIBLE]
SPEAKER 1: And it stops future thens from happening.
Any questions on promises?
Again, we'll dive more deeply into them in coming weeks.
Yeah.
AUDIENCE: So a Promise is a good solution
for all the bad stuff what comes with callbacks where what is the trade off?
What can you do with this that [INAUDIBLE] you still have
to go back to callbacks [INAUDIBLE]?
SPEAKER 1: So the question is what's the trade off
between callbacks and Promises?
And what, if anything, do we lose when using Promises over callbacks?
The answer is not really much.
Most things are migrating from the callbacks of the past to now Promises.
But Promises were something that were introduced
fairly recently to JavaScript.
Which is the reason that callbacks still exist a lot in legacy code.
And so what is the future?
So right now, Promises are very popular.
But there's a new way of handling asynchronous things that's
coming in the future.
So there's this thing called AsyncAwait which is actually introduced in ES 2017
which is the next, next maybe.
So ES 2017 has been finalized.
But it's still not adopted by everything.
But AsyncAwait is included in that ES 2017 spec.
And it allows people to write async code as if it were actually synchronous.
And so we're not going to dive too deeply into this.
But I thought I could just show you quickly a refactor
of what we've done so far to use this AsyncAwait rather than the Promise
syntax.
So right now log in is a big Promise chain.
And if we refactored it using this new AsyncAwait syntax,
we can actually make it look very synchronous.
So first thing that we need to do is add an async keyword
to the function which is letting the JavaScript interpreter know, hey,
this function is async which means handle it appropriately.
Which is basically what it does is allows
us to use this other key word called await which will functionally just
wait for a value to come back before continuing the code.
But it does this asynchronously behind the hood.
So basically what user dot find 1 dot then function user is doing
is waiting for a user dot find 1 to return with some value, which
is going to be that user.
And so if we were writing synchronous code,
we might do something like const user equals the value of user dot find 1.
And if we were using AsyncAwait syntax, we
could basically do that by saying const user is user dot find 1.
But we know that user dot find 1 is actually an asynchronous function.
So we actually have to just wait for that response to come back.
And so if we use that await keyword, it's
basically saying, hey, wait for that result to come back.
But don't actually just like stop and wait, just
wait behind the scenes asynchronously.
And so what might we want to do, well, then next
we want to do user dot compare password which gives us this thing called
is match, and so if we're doing this synchronously,
we might do something like const is match
equals await user dot compare password.
body.password.
Then this is basically asynchronous code, right?
We can do if it's a match, do this and return.
Otherwise, create this payload.
And then sign dot jot which will give us a token back.
But since this is an asynchronous function,
we have to use that await key word.
Then what?
Now we have the token, so let's do these things.
And rather than returning user dot save, which is what we would do in a Promise,
well, we just want to make sure that it succeeded.
So we can do const success equals that.
And as long as that works, then we can go ahead
and do res dot JSON with that token.
And now we're basically done.
What's one thing that we haven't handled?
The case where one of these things errors.
And so we haven't talked about this before,
but JavaScript actually has this thing called try catch
which allows us to try to do some code.
And if an error happens, intercept that error and handle it in code
rather than delegating to the browser's error handling.
And so what we can do is we can actually wrap all of this logic in a tri lock
and catch any errors and handle those appropriately.
Which is basically by invoking the callback that's passed into this login
function with the error.
We're done with error handling, and we can just style this appropriately.
And so now with this new AsyncAwait syntax,
we can write async functions in a more synchronous manner.
But everything behind the hoods is still running asynchronously.
Oops.
One thing we forgot to do is await this value.
Any questions on this syntax?
Again, this is something that will dive more deeply into as soon
as we get into actual data handling in the future.
As a random poll, who prefers callbacks over everything we've seen today?
Who prefers Promises?
And who prefers AsyncAwait?
About 50-50 actually.
Cool.
Noted.
And people online do just drop something and slack,
and I will take your votes into account.
Cool.
So let's pivot a little bit from asynchronous actions
and talk about this.
And by this, I literally mean this.
So who here has seen this keyword called this in JavaScript before?
Who here seen this in other languages?
So this in JavaScript is slightly different than other languages
sometimes in confusing manners.
But, hopefully, by the end of this lecture, it will not be confusing.
So this basically refers to an object that's is
set at the creation of a new execution context or in other words
a function invocation in other words another stack frame on that
stack that we drew earlier today.
And in the global execution contests, or basically
the window console or the node REPL or the function that gets invoked in node,
it refers to a global object.
And if a function is called as a method of an object, or in other words,
a method is basically a term for a key value pair in an object
where the value is a function.
That key is considered a method.
So if a function is called as a method of an object,
this is bound to that object that function is called on.
So what the heck does that mean?
Well, so let's just demonstrate in node.
If we just type this, we get back that big global object.
In the browser console, if we type this, we get back that window.
So as we discussed last week, we saw that window was indeed
the global object in the scope of the browser console.
And how might we write something such that this gets bound to other objects?
So let's write 12 this.
Cool.
And so I mentioned that if a function is called as a method of an object, this,
is the key word this, gets bound to the method that the functions is called on,
or the object that the method is called on.
So let's just create some objects.
So let's do const person is somebody with a name.
And let's have a function called greet.
So in line 3, I'm using this thing called this dot name.
And this is part of a function which is defined as a method on this object.
Remember, a method is just a key where the value is a function.
And so in this case, person dot greet is considered a method
because greet is this function.
And so if we call person dot greet, this gets bound to person.
And so this dot name becomes the value of person dot name, which in this case
is Jordan.
So if you were to run this, we see Jordan [? Gifts. ?] Printed.
Let's make this more of a greet by doing hello.
Then we see hello, Jordan.
But what happens if we want to do something like this?
What might we expect to happen in this case?
So we declare this global const called greet.
Global meaning it's outside the other object.
And we set it equal to person dot greet.
And so, basically, greet right now is a function
that console dot logs hello this dot name.
So what is this in that case?
So first we have to find where is this function getting invoked?
That's at line 10, right?
It gets defined at line 8, but it gets invoked at line 10.
And so what is the value of this here?
AUDIENCE: It's a global object?
SPEAKER 1: Yeah.
It's a global object.
And so what is the value of this dot name?
AUDIENCE: [INAUDIBLE]
SPEAKER 1: So yeah, name is not actually a key on that global object.
And so if we try to de-reference a key that doesn't exist on an object,
we get undefined.
And so if we do this, we're going to get hello undefined.
Does that make sense?
But what if we were to create some other object called student?
Let's call it friend.
I mean a friend has a different name.
But their name is David.
And how if we did something like friend dot greet equals person dot greet.
So now what do you expect to happen?
So where does greet in this case get invoked?
Line 14.
And what is it getting invoked on?
Right now it's a method of another object, right?
And so what I object is that?
Well, that's friend.
And so what does this get bound to?
It gets bound to friend.
And so what is friend dot name?
In this case, it should be David.
So let's try running this.
And we get hello, David.
Does this make sense?
So now-- Yeah.
AUDIENCE: [INAUDIBLE] really explicit and instead
of saying this you could have just referenced to context
as you are typing you know what the developing context is.
So is this should it be thought of just a useful short cut or?
SPEAKER 1: So the question is for the camera,
is this should it be thought of as some sort of useful shortcut?
In a way, yes.
It's a way of using a variable.
And we don't yet know exactly what that variable is going to be bound to.
Because in the case of person, we know that this dot name
is going to be equal to that person.
But that's not always the case, right?
As we saw if we take this greet method on person and assign it to friend,
this dot name is not person dot name.
In that case, it's going to be friend dot name.
And so it's kind of a way of using a value that we don't yet
know what it's going to be until we go ahead and invoke that function.
And when we start handling events and stuff and react
and stuff like that, we will see or even react components and stuff like that,
which is coming in the next lecture, we'll
start to see exactly why this, a key word called this, is useful.
Cool.
And now let's do a challenge together.
Let's try to get line 18 to greet somebody.
How might we go about doing that?
So what does this greet function do?
This greet function just does console.log hello to this dot name.
And so we need to figure out some sort of way
that when line 18 gets invoked, that this dot name is bound to some variable
that we want.
So there are a few different ways to do this.
Let's see if we can figure one out together.
Yeah.
AUDIENCE: [INAUDIBLE]
SPEAKER 1: Yeah.
One way is we could put the name property on the global object.
So we could do something like do you think it matters
whether I do it on line 15,17, line 1?
Where should I put this?
AUDIENCE: [INAUDIBLE] global object [INAUDIBLE]
SPEAKER 1: Yeah.
So the answer is yeah.
It doesn't matter where I declare this.
Because as long as it happens before line 18, this dot name will exist.
So I could do something like this dot name equals Johan.
Who is one of our teaching assistants.
And line 20 would now say hello Johan.
Actually there's a small caveat here.
The way that node evaluates files, it actually
won't work if we just invoke this by doing node 12.
It's still going to be undefined there.
That's just I'm going to wave my hand for now.
It's the way that node handles invoking files under the hood.
But if we actually did this in the node console right here,
if we did const person equals name greet is the function.
Just console logs hi.
So if I did person dot greet here, we see hi, Jordan as expected.
And now if we did something like const greet equals greet.
We call greet there, we see hi undefined as expected.
And now if we did something like this dot name equals Johann.
Now if we did greet, we see hi, Johann as expected.
Why?
Well, because if we do this, we see that this has a key called
name which is equaled to Johann.
Does that make sense to everybody?
Again, I'm going to wave my hand at the why this doesn't work in the node the
execute a file, but it does indeed work if we try to do it in the node REPL,
or if we want to do it in the browser console, it would also work.
m.
So I mentioned that there are other ways of setting this manually.
And there actually are.
So there's these functions called bind, call, and apply.
And all of these take at least one argument
where the first argument is explicitly what you want to set this to be.
And so if we were to go back into that example,
and here we wanted to do if we deleted this,
and we did const greet equals person dot greet dot explicitly bind,
we can define some any object that we want here,
and that's what we'll get bound to the this in this particular function.
So if we did bind it to some object where
the name is this is a bound object then if we ran this,
we would see hello, this is a bound object.
Because we are explicitly bound the this in this particular
function to be this particular object.
Does that make sense?
And the difference between bind and call and apply
is that call and apply rather than returning a new function because person
dot greet dot bind returns a new function where
the this is automatically bound, call and apply
will immediately invoke that function.
So rather than doing const greet equals that if we wanted to use call or apply,
we'd would do just person dot greet dot call and then pass in something there.
And same thing with apply.
That makes sense?
So say we wanted to do this, we would see all three of those got bound.
The difference between bind call and apply
is that bind returns a new function which we store in greet,
and invoke greet later, and call and apply just immediately invoked that.
Does that make sense?
So one other way to set this manually is by using ES 6 arrow notation.
So ES6 arrow notation will actually bind this
to be whatever this is at the time that we declare the function,
rather than at the time that we invoke the function.
And so if we did const person const new person is somebody with a name
and greet is this new arrow notation, which
we'll talk about or show many more examples in the days to come,
and did consol dot log this dot name.
If we did new person dot greet here we see what is this dot name at the time
that we actually write this here.
What is the value of this?
Again, this is a weird node thing.
If we did it in the command line, if we did const new person equals name
new person is undefined.
And why is it undefined?
What is this at the time that I was typing this?
AUDIENCE: [INAUDIBLE]
SPEAKER 1: It's the global object.
And what is this dot name is undefined.
And so ES6 the arrow notation will actually
bind this to be whatever the value is at the time of writing.
Any questions on this?
Cool.
So now let's talk about something that will be important in the assignment.
So browsers in the DOM.
So how many people have heard of the DOM before?
Most people.
It stands for Document Object Model.
And it's basically this tree like structure
that the browser maintains in order to be in sync with what
the HTML of the page declares.
And so say we had some very simple HTML file which was just
something like HTML, it had a head with a title,
it had a body with H1 and a paragraph.
This can be expressed in sort of a tree like model, right?
We have the document, we have inside the document we
have some HTML, what's inside the HTML?
Well, we have a head, and we have a body.
What's inside the head?
Well, we have a title.
What's inside the title?
Well, it's some text called this is a simple page.
What about the body?
Well, we have an H1, and we have a paragraph.
And what's inside those?
Some text as well.
And so we can sort of describe that as a tree, right?
We have at the very top a document, and below that we have some HTML.
And what was inside the HTML?
We had a head and a body, right?
So had a head and a body.
And what was inside the head and the body?
Well, the head had a title.
The body had a couple other tags, H1 and a paragraph.
And so we can sort of describe those also as part of the tree, right.
So head there's a title.
Body had an H1 and a paragraph.
And those each had some text.
And so do you see how that HTML maps onto some tree like structure
that we can maintain?
So this tree like structure is called the DOM or the Document Object Model.
And it's the way of modeling the HTML that is rendered onto a web page.
Does that make sense to everybody?
And so why does that matter?
Well, we can actually modify that DOM using some JavaScript.
And as we'll discuss in section this week,
we'll discuss exactly how you might do that.
And that is exactly what the first project is going to be covering.
So in the first project which will be released today,
you will create a to do app.
And so the to do app will basically be a way
of tracking some to dos that you'll have to do.
And you all use JavaScript and DOM manipulation
in order to create and track however many to do's you need to check off.
There'll be specifics coming out via email.
But this assignment will be due in a couple of weeks.
And sections will also be starting this week.
You should have gotten email before class
today with a form about a couple sectioning times
and if those work for you.
And those sections will be starting this week.
And sections are basically 1 and 1/2 hour, 1 to 1 and 1/2 hour
block where led by one of our TAs, Johann or Raylen,
will be talking about smaller stuff that we didn't quite cover in lecture.
One of these topics will be DOM and manipulating the DOM using JavaScript.
And so this week, they'll be talking to you about that, answering any questions
that you may have.
And then preparing you for this first project.
All right.
Let's call it for tonight.
And I'll stick around for some questions if you have any after.
