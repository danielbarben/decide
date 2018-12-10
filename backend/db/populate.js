const db = require('./index.js');
const proejctlist = require('./data/projects.js');
//const questionlist = require('./data/questions.js');
//const answerlist = require('./data/answers.js');

db.conn.sync().then(() => {
    proejctlist.forEach(project => {
        db.models.Projects.create({
            id: project.id,
            name: project.name,
            bot: project.bot,
            description: project.description,
            firstquestion: project.firstquestion
        })
    })
    /*
    questionlist.forEach(question => {
        db.models.Questions.create({
            id: question.id,
            projectId: question.projectId,
            question: question.question
        })
    })
    answerlist.forEach(answer => {
        db.models.Answers.create({
            id: answer.id,
            questionId: answer.questionId,
            answer: answer.answer,
            next: answer.next
        })
    })
    */
});