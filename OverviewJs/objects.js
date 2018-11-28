const o = new Object()
o.firstname = "Jordan"
o.lastname = "Hayashi"
o.isTeaching = true
o.greet = function() {
    console.log('hi')
}

const o2 = {}
o2.firstName = 'Jordan'
o2['lastName']= 'Hayashi'
const key = "isTeaching"
o2[key] = true
o2['greet'] = function() {
    console.log('hi!')
}

const o3 = {
    firstName: 'Jordan',
    lastName: 'Hayashi',
    isTeaching = true,
    greet: function() {
        console.log('hi!')
    },
    address:{
        street: 'Main St.',
        number: 123,

    },

}
