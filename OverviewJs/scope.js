thisIsHoisted(); // it will work because of hoisting

const thisIsAConst = 50

//thisIsAConst++ //error!

const constObj = {}
constObj.a = 'a'

let thisIsALet = 10
thisIsALet = 20

let thisIsALet = 30 // error! trying to call a let variable with the same name

var thisIsAVar = 10
thisIsAVar = 31
var thisIsAVar = 32

function thisIsHoisted(){
    console.log('this is a function declared at the bottom of the file')
}