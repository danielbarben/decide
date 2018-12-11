const db = require('./index.js');
const proejctlist = require('./data/projects.js');

db.conn.sync().then(() => {
    proejctlist.forEach(project => {
        db.models.Projects.create({
            name: project.name,
            bot: project.bot,
            description: project.description,
            firstQuestion: project.firstQuestion
        })
    })
});