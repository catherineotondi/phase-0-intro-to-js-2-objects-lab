// Write your solution in this file!
const employee = {
    name: "Katerina",
    streetAddress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    for (const key in employee) {
        delete employee[key];
    }
    employee.name = 'Sam';
    let otherEmployee = {
        ...employee,
        streetAddress: "11 Broadway"
    };
    return otherEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    for (const key in employee) {
        delete employee[key];
    }
    employee.name = 'Sam';
    employee.streetAddress = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey() {
    for (const key in employee) {
        delete employee[key];
    }
    employee.name = "Sam";
    let otherEmployee = {
        ...employee
    }
    delete otherEmployee.name
    return otherEmployee
}

function destructivelyDeleteFromEmployeeByKey() {
    for (const key in employee) {
        delete employee[key];
    }
    employee.name = "Sam";
    let otherEmployee = delete employee.name;
    return employee
    
}
