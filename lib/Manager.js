const Employee = require('./Employee')

class Manager extends Employee {
    constructor(Name, ID, Email, OfficeNumber) {
        super(Name, ID, Email)
        this.officeNumber = OfficeNumber
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "☕ Manager"
    }
}

module.exports = Manager