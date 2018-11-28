const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key',
    }
}

// a way to copy the object pointing to a difference space in memory
const o2 = Object.assing({},o)

o2.obj.key = 'new value'

console.log(o.obj.key)

//mutation

//o2.a = 'new value'

//console.log(o2.a)

// deep copy

function deepCopy(obj) {
    //check is vals are objects
    //if so, copy that object
    //else return the valye
    const keys = Object.keys(obj)
    
    const newObject = {}

    for (let i = 0; i <keys.length; i++){
        const key = keys[i]
        if (typeof obj[key] === 'object'){
            newObject[key] = deepCopy(obj[key])
        }else {
            newObject[key] = obj[key]
        }
    }

    return newObject
}