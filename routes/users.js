var express = require('express');
var router = express.Router();
const Projects = require('../model/project');
const bodyParser = require('body-parser');

router.route('/create')
.options((req, res) => { res.sendStatus(200); })
.post((req,res,next) => {
    Projects.findOne({id:req.body.id})
    .then((project) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(project);
    }, (err) => next(err))
    .catch((err) => next(err));
});

router.route('/replicate')
.options((req, res) => { res.sendStatus(200); })

.post((req, res, next) => {
    Projects.create(req.body)
    .then((project) => {
        console.log('Project Created ', project);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(project);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = router;
