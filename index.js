// Write your solution in this file!
const employee = {
    name: "2",
    streetAddress: "2"
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value;
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee} 
    delete newEmployee[key] 
    return newEmployee
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}











// const employee = {
//     name: "1",
//     streetAddress: "2"
// }

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     const newEmployee = {...employee}
//     newEmployee[key] = value;
//     return newEmployee
// }
 
// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = value;
//     return employee
// } 

// function deleteFromEmployeeByKey(employee, key) {
//     const newEmployee = {...employee} 
//     delete newEmployee[key]
//     return newEmployee
// }

// function destructivelyDeleteFromEmployeeByKey (employee, key) {
//     delete employee[key]
//     return employee
// }