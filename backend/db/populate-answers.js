const db = require('./index.js');
const answerList = require('./data/aschenbroedel_antworten.js');

db.conn.sync().then(() => {
    answerList.forEach(answer => {
        db.models.Answers.create({
            questionId: answer.questionId,
            answer:answer.answer,
            nxt: answer.nxt,
            //con: answer.con
        })
    })
});