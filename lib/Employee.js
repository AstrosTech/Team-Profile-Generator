class Employee {
    constructor(Name, ID, Email) {
        this.name = Name
        this.id = ID
        this.email = Email
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee