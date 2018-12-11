const db = require('./index.js');
const questionList = require('./data/aschenbroedel_fragen.js');

db.conn.sync().then(() => {
    questionList.forEach(question => {
        db.models.Questions.create({
            projectId: question.projectId,
            question: question.question
        })
    })
});