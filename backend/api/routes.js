const express = require('express');
const router = express.Router();
const controllers = require('./controllers.js');

router.get('/', controllers.homeRoute);
router.get('/projects', controllers.findAllProjects);
router.get('/projects/:projectId', controllers.findProjectsById);
router.get('/questions/:questionId', controllers.findQuestionById);
router.get('/conclusions/:conclusionId', controllers.findConclusionById);
router.get('/statistics/:item', controllers.countItems);
router.post('/statistics', controllers.saveStatistics);

module.exports = router;