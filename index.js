const GenerateHTML = require('./src/GenerateHTML');
const Profile = require('./src/Profiles')
const fs = require('fs')

let Template = GenerateHTML.createTemplate()

let document = Template.document
let profiles = document.getElementById("team-profiles")

const TeamMember = async () => {
    let Type = Profile.askForTeamMember()

    switch(Type) {
        case "Manager":
            let ManagerInfo = await Profile.askForManager()
        break;

        case "Engineer":
            let EngineerInfo = await Profile.askForEngineer()
        break;

        case "Intern":
            let InternInfo = await Profile.askForIntern()
        break;

        case "Complete":

        break;
    }
}

fs.writeFileSync(`./dist/${Emily.getName()}-${Emily.getOfficeNumber()}.html`, Template.dom.serialize())