const db = require('../db/index.js');

const homeRoute = (req, res) => {
    res.send("Server is running")
}
const findAllProjects = (req, res) => {
    db.models.Projects
    .findAll({include: [{
        model: db.models.Questions, include: [db.models.Answers]
        }]
    })
    .then(projects => {
        res.status(200).send(projects);
    })
};
const findProjectsById = (req, res) => {
    const projectId = req.params.projectId
    db.models.Projects
    .findById(projectId, {include: [{
        model: db.models.Questions, include: [db.models.Answers]
        }]
    })
    .then(projects => {
        res.status(200).send(projects);
    })
};
const findFirstQuestion = (req, res) => {
    const projectId = req.params.projectId
    db.models.Projects
    .findById(projectId, {include: [{
        model: db.models.Questions}], order: [
            [db.models.Questions, 'id', 'asc']
          ]
    })
    .then(projects => {
        res.status(200).send(projects.questions[0]);
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
    db.models.Statistics.findAndCountAll({
        where: {
           item: keyword
        }
    })
    .then(item => {
        console.log(item.count)
        item === null ? res.status(404).send([]) : res.send([item.count])
    })
};

const findConclusionByProject = (req, res) => {
    const projectId = req.params.projectId
    db.models.Conclusions
    .findAll({where: {
        projectId : projectId
    }
})
    .then(projects => {
        const tmp = projects.map((item, index) => {return item.title})
        res.status(200).send(tmp);
    })
};

module.exports = {
    homeRoute,
    findAllProjects,
    findProjectsById,
    findQuestionById,
    findConclusionById,
    saveStatistics,
    countItems,
    findConclusionByProject,
    findFirstQuestion
}