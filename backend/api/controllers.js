const db = require('../db/index.js');

const homeRoute = (req, res) => {
    res.send("Server is running")
}
const findAllProjects = (req, res) => {
    db.models.Projects
    .findAll({where: {id: '1'}, include: [{
        model: db.models.Questions, include: [db.models.Answers]
        }]
    })
    .then(projects => {
        res.status(200).send(projects);
    })
};
const findQuestionById = (req, res) => {
    const questionId = req.params.questionId
    db.models.Questions
    .findById(questionId, {
        include: [db.models.Answers]
    })
    .then(question  => {
        question === null ? res.status(404).send([]) : res.send(question)
    })
};
const findConclusionById = (req, res) => {
    console.log(req.params.conclusionId)
    const conclusionId = req.params.conclusionId;
    db.models.Conclusions.findById(conclusionId)
    .then(conclusion => {
        conclusion === null ? res.status(404).send([]) : res.send(conclusion)
    })
};
const saveStatistics = (req,res) => {
    const {conclusion} = req.body;
    if (conclusion) {
        db.models.Statistics.create({
            item:conclusion
        })
        .then(conclusion => res.send(conclusion))
    }
    else {
        res.send({
            RequiredData: ["conclusion"]
        })
    }
};
const countItems = (req, res) => {
    const keyword = req.params.item
    //console.log(keyword)
    db.models.Statistics.findAndCountAll({
        where: {
           item: keyword
        }
    })
    .then(item => {
        console.log(item.count)
        item === null ? res.status(404).send([]) : res.send([item.count])
    })
    //console.log(result.count);
    //console.log(result.rows);
     //});
};


module.exports = {
    homeRoute,
    findAllProjects,
    findQuestionById,
    findConclusionById,
    saveStatistics,
    countItems
}