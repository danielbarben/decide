const db = require('./index.js');
const conclusionList = require('./data/dinner_resultate.js');

db.conn.sync().then(() => {
    conclusionList.forEach(conclusion => {
        db.models.Conclusions.create({
            title: conclusion.title,
            conclusion: conclusion.conclusion,
            twittertext: conclusion.twittertext,
            projectId: conclusion.projectId
        })
    })
});