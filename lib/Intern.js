const Employee = require('./Employee')

class Intern extends Employee {
    constructor(Name, ID, Email, School) {
        super(Name, ID, Email)
        this.school = School
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return "📖 Intern"
    }
}

module.exports = Intern