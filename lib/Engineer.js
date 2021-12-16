const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(Name, ID, Email, Github) {
        super(Name, ID, Email)
        this.github = Github
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer