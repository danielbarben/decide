const db = require('./index.js');
const questionList = require('./data/dinner_tmp.js');

db.conn.sync().then(() => {
    questionList.forEach(question => {
        db.models.Questions.create({
            projectId: question.projectId,
            question: question.question
        })
    })
});