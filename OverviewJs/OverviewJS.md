## Curso   CS50M 2018   Overview, JavaScript   Lecture

DAVID MALAN: All right, welcome everyone to Mobile App Development
with React Native.
My name is David Malan, and this here is--
JORDAN HAYASHI: Jordan Hayashi.
DAVID MALAN: --and this is a course that assumes
as background only something like CS50, which
is Harvard's Introduction to Computer Science.
But more generally, if you haven't taken that particular course,
prior programming experience in most any language should suffice.
The focus of this class, of course, is going to be on mobile app development.
And the interesting thing about this space
is that it's been changing pretty rapidly.
It wasn't all that long ago where none of us
actually had smartphones in our pockets.
And so the landscape has been changing, particularly quickly.
And it's getting better and better.
If you've done any app developments on mobile devices or any web development
on mobile devices, early on we pretty much
just had HTML and CSS, maybe some JavaScript for interactivity.
Then lots of libraries came onto the scenes.
They, via CSS and JavaScript, gave the appearance
that you had a mobile-like application on your phone,
but the user interface wasn't all that good.
And you can tell that this isn't really "native".
That is, code that's in Objective-C or Swift on iOS or in Java for Android.
And something always felt a bit off.
So you could learn any one of those languages
or pick up the various tool kits that exist to write native software.
But it's a decent learning curve.
And if you're running a company or writing an app,
you have to generally pick and choose.
Do I want to target Android?
Do I want to do iOS, or do I essentially want to do twice as much work?
And so that alone could be a potential hurdle.
And then there were these other libraries
that allowed you to approximate the experience of writing your code once,
and then run it on both platforms.
But there, too, you could always tell that something wasn't quite
natural for the particular device.
And then more recently has come onto the scene
a number of new frameworks, particularly React Native,
an open source framework popularized by Facebook
that really actually now enables truly native cross-platform developments
while using JavaScript to rather stitch things together
and then leaning on the framework to provide you
with those truly native user interface widgets and other features that
would come to expect from those various languages.
So what we'll do over the course of the semester
is really dive in deeply to mobile app development,
specifically building on top of this popular framework.
You might have heard of Reacht Native or React
in the context of web browsers, which has been around for some time as well.
And to a lot of those paradigms that folks have been using for a few years
now on laptops and desktops is now available with additional features
in a mobile context, especially.
So today we're going to dive in quite quickly to JavaScript itself.
If you have a bit of background in that, that's great.
We'll hopefully fill in some gaps along the way.
And we'll also look at some of the more advanced features both tonight
and next week as well, particularly ES6 6 or ECMAScript 6,
which is essentially the latest version of JavaScript,
and with it some new syntactic features and programmatic capabilities.
A week after that, we'll take a look at React itself
and JSX, which rather comingles code with XML or a markup language,
if you're familiar.
And then look at some of the particular features
and UI features that you get with a framework like React JS.
Components, props, how you deal with states,
how you can actually stylize things, get user input, and create views,
if you're familiar with paradigms like MVC, model view controller.
Review governs what it is the user is seeing and interacting with.
We'll take a look at debugging techniques,
particularly for a mobile platform, which might not necessarily be obvious
if the device you're working on is here, and the device you're testing on
is here.
We'll give you some tools and techniques for that.
Focusing ultimately on data and navigation, how you can actually
get users around in your applications.
And then looking at a popular third party tool and framework
called Expo, which actually makes it even easier
to develop for this particular environment
and get started and get worked on quickly.
Looking at Redux and state management again more generally.
Performance tuning of your applications.
And then finally how you actually get this thing off
of your laptop or desktop and off of just your phone
and on to other phones and mobile devices.
And we'll apply all of these lessons learned
and the real challenges, and the hands dirty portion of the class
will be by way of the course's projects.
Three of them assign specifications from us that spec out exactly what it is you
should aspire to build.
And then the class will culminate with the final project, where
it will be up to you to propose, to design, and ultimately implement most
any mobile application a top React Native, as you might like.
Without further ado, let's dive into an overview of the class itself
as well as, then.
JavaScript.
Let me turn things over already to Jordan.
JORDAN HAYASHI: Great, yeah.
Thanks for the great intro, David.
So a few things about the course itself, you
can find information on the website.
I e-mailed you all the link earlier today.
On it, there's a link to the Slack, which
is what we're going to use for pretty instant communication.
You can create groups amongst yourselves,
and we'll use that for any quick tidbits when we have to send out.
And then, additionally, we have our staff email
that's linked as well, which is how you can just email the staff directly.
And so a little bit about lectures.
We'll have a short break about halfway.
You can get up, you can use the bathroom, go rest your legs.
If you have a question at all during the lecture,
feel free to just shoot up your hand or interrupt me directly.
Concepts constantly build on each other, so it's pretty important
to learn everything up to a certain point
in order to build off of it later on.
And if something isn't super important to know when you ask
a question about it, I'll let you know.
So don't worry about asking dumb questions.
And the staff will be monitoring the Slack during lecture.
So if people online have any questions, feel free to post there,
and the staff will interrupt me.
Another thing, I love live examples.
I think the best examples are created on the spot.
And with that comes a little bit of risk.
So live coding does have risks.
If I make a mistake, feel free to correct me.
I have some candy in the lectern.
So if you correct me, I'll give you some candy.
For those online, sorry you don't get candy, but you can have some glory.
Cool.
Let's start talking about JavaScript.
So JavaScript is an interpretive language.
So I posted a little bit in the Slack earlier
asking about most comfortable languages.
Most of you guys were saying JavaScript, but I
know those of you who took CS50 might have some experience with CE,
which is a compiled language.
So JavaScript is not compiled.
It's actually interpreted, so an interpreter will read line by line,
execute that code line by line.
Each browser has built into it its own JavaScript engine,
which either interprets the code.
It might do some magic with some just-in-time compilation,
but for the most part it's just reading your code line by line
and executing it.
Each browser actually has its own engine, and there are names.
So chrome is called V8.
If you've heard of Node.js at all, it also uses that same node v8 engine.
Firefox has SpiderMonkey.
Safari has JavaScriptCore.
Chakra for Microsoft Edge and Internet Explorer.
You don't really need to know these names,
but it's a little bit important just to know that different ones exist,
because JavaScript actually is built off of a standard.
The standard is put out by ECMA, which stands for the European Computer
Manufacturers Association.
And that association is in charge of just putting out a spec, meaning hey,
I know you guys have this language.
But this is exactly what this language needs to do.
And for every single function, this is exactly how
this function should behave.
So each of these browsers--
the engines in the browsers--
actually implement the standard.
But there are some functions where the standard is a little bit hazy on,
or maybe it doesn't even define this particular function.
And there's no hard line in exactly what that function should do.
So they may differ for anything not defined by that standard.
And some syntax.
Let's actually hop into code directly for this.
So let's do-- cool.
And the way that you declare variables in JavaScript,
there's actually three different ways.
We'll talk about that a little more later.
But for now, we'll just use this keyword called const.
So if I want to declare a variable, I'd say const.
So give me a variable called first name.
And I can give it any value I want.
So let's just call it my first name.
So you notice I have a string literal there.
It's using double quotes, and then I end that statement with a semi-colon.
I can also do a last name.
And if you notice, this time, I still have that string literal,
but this time I'm using single quotes.
Because in JavaScript there's really no difference
between double and single quotes.
You also notice I omitted that semi-colon, which in JavaScript is OK.
So my colons are actually optional.
So say I wanted something that was not a string.
I can just give it a value, like 42.
So in C, you might see something like, give me an int,
or give me a string or a char star.
You're declaring types right away with C,
but for something like JavaScript, you actually don't have to do that.
We can also do arrays.
And we can just declare them in line like this, and I can have--
So, if you notice, I actually have three different types all in this array.
So I have a string, I have a number, and I have a function.
And this is perfectly fine.
JavaScript doesn't really care what you throw in an array.
You can have all sorts of different variable types.
And so say we want to access those things in an array.
Anybody care to guess exactly how I would do that?
So say I want to execute that function.
How might I go about doing that?
Any guesses?
Yeah.
Yeah, exactly.
The array of two.
So if you're familiar with other languages, a lot of them
have the same syntax for indexing into an array.
And so since we have three things in this array,
we do what's called zero indexing, whereby the first index in that array
is called the zeroth index.
And then you count from there.
So we have zeroth here, first, and second here.
And so say I want to access that function.
I just do array 2, and I get that function.
And say I now wanted to execute that function.
I can, say, execute it like that.
So this is something that you might see in other languages,
but JavaScript you can do it as well.
You can just grab that function out of that array and execute it like that.
Say I wanted a for loop, and I wanted to console log everything in that array.
I can do it just almost like C. So I can do for--
this time we'll use let for the variable.
We'll talk a little more about that later.
So I start at zero.
Well i is less than the raised length.
[TYPING]
You might see me--
my personal preference is to omit the semicolons,
but you might read something online that has them.
It really doesn't matter all that much.
And so this line of code here.
You might have seen a for loop in other languages that you've used.
So this one is just saying for give me a variable that's
called i that starts at zero.
And while it's less than the number of values in the array--
array.length-- just keep incrementing it.
And then every single time console.log, which
is JavaScript's print function, whatever that value in that array is.
So we can actually run this.
And as you see the first time, line 12, where
we say index into that array to the second value, and call it.
That's what's printing high.
And this for loop here will now print string 42 and this thing called
function, which is this function.
Cool, any questions on syntax?
Yeah.
AUDIENCE: In your array there, does it matter if you
have that third comma after your--
JORDAN HAYASHI: It does not matter.
So the question was, does it matter on line 9 that comment at the very end?
And so JavaScript allows you to have trailing commas, meaning in arrays,
objects, or even function calls.
You can actually have extra commas, and it doesn't matter whether you have it
or not.
It's optional just like the semicolon is.
But were I to omit the comma here and try
to run that, I'm going to get a syntax error as expected.
Cool, any other questions?
Great.
So back to slides.
So types.
So we talked about types a little bit earlier,
and I'm just going to talk a little bit more about them.
So JavaScript has what's called dynamic typing, meaning given a variable,
it has no type associated with it.
So just like I said, give me a variable called first name
and set it equal to a string.
I could actually change that later to, say, a type
number or a Boolean or anything like that.
And JavaScript is fine with that just because it has those dynamic types.
And there a certain number of primitive types.
Primitive types are types that have no methods, and they're immutable.
And so undefined, null are two of them.
Boolean.
Everybody should know Boolean true or false.
Number 1, 2, 3, negative 1, 2, 3.
It has no float, so 0 and 0.1 are both of type number.
String, which are the things between the quotes.
And then symbol, which is something that's new in ES6,
but we're not going to talk about it, nor are we going to use it,
and then everything else is an object, and we'll talk a little bit more
about that later.
Cool and so a lot of languages have this thing where
you change one type to another type.
So since JavaScript is dynamically typed,
we have this thing called typecasting.
So coercion is the act of changing one type to a different type,
and there's two different ways you can coerce these variables.
So say, as an example, we have this const called x
and we give it a value 42.
Say I wanted to change that value to a string.
There are a couple different ways I can do it.
There's explicit coercion.
There's implicit coercion.
So explicit is, hey, I'm just going to tell you
exactly what I want by wrapping it with the type that I want,
and give it to me.
And so that's being very explicit with what I want.
And so the example of that would be say I
want to get a string from that value x.
I just wrap it with capital string, and it pops out 42 with a string.
There's also a way of doing it implicitly,
which is I'm going to rely on the behavior of JavaScript
in order to get this to a string.
And so say I want to add 42 to empty string.
That wouldn't really make sense if I wanted to have a number,
but since 42 is easily castable to a string,
I can say, hey, give me 42, add an empty string,
and I expect to get back something of type string.
That is called implicit coercion.
And so how might we go about comparing-- oh, yeah.
Question.
AUDIENCE: Is the string passing behind the same ex.2 string?
JORDAN HAYASHI: Yeah, so another way would be to invoke that.
So the question was, what about ex.2 string?
And so yes, another way to get from a number to a string
would be to invoke that method on the string or on the number, sorry.
Cool, and so how might we go about comparing values?
So in most languages you can compare values with the double equals,
but JavaScript has this thing called triple equals.
So there are two different ways of comparing equality.
There's double equals and there's triple equals,
where double equals will actually coerce the types,
and triple equals require that the types match.
And so let's play with that a little bit.
So say I have this value, and I want to know exactly what type that is.
So there's this operator called typeof in JavaScript where I can invoke this.
And that will give me the type of whatever that variable holds.
So if I were to run this code, then it would say number,
because that is the type.
So right now in order to execute my JavaScript,
I'm using this thing called node, which, as mentioned earlier,
is basically a command line runtime for JavaScript, which is built off of V8.
Any browser has a console where you can also just type JavaScript directly
in there.
So if I were to open up the tools on Chrome, which is my browser of choice,
I actually get this, which is a JavaScript console built
into all of these browsers.
So if you guys are using Chrome at home, and you want to follow along,
you're welcome to open up the developer tools here.
Go to console, and you have your own JavaScript interpreter here.
So say I wanted to do that thing where I do const x equals 42,
and I wanted to get the type of that variable.
I can just do typeof x, and it will output that number.
So there's a little bit of a caveat with this, where this might surprise you.
So who thinks they can guess what this will output?
First of all, what should it output?
So if we remember back a few slides, we talked about all the different types.
One of them is undefined, one of them is null.
And say I want to get typeof null.
So what should it output?
Yes?
AUDIENCE: String.
JORDAN HAYASHI: String, why would you say string?
AUDIENCE: Because [INAUDIBLE].
JORDAN HAYASHI: That's a good guess.
So basically, the answer was so if you can console log it must be a string.
And while that is correct, most of these types can actually be cast to string.
So we talked about implicit versus explicit coercion.
And the way that console log works is it actually
will turn these values into a string in order to console.log them,
but it doesn't necessarily mean the typeof that value itself is a string.
Yeah?
Yeah, so the null.
So we would expect the typeof null to be null, since null is actually
a primitive type.
However, this actually returns object.
So JavaScript does have some strange behaviors.
This is one of them.
And people often ask, hey, we're on ES6 now.
There have been six different versions of JavaScript.
Why don't you just change this to be null?
And the answer that ECMA gives is, well, the whole internet would break.
And so each new version of ECMAScript should definitely
be backwards compatible with the previous versions.
Otherwise, say I put out a website tomorrow.
If somebody comes down and changes the JavaScript spec,
then my website might break.
And so a lot of websites actually rely on this to be true.
And, therefore, if a breaking version of ECMAScript is released,
it might actually just have unforeseen consequences.
So this is just one of those strange JavaScript gotchas.
Cool, so another good question would be so when should I use double equals
versus triple equals?
And people generally say you should never use double equals,
because that means you have to know exactly how every single thing coerces.
And not only you, but every single person who reads your code
should know what all these values coerce do.
And some of them might be somewhat surprising.
So we have a chart here that talks about the JavaScript equality table.
For those of you who have the slides opened, you can click on that link,
and it will bring you to the repo that has this.
Basically, some of these strings are somewhat strange.
Like how empty array is double equals to false, which doesn't really
make a ton of sense.
A lot of these don't really make a ton of sense
and, basically, never use that double equals because it
might have some strange behaviors.
So moving on with coercion.
So we talked about coercing things into other types,
but how about if we're getting to bools?
So JavaScript has these things called falsy values.
Who can name a falsy value?
So falsy value is any value that, if cast to bool, becomes false.
AUDIENCE: Two.
JORDAN HAYASHI: Two?
So two is actually truthy.
So every number except for one number is truthy, well two numbers actually.
AUDIENCE: Zero.
JORDAN HAYASHI: Zero would be one of them, yeah.
Not a number which is actually a number, of type number, is also a falsy value.
Who can name another falsy value?
AUDIENCE: Blank?
JORDAN HAYASHI: Blank what?
AUDIENCE: Or empty.
JORDAN HAYASHI: Empty what?
AUDIENCE: Empty array.
JORDAN HAYASHI: Empty array is actually truthy.
False is another one.
Undefined, null.
So those are the five falsy values.
So who can name some truthy values?
Somebody said two, which is a valid one.
Three, four, every other number other than zero, negative zero, not a number.
Empty array is also another truthy.
Empty object and literally everything else.
So anything other than those values right there are truthy.
Cool, so objects, arrays, functions, objects.
It looks like I put objects twice there, but I actually put it four times.
So JavaScript has this weird thing where if it's not
one of those primitive values, it's an object.
And so we'll talk about this thing in a little bit
called prototype inheritance, which talks
about how these objects inherit from each other
and how they actually work under the hood.
But first let's compare those two types.
So we talked about primitives earlier, which is--
who can name some of the primitives?
AUDIENCE: Null.
JORDAN HAYASHI: Null, undefined.
AUDIENCE: Number.
JORDAN HAYASHI: Number.
AUDIENCE: Boolean.
JORDAN HAYASHI: Boolean.
AUDIENCE: String.
JORDAN HAYASHI: String.
And simple.
So good, you got them all.
Nice.
So everything other than those primitive types are actually objects.
So primitives are immutable, which means if you
want to change them, you're actually replacing them with a new value
rather than actually changing them themselves, whereas objects are not.
They're actually mutable.
So who knows what storing by reference means?
So storing by reference means we actually
store a reference to this object thing, and we can actually
change what is held there without actually changing
where that thing is located in memory.
We'll talk a little bit more about that in a second.
But the opposite of that would be storing something
by a value, which is what happens when you have primitives.
So, like I said earlier, primitives are immutable,
which means once you create a primitive, it can't actually be changed.
And when you want to change something, you actually create a new primitive
and replace the old one, whereas mutable things are actually
stored by reference, and you can actually change that object.
And so let's play with that a little bit.
So there are a few different ways to create an object.
One would be this way.
So just saying, give me a new object.
And so now o is this a new object thing.
And say we want to start populating the object.
We can do o.firstname and assign that a value.
o.lastname, assign that a different value.
Notice that I have strings with double quotes and single quotes.
It doesn't matter.
So something other than a string.
We can do a Boolean, so isTeaching.
We can assign that to true.
o.greet, and we can give that a function.
[TYPING]
So that would be one way of creating a new object is
to use this new keyword along with capital objects.
And that says, hey, give me a new object.
And I'm just going to fill it up with these values using this dot notation.
Another way to do that would be what's called an object literal.
So I can just do open curly, close curly, and that
gives me basically a new object.
This is actually the preferred way over that old new key word with object,
mostly because a, it's easier to read, and well mostly just
because it's easier to read.
And so I can start filling those values in with o.firstname.
And another way to index into these objects is to do o.lastname.
So notice I use brackets there, which means inside this bracket,
I'm going to have some value, and that value
is going to be that key of that object.
So I can do the same thing here.
And say I actually wanted to use not a string literal inside these brackets.
I could also do that.
So I could do isTeaching and do o and then pass in this variable
here with a value of isTeaching, and that will set that key.
And then say I wanted to do o of greet and give that same function.
Call and so those objects are basically the same.
And last, we can actually put everything in line.
So we can do this.
[TYPING]
Cool, and so those three objects are basically the same thing.
It's just three different ways of declaring objects.
You can also nest objects.
So say I wanted an object within an object.
That's also fine.
Say I wanted to do something like this.
[TYPING]
That's also fine.
So that's an object within an object.
Any questions with that?
Cool.
That's actually--
AUDIENCE: I have a question.
JORDAN: Yeah.
AUDIENCE: Do the elements of the objects all have to be labeled with strings?
Like if a key were numbered, say, would that work?
JORDAN: Um, So anything, so anything here, is interpreted as a string.
So say, we were to do, like this,
That would be, basically, one as a string.
So that, this value here will be cast as a string.
And that's what will be used as the key.
So the question was, can we use numbers, or anything
other than strings as keys in objects?
And the answer is, kind of, because everything will just
be cast to a string.
Yeah, great question.
Let's actually copy and paste this into our browser.
And we confirm that it works.
And so, how might we go about getting those values back out?
So, it's basically the same way we got them in.
So if we do dot, we can see, oh, these are all, this is the browser saying,
oh, these are all the keys of the object.
So I can do o3.address, and it will give me back the object.
And say we want to get this number out of here.
How might we do that?
[TYPING]
AUDIENCE: Dot and the number.
JORDAN: Exactly, dot number.
Alternatively, we could have also done this.
[TYPING]
And gotten the same thing.
Any questions with objects?
Yeah.
AUDIENCE: Is there a conventional way to do that?
Or is it kind of like reference?
JORDAN: To do what?
AUDIENCE: Just between dot number and [INAUDIBLE]..
JORDAN: Yes, so the question is, is there a conventional way
to get values out of objects?
Generally the convention is to use that dot notation.
So say we wanted o3.address.number, the convention
would be to use the dot both of these times.
But say we didn't know exactly what we wanted out of it.
We could, so say we had this--
[TYPING]
Something like that, where we have some dynamic key.
Where the key we didn't actually know, that's
when you actually have to use the bracket notation.
Where we have o3.address, and then we pass into it that key.
Since key is a dynamic, since it's a variable,
we don't know what it is, we have to then use that bracket notation rather
than the dot.
Great question.
Yeah.
AUDIENCE: Um-- You cannot do 0.1 for example.
[INAUDIBLE]
JORDAN: So, if we did o.1, yeah, so, o.1, 1 here, since we're
typing it here, is a number.
And we cannot set keys to numbers.
But if it were an object literal like this,
[TYPING]
JORDAN: It considers this not to be a number, but rather a string.
AUDIENCE: You can the array assignment by putting brackets around the one
and passing it as a string, so you can do 0 dot
[TYPING]
AUDIENCE: Our brackets around [INAUDIBLE] o
dot open bracket, open braces, and then, quotes, one.
And then set that to a value.
JORDAN: So, I think you mean this?
[TYPING]
Yep.
And I believe you can also do this.
[TYPING]
Because that will get cast to a number.
I mean a string.
Any other questions?
Cool-- yeah?
AUDIENCE: If you have want the number one inside the bracket notation,
versus the string one inside the bracket notation,
it will be treated as the same keys?
JORDAN: Yeah, so the question is, what is the difference between this here,
and this here?
The difference is, anything between the brackets
will get coerced into a string.
And so, since this is already a string, it's just that string one.
Since this is not of type string, it actually
gets implicitly coerced into a string.
And so, like we saw earlier, if we did one plus some empty string,
we get back the string one.
So this becomes a string one, and it will index into that.
Whereas, this number here, so if we did o3.1,
[TYPING]
That one does not actually get coerced, like it does between the brackets here.
So JavaScript is basically saying, hey, this doesn't really make sense.
I need a string here, not a number.
Cool, any other questions?
Great-- So, let's talk a little bit about this thing, where
I was talking about mutating objects.
So say--
[TYPING]
So, say I had this object, so--
In it we had, a gets a, b gets b.
So say I wanted to change a to be something else?
How might I do that?
Yes.
AUDIENCE: dot a equals--
JORDAN: Yes, so I can update this to be anything else.
[TYPING]
Cool, but say I actually did this.
[TYPING]
Anybody care to guess what would be console logged here?
So basically, what he's doing is, we're creating a new object.
And storing it in o.
This object has two keys, a and b, where their values are a and b respectively.
I'm creating this new object called o2, and assign a value of o.
I then go reset o.
Not o2 but o.a to be a new value.
And I'm going to console log o2.a.
Anybody care to guess what this is going to console log?
Yeah.
AUDIENCE: a?
JORDAN: So, a guess is a.
What would be the alternative guess?
AUDIENCE: New value.
JORDAN: New value--
[INAUDIBLE]
JORDAN: Yeah, so let's run that.
So you get new value.
And so I talked about this thing called passing by reference,
and passing by value.
So, basically what's happening here, is that o is being said,
hey, give me a new object, somewhere.
And then store inside of it, a and b.
And then o2 says hey, give me another object and set it to o.
And rather then creating a new object, with the same keys and values,
it's actually pointing to that same object.
So this is a case where things are getting stored
by reference, rather than by value.
Meaning, so in CS50, we talked a little bit about pointers,
and this is the exact same concept.
Where these objects are not stored as entire serialized objects,
but rather as references to these objects in memory.
So o and o2 are both referencing that same exact object.
So when we go back and say, hey update o.a to be new value,
it's changing this object here, and still
o and o2 are both pointing to that same object.
So if I were to have updated 02 here, and console logged o.a,
we would get that same result. Because o and o2 are still both referring to that
same object in memory, and we're still updating that object here.
Does that make sense?
Yeah.
AUDIENCE: So what if you wanted them to be different.
Like, what if you wanted them to not point to the same thing?
JORDAN: Yeah, so the question is, what if we
wanted them to have the same value but be different references?
How might we do that?
There are two different ways.
One, the more annoying way, would just be to type the whole thing out again.
[TYPING]
So now we're guaranteed that o and o2 are
going to be different references to an object that is basically the same.
And another way would be --
there are multiple different ways to do this.
The most common way in pure JavaScript, would be to do this--
[TYPING]
Whereby, object assigned is basically saying, hey, pass in to me
a bunch of arguments.
And every single argument, I'm going to merge into the previous one,
those lose keys and values.
And so this is saying, give me a brand new object.
So I'm using the object literal here to mean a new object.
And then merge into it, of the keys and values of this object called o.
And so this is basically saying, give me new object,
and then set all of the keys and values of o to be in there.
So this is the way of cloning an object.
But say we actually did this
[TYPING]
So, what do we expect this to now print out?
So, we mentioned that line nine, we're taking the keys and values of o,
and merging those into a new object.
And then that line 11 we're taking o2, getting the dot object,
so accessing the value with the key called object.
And then setting that object's key called key to new value.
And then now console logging o to object dot key.
Yeah.
AUDIENCE: So, new value?
JORDAN: Yes, so this, so the guess is new value,
and that is absolutely correct.
So this, so-- line nine here is doing what's called a shallow copy.
Which is just grabbing the keys and values of some object,
and just setting those blindly into some other object.
As opposed to what would be called a deep copy.
Where that would take the keys and values.
And then if the values are objects, you'd
also take those objects keys and values.
Do that recursively, and basically get every single layer deep cloned.
But since object assigned just takes the keys and values dumbly,
if we have an object in there, update that object's key.
o.obj and o2.obj are still referencing that same object in memory,
so since we updated--
we mutated that object, it would update in both o2 and o.
Does that makes sense?
Great, any questions about this?
Yeah.
AUDIENCE: How would you do a deep copy?
JORDAN: So, how would you do deep copy?
That's a great question.
There are multiple different ways.
So most people would say use a library.
Meaning, rather than implementing this thing on your own,
just take somebody else's implementation.
But lets, let's actually do that.
That's a good question.
So, how would we do a deep copy?
[TYPING]
So, I know we haven't talked a ton about JavaScript yet,
but lets actually tried to do this together.
So, let's call a function, deep copy.
And we're going to pass into it some object.
And how would we implement this, if we're guaranteed
that no objects have values of objects?
Meaning we are guaranteed not to have objects within objects.
How might we do this?
AUDIENCE: Check for the type of the key.
JORDAN: Yes, so we can check for the type of every key.
But if we're guaranteed that no values are going to be objects,
we can just do a shallow copy right?
Yeah.
AUDIENCE: So check every value?
And if it's, the value is [INAUDIBLE] we have to recursively deep copy that.
JORDAN: Yeah.
So hold that thought.
Let's actually implement this as if we know that there
are no objects inside of objects.
So if that were true, we could just return the shallow copy right?
So object.assign
[TYPING]
So this would be a perfectly valid implementation,
if we knew that there's no such thing as objects within objects.
But since there are, we're going to have to do some magic here.
So, can you repeat your recommendation again?
AUDIENCE: So, check if the--
any of the values is an object.
Then you can't just take that value into a new object,
just to reference the same object, we need to deep copy that object,
instead of just taking [INAUDIBLE].
JORDAN: So basically, so check every single value,
and see if it's an object.
If it is an object, then go ahead and deep copy that object.
Otherwise, return that value.
Cool.
So let's do that.
So-- the way to get the keys of an object, is this function called
object.keys
[TYPING]
So, so by doing object.keys and passing in the object,
we now have an array full of the string values of the keys in that object.
And so what we're going to do is, we're going to iterate through those keys.
Check to see if the value is of an object.
If so, we'll go ahead and clone that.
Let's not worry about functions, or any of those other things for now.
Otherwise, just return that value.
So, let's have this for loop--
[TYPING]
And do that.
So first, let's define--
[TYPING]
The new objects that we're going to return.
And let's just start with an empty object for now.
And so, now we have to check to see if each of these values is an object.
If so, copy it, otherwise return.
So how are we going to check the type of a particular key?
AUDIENCE: Type of operator.
JORDAN: Yeah, exactly, that type of operator.
So we can do if the type of obj, and then pass in by keys.
[TYPING]
So what do we want to check against?
[TYPING]
All right, what am I doing wrong here?
AUDIENCE: Three equals.
JORDAN: Yeah, we should always use that three equal signs.
In this case it would matter.
But, we should just get in the habit of doing that.
I mean so if you notice here, we actually have bracket notation
within bracket notation.
That is totally fine.
Cool.
So, if something is an object to what are we going to turn?
We can do object, new object with that key.
[TYPING]
Equals-- what?
AUDIENCE: The value?
Oh no, I'm sorry, deep copy.
JORDAN: Yeah, let's actually deep copy that value to two.
[TYPING]
Otherwise--
[TYPING]
We can just set it equal to the other key.
[TYPING]
And then at the very end, we can just return that new object.
[TYPING]
Cool.
Anybody see any bugs?
Candy opportunity.
All right, let's just go ahead and test this.
So-- let's do--
Do copy o--
Then update o--
[TYPING]
o.obj.key Let's say of to new key.
[TYPING]
o3.obj.key.
Get rid of that.
All right, so moment of truth--
[TYPING]
Key, rather than new key.
So we did it.
Whew.
All right, any other questions about--
objects, mutating, references, any of that stuff?
No, great.
So, arrays as well, are also stored by reference.
So if we were to do the same exact example,
and rather than updating the object, we updated that array,
we'd end up with the same exact results.
And so, if we were to update our deep copy function to also take
care of arrays, all we have to do is also check, rather than
checking object, also check against arrays or any other data types
that we're going to check.
Let's move on to prototype inheritance.
So what exactly is prototype inheritance?
Well, so non-primitive types have a few properties and methods
associated with them.
So, array, we have this thing called array.push,
which will add values to an array.
So, say we have something like--
[TYPING]
An empty array, if we did array.push--
some value, then array now has something in it.
If we were to push another value into it--
It now has two values in it.
So array.prototype.push is a method that we
have available on all arrays, that just adds new values to an array.
Another one would be like, string.prototype.toUpperCase.
So, say we were to have some string, so--
[TYPING]
If you do str.toUpperCase--
Now we, we're left with a new string with all uppercase.
So, these are just functions that we can invoke on any non-primitive that
gives us something else.
That is available to all non-primitives of a given type.
So each object stores a reference to its prototype.
Meaning, it has all the-- it knows about all of these methods.
And it stores a reference to the object in order to know where these methods--
the code to actually the run that lies.
And say we have a prototype chain where there
are a bunch of different methods of the same name.
Whichever one is bound most tightly to the instance has the priority.
So say we have an object in an array, where array is the--
So say we have a value that is of type array, up the prototype chain
we have arrays, its prototype is array, that prototype is object.
Say we have the same named method on both of these.
If we call that method, the one that's bound most tightly the,
array will take priority.
So let's actually show that.
So, say we have something like--
So array, it has a reference to its prototypes.
So if you did array dot, double underscore, proto, double underscore,
we see this large object with a bunch of different functions.
And so we see down here, push, which is that one that we invoked earlier.
So this is exactly how it knows where that push implementation is.
And so we can do arr.__proto__.__proto__,
and go even farther up the chain.
So this one has a bunch of other ones toString value of, whatever.
And if you notice, both the arrays prototype, and it's arrays prototypes
prototype, have this method called toString.
And if I were to invoke arr.toString which one of these
is going to actually get called?
AUDIENCE: The second one.
JORDAN: The second one?
Which one is the second one?
AUDIENCE: Dot proto, dot proto.
[INAUDIBLE]
JORDAN: Dot proto, dot proto.
So, actually the opposite.
So, since the toString, on the array prototype,
is more specific than the toSting method on the object prototype,
this one is going to get invoked.
Because its, just because its more specific.
Because an array is an array and its an object.
But its more specific to call it an array, than to call it an object.
So its going to invoke the one on the array.
Does that makes sense?
Anybody have a question about that?
It's an important concept, and a little bit confusing at first.
Cool.
Most primitive types had object wrappers.
And so we talked about how primitive types don't
have any methods associated with them.
But primitive types also have wrappers that
have prototypes associated with them.
What the heck does that mean?
So if I were to do 42.toString, It's going
to be like what the heck do you mean?
42.toString--
[TYPING]
Right I told you that these primitive values don't have methods.
And so 42.toString doesn't really make sense.
But say I were to do this thing const num = 42 and did num.toString,
[TYPING]
That will actually do something.
And that's a little bit strange.
This is another one of those JavaScript interesting behaviors.
Because all of the primitive values have wrappers
that give them access to a bunch of methods.
And JavaScript will automatically do what's called boxing for you.
Which it says, hey, like I know 42 is a primitive,
but if you call this toString method, I know what you mean.
I'm going to box this 42 number with this prototype that
has a bunch of these methods on it.
So if I were to do 42.toString that would make sense.
And if I num.__proto__,
[TYPING]
That actually exists.
But 42.__proto__
[TYPING]
Does not.
Does that make sense?
Another way to find out if a value is an instance of some type,
you can do this thing called x instance of number.
And that would return false.
Because x is actually not of type capital number,
it's just boxed around that number object for your reference.
Does that make sense?
Again not something you're going to use everyday, just something that
is helpful to know in case you run into the strange corner cases.
Cool.
So why would we use a reference to the prototype?
And what is the alternative there?
Anybody care to give a shot at that?
So this is going back a little bit too deep copying versus shallow copying.
AUDIENCE: So, maybe if the initial object is massive.
And then you just want to do something, like, after it?
JORDAN: Yeah, so if the initial object is massive, like, what happens then?
So the alternative is basically to clone every single--
to deep copy every single prototype every single time
you couldn't new value.
Which is, safe, because that number and all of its methods
are all encapsulated within that specific variable.
But it's also a little bit expensive in both performance,
because you have to do that deep copy every single time.
And also of memory, because the object starts to get pretty large.
And if you have an array of like 100 different things,
all hundreds of those, deep copying every single prototype gets pretty big.
And so what is the danger of storing a reference to the prototype,
rather than copying the whole thing?
AUDIENCE: I guess if change it, [INAUDIBLE]..
JORDAN: Yeah exactly.
If you change it, then it changes for every single value of that type.
So let's do that really quick.
So, so say we have, so we solved num, which is equal to 42, right?
And if you do num.toString, what so we expect to come out?
42 is a string right?
But say, some devious programmer was doing this thing
where he did number.prototype.toString
[TYPING]
And you actually override that to be some function that will return 100.
Now what happens if I call a num.toString?
Wait a second.
[TYPING]
So that could have some dangerous penalties right?
So if I were to change the prototype of the number class,
even though num was declared 100 lines prior to be the number 42.
And we tried num.toString here and it returned 42.
If we were to change the prototype later,
it affects everything that has ever happened.
So num.toString now starts returning 100.
And everything that will happen.
So if I were to do--
[TYPING]
Everything in the future also has those consequences.
So changing the prototype is something that is very dangerous,
and is recommended against doing.
Does that make sense?
Cool.
So let's actually take a short break.
All right welcome back.
So let's talk about scope now.
So what the heck is scope?
So Scope is a term that's talking about variable lifetime,
and how long these variables actually exist.
And so there are a couple different types of scoping.
There's lexical scoping, which is that keyword var that you might
see if you're reading old JavaScript.
And there's block scoping, which refers to how things like const or let
are scoped.
So lexical scoping is basically saying, hey, give me a variable
and it will exist for as long as since it
was declared all the way until the end of a function ends or the file
if it's in a file.
Whereas the analog would be block scoping
where it behaves a lot like something behaves in C.
Where basically a variable will be around
from when it's declared until the next end curly brace is reached.
And so that there is the big difference between var and const and let.
And the difference between const and let is
that const is something that can't be updated,
meaning if I set a variable to be a constant, it
means I'm not going to update that reference later,
whereas let can be updated.
So if I were to do const thisIsAConst and set about equal to something
like 50, if I were to say thisIsAConst and try to update that to be 51,
I'm going to get an error actually that says, hey, you call that a const?
But you're trying to change it.
That's not OK.
And so no matter how I want to change it--
say I do that plus-plus or something, that's also going to fail.
Whereas if I did something like let thisIsALet equal to 50,
I can go ahead-- or 51, I made a typo, but I can just say,
hey, it was a typo, thisIsALet, let me change that to 50 and we're all good.
I mean, I can also do that plus-plus or change it however I want
and it will actually update that.
Note that I said the reference can't be updated.
I did not say anything about things being immutable.
So if I get const obj equals this empty object, if I then--
I can't update it to be--
point to a different object.
If I try to do obj is something else, I'm going to say,
hey, you call this a const and you're trying to change it.
But I can still do obj.a and set that equal to a, because why?
Anybody care to tell me why?
Exactly.
So the pointer is still pointing to the same object.
The reference has not changed.
So we mutated that object, but it's still
pointing to that same place in memory.
It's still pointing to the object that exists over here
and that reference has not been changed.
Does that distinction make sense to people?
It's a pretty important one.
Cool So let's play a little bit with these variable lifetimes.
So I said before that if I tried to do something like this, what happens here?
Error.
Why?
Because it's a constant and we can't update a constant.
And we can confirm this.
Oh.
It'll actually tell us, hey, a TypeError.
You call this a constant variable but you're trying assign it.
That's not OK.
But if we did--
this is OK because the reference to that object did not change,
it's just mutated it.
On the other side, if we did something like let thisIsALet A Let equal to 51,
and then want to change that later, we go 50, that's totally OK.
But if I actually tried to reassign-- so let thisIsALet.
If I tried to do this again, it's going to yell at me because it's saying, hey,
you already declared something called thisIsALet.
You cannot declare that again.
And so const and let actually protect you
from declaring something with the same variable name twice, which is something
that var does not do.
Cool.
What do you guys think would happen if I tried to do this?
Anybody care to guess?
Undefined?
So let's try to run it.
Error.
So since these things are block scoped, it
means the variable is declared at the line that it is written.
And if we try to use it before then, it actually does not even exist at all.
So if I tried to console.log something called thisIsAConst here, remember,
the JavaScript interpreter is just reading down
and it won't see like, hey, what the heck is thisIsAConst?
I have no idea what that is so I'm just going to Error here.
Same thing if I tried to do this as a let here.
That will also Error with the same error.
AUDIENCE: So what's line 14 error on?
JORDAN: Why does it error?
Because we're trying to declare two variables with the same variable
name twice.
So we have let thisIsALet equal 51 here, and we try to do it again
and it's saying, hey, you already have a variable called thisIsALet,
so I'm not going to allow you to do that again.
So it's going to be this error right here.
AUDIENCE: So it's the instantiation of it?
JORDAN: Yeah.
It's saying like-- basically I'm saying, hey, give me a variable to call,
this is a let here, and then a couple lines later I'm saying,
hey, give me a variable called thisIsALet,
and JavaScript says, hey, like, you already
have a block scope variable called thisIsALet,
so I can't give you another one.
However, if I tried to just update it like this, that's totally OK.
Any other questions here?
So the other thing we said, we can have these things called a var.
If I did var thisIsAVar equal to 50, that's fine, I can update it.
That's also fine.
I can also do this, and that won't yell at me.
So vars are older ways to declare variables
and they don't have the same protection that let and const do.
You can override them like this and it's totally OK.
And you can actually declare a whole new variable with the same variable name
and that's also OK.
And something-- yeah?
It just-- yeah, so that's--
So if I try to run this, it will update the old one.
It'll just replace that value.
It's actually called shadowing, where you create a new variable
with the same variable name which basically just overshadows
that old one.
So it's as if the other one didn't exist.
Cool, so check this out.
So this errors and we know this errors.
But say I were to do this.
You'd expect this to also error, but actually it does not.
It returns undefined.
So this is another weird thing about JavaScript.
This is called hoisting.
And so certain things are hoisted, which it
means basically it takes the definition of something
and hoists it to the very top of the file and does that first.
Get
And a few things are hoisted.
Var the-- actually, the declaration of the creation of an empty variable
are hoisted.
Function definitions are hoisted as well, but const and let
are not, as we saw if we tried to access the variable name of the const or let,
then it errors.
But with a var, the declaration of that variable is actually hoisted.
And we can talk a little bit more about how that works in a second,
but let's actually play with it a little bit more.
So function definitions are hoisted.
So let's clean up this file a little bit.
So let's call this new function, called--
so this is console.log.
So I defined this function called thisIsHoisted
at the very bottom of the file.
And all it does is it console.logs, there's
a function declared at the bottom of the file.
But something very interesting is at the very top of this file, I can call it.
And that will actually work.
And so that is what's called function hoisting.
The behavior whereby a function definition
declared at the very bottom of a file is actually available for use
at the very top of the file as well.
But this does not work in other cases.
So say I were to do something like this.
So who can tell me what the difference is between line 21 and line 25?
They look pretty similar, right?
Yeah?
OK.
Yep.
So repeating for the camera, line 25, thisIsHoisted is declared as a constant
so it cannot be changed, whereas line 21 is declared as a function and so it can
be changed, which is absolutely correct.
What happens if I try to do this up here?
Yeah, so we're going to get an error.
thisIsHoisted is not defined, but why?
Because as we talked about earlier, these things
called consts are not available for use until they're actually declared.
So certain things are hoisted.
Var.
So the declaration of these variables are hoisted.
Function definitions if they're declared like this are hoisted.
But if we create what's called an anonymous function,
a function without any name, and set that equal to--
or assign that to be a constant, then that constant is not created.
Does that make sense?
So what happens if I try to do this?
Yeah, so same thing.
It errors.
What happens if I try to do this?
What's hoisted?
So notice-- so notice the difference in the two errors.
They're actually not the exact same error.
So who wants to give a guess at what's going on here?
So when I declared it with a let that's saying reference error,
thisIsHoisted is not defined, whereas when I use a var,
it says TypeError, thisIsHoisted is not a function.
Why might that be?
Yeah?
Uh huh.
Exactly.
So repeating for the camera., and I'll bring up the code as well.
So down here, so the first time when we declared this with the let,
it's not declared at all.
This variable does not exist at all.
So this is not hoisted, the JavaScript does not
know what that means on line 1.
But when I use a var here, remember, it hoists
the declaration of this variable.
So it creates a variable called thisIsHoisted.
However, it does not assign it a value until line 25 is executed.
And so at line 1, thisIsHoisted exists.
It's just equal to undefined.
And if I try to invoke it like a function,
it says, hey, this is an undefined variable,
I can't invoke it like a function, this is a TypeError.
And so even though both of these things errored, the reason that they errored
is slightly different.
In case one when they're declared using a const or a let,
that variable just does not exist at all.
However, when we declared using var, the variable exists.
It's just undefined, and so if we try to invoke it like a function,
and it says, hey, like, this is undefined, it's not a function.
Does that make sense to everyone?
So why does this happen?
How does this happen?
And the reason is actually how JavaScript is executed.
So there's two phases in the execution of a JavaScript file.
So before executing any code, it has all of the text in front of it,
but it hasn't executed anything, it just reads the entire file.
And what's it looking for?
Well one, it's looking for anything wrong with the file.
So say like my very first example when I had an array and it was missing
a comma, that's something that's caught in the first reading.
It says, hey, like, this looks like an array but it's not quite right.
Like, I see this thing that I'm not expecting, I'm respecting a comma here.
So that's one thing that's caught.
Other things, maybe it will add some semi-colons for you
and stuff like that.
And then any function definitions just get saved in memory.
It says, hey, this is a function, let's put this in memory
so if somebody wants to use it at line 1 they're able to.
Variable initializations, if they're lexically scope-- or I mean,
if they're lexically-scoped they will be declared,
but they will not be initialized.
Meaning anything declared with var will be
declared-- like there's a variable that exists,
but it's not going to be set equal to anything until later.
And then there's a second phase called the execution phase, whereby the code
is actually run, it's executed.
And so that is when things like const or let get invoked--
or get both declared and initialized.
Does that make sense to everyone?
Anybody have any questions on scope?
So why might we take advantage of this scoping?
Does it seem like a feature or does it seem like a bug?
Anybody care to guess?
There's no correct answer to this.
It's completely opinion.
Yeah?
AUDIENCE: So you've got a controller with math functions in it.
JORDAN: Uh huh.
AUDIENCE: You can call the ones there and lay down
a file so that you can write all your code in one giant function?
JORDAN: Yes So, one thing might be we can
have these function declarations at the very bottom
and then we can use it at the top.
And so that might be good for code organization.
Like somebody reading your code would know, hey,
if I'm looking for these functions, they're
all going to be declared together at the bottom.
And they might be used everywhere, but all the function declarations
are all going to be here.
So that might be a feature because it's good for organization.
So say we're to play devil's advocate.
Who might see this as a bug?
Uh huh.
OK.
So the question is, like, why can we declare two variables
with the same name when they look like they're in the same scope,
specifically with this var keyword?
Which is another thing where it's a bug/feature that a lot of people use.
And so if JavaScript were to be updated and that bug/feature were to disappear,
a lot of code would break.
So a lot of people have took advantage of this.
And basically it's the same thing as like, why is typeof a null object?
Just because it is.
And we can't change that because people rely on that behavior.
I know it's kind of an anti-answer, but does that kind of makes sense?
Yeah, you should-- so there's not really a good reason to use var anymore.
With ES6, everything supports const and let.
And so I've been using them in all of the examples except for these.
And I think you should definitely use them as well.
The reason I'm getting var is one, so if you see this,
you know what's kind of going on, and because a lot of legacy code-- a lot
of code written two, five years ago, 10 years ago
uses var just because it was the only option.
One thing that I didn't mention earlier is that you can also
declare a variable like this.
So this is another way of declaring a variable.
This creates a global variable.
It's something that you probably won't see that often, there's
really no reason to do it.
But in case you ever see that, that's what it is.
So if you declare a variable without giving it a keyword like let, const,
or var, it creates it globally.
But there's no reason for you to use this, really.
It's just if you ever see it, that's what it is.
Any questions at all about scoping?
It's a pretty important concept.
And for online folks as well, remember, you can post in Slack
and the staff will either field those questions or pass them to me.
Cool So let's move on to our final topic of the day.
So the global object.
So the way these things all work is basically in any given runtime,
there's this thing called a global object.
And so all variables, all functions are actually
keys or parameters or methods on the global object.
So in browser, there's this thing called a window
which is a global object of a window.
So this is a browser environment.
And if I type window, I see this thing.
And it has a lot in it.
But basically the window is this global object,
and on it there is all sorts of stuff.
So we see $0, $0a.
So these-- so any variable that you declare in this console
gets put onto this global object called window.
And so actually, let me open a brand new browser tab.
And we'll get a little bit of a cleaner window.
So the reason that we saw these things called $0, $whatever,
is because I open these dev tools on the same tab as my lecture slides.
And the way that Google Slides works is since it's
something dynamic on the web, it has to be using JavaScript.
And since it's using JavaScript, obviously it's
creating a bunch of functions, it's creating a bunch of variables.
And all of these things end up on the window object.
And so when we check out-- when we inspected the window
object of that particular tab, there was a bunch of stuff
on it because that's how Google Slides is working.
And when we created a new tab, this is a brand new tab
and therefore no JavaScript has been executed,
so there's a lot fewer variables and stuff on this new tab.
And so whenever we create new variables-- so
say we do const x equals this is a new variable, we see x is this.
We can also do this window.x--
I declare it as a const.
So the way that browser windows handle these blocks of variables
is a little bit different.
So we'll use var for the sake of explanation.
So when I create this new variable called var y,
it is the exact same thing as window.y And so if we inspect the window,
we see a bunch of things that are part of the JavaScript API, the browser
API, all of these things.
And if we go all the way to the very bottom,
so this is stuff that is created in the new tab.
L, M, N, O, P, Q, R, S. We see this y here.
So part of that window object is that variable called y
that we stuck on the window.
And so even though we declared it with var y equals something,
it ended up on that global object, and that's
how JavaScript keeps track of all of your valuables and stuff.
And so what happens when we're in the node environment and we type window?
up window's not defined.
And it's because in the node environment,
the global variable is not called window, it's actually called global.
And if we type global, we now see all of these things.
And a lot of this will overlap with that window object in the browser,
but since the browser API has things in it that is not necessarily
used in the command line stuff like, give me a DOM node
or give me CSS on this DOM node, stuff like that, that doesn't really
make sense in a command line interface, therefore those things
are not on this global object.
And then if we try to type global, here in the window,
that doesn't really make sense either.
There's another thing that's just kind of important to know
but you might not ever take advantage of it.
But does that-- does that make sense?
Cool.
So let's move onto something that we'll discuss a lot more in the next lecture
but I'll go ahead and introduce the concept in this lecture
and leave you with a little bit of a teaser.
So who here has heard of a closure before?
So closures are actually one of the things
that JavaScript programmers hate the most
because it's a very, very difficult concept to learn.
Mostly because it's always taught somewhat poorly.
And so next time I'm going to try to do a good job of teaching you,
but I'm going to show you right now the problem that a lot of people face.
And so what closures are are functions--
is a behavior whereby functions that refer to variables
declared by a parent function still exist,
and it's possibly because of scoping.
What the heck does that mean?
I'll explain it in the next lecture, but let's go ahead
and explore what this actually means.
All right.
So let's do this.
So first thing I'm going to do is I'm going
to declare an empty array called array, and I'm
going to fill that with a few values.
That's And I'm using var intentionally.
And that's push on a function that does this.
All right So what the heck did I do here?
So I declared a function called makeFunctionArray,
and all it does is it creates an array, fill it with functions,
and then invoke one of them.
And so if I were to call this--
if I were to call this, I'd get back an array full of functions, right?
And what do we expect those functions to do? each of them?
Print a number, right?
And so what should happen is I should just--
I should be able to march through this array, invoke each of those functions,
and get back something that counts, right?
Basically?
So let's see what happens.
So I'm just going to access that first one and invoke it,
and we expect it to print out 0.
So that there is one, a JavaScript programmer's worst enemy,
because it's somewhat unexpected, and as we'll see in coming lectures,
that is actually as expected.
So I'll leave you guys on that cliffhanger for next time,
and we'll go ahead and officially end lecture.
I'll stick around if you any questions.
