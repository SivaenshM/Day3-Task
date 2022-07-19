                                           
//Sample Json object is created  as below
let object = {
    fname : "shiva",
    lname : "aarthi",
    dom : "not yet decided"
}
//take all the keys of object as a array and store inside the variable “properties”
let properties = Object.keys(object);
//take the length of the properties array and assign to variable length
let length = properties.length;
//1-object iteration using simple 'for loop'
console.log("1) object iteration using simple 'for loop' ");
for(let i =0;i<length;i++)   {
    console.log(properties[i]+" => " +object[properties[i]]);
}
console.log("-------------------------")
//2-object iteration using simple 'for of loop'
console.log("2) object iteration using simple 'for of loop' ");
for (let [key, value] of Object.entries(object)) {
    console.log(key + " => " +  value);
}
console.log("-------------------------")
//3-object iteration using simple 'for in loop'
console.log("3) object iteration using simple 'for in loop' ");
for (let key in object) {
    console.log(key + " => "+ object[key]);
}
console.log("-------------------------")
//3-object iteration using simple 'forEach loop'
console.log("4) object iteration using simple 'forEach loop' ");
Object.keys(object).forEach(key => {
    console.log(key + " => "+ object[key]);
})
console.log("-------------------------")


