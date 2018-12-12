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
            [db.models.Questions, 'id', 'asc']]         
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
/*
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
*/
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

const countItems = (req, res) => {
    const projectId = req.params.projectId;
    let total = 0;
    db.models.Statistics
    .findAndCountAll()
    .then(counted => {
        total = counted.count;
        db.models.Conclusions
        .findAll({
            where: {
            projectId : projectId
            }   
         })
        .then(projects => {
            const itemlist = projects.map((item, index) => {return item.title})
            let countresult = [];
            let counter = 0;
            for (el of itemlist) {
                db.models.Statistics.findAndCountAll({
                    where: {
                    item: el
                    }
                })
                .then(cn => {
                    countresult.push(cn)
                    counter ++
                    if (counter === itemlist.length) {
                        let resultToSend = [];
                        for (index in itemlist) {
                            if (countresult[index].count>0) {
                                resultToSend.push({'count':Math.round(100/total*countresult[index].count), 'item':countresult[index].rows[0].item})
                            }
                        }
                        function compare(a,b) {
                            if (a.count > b.count)
                              return -1;
                            if (a.count < b.count)
                              return 1;
                            return 0;
                          }
                          
                          resultToSend.sort(compare);



                        /*


                        let ordered = {};
Object.count(resultToSend).sort().forEach(function(key) {
  ordered[key] = unordered[key];
});
*/

                        //sort by countresult
                        res.status(200).send(resultToSend)
                    }
                })
            }
        })
    })
};

const countItemsbackup = (req, res) => {
    const projectId = req.params.projectId
    db.models.Conclusions
    .findAll({where: {
        projectId : projectId
    }
})
    .then(projects => {
        const tmp = projects.map((item, index) => {return item.title})
        const countresult = [];
        counter = 0;
        for (el of tmp) {
            db.models.Statistics.findAndCountAll({
                where: {
                   item: el
                }
            })
            .then(cn => {
                //console.log(cn)
                countresult.push([cn.count])  //cn senden und schauen, ob der name darin vorkommt
                counter ++
                if (counter === tmp.length) {
                    let resultToSend = [];
                    for (index in tmp) {
                        resultToSend.push([countresult[index] + ': ' + tmp[index]])
                    }
                    //sort by countresult
                    res.status(200).send(resultToSend)}
            })
        }
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