'use strict'

const router = require('express').Router()
const matriculaController = require('../controllers/matricula/matricula')

router.post('/addmatricula',matriculaController.addMatricula)
router.post('/getcursosmatriculados',matriculaController.getCursosMatriculados)
router.post('/removecursomatriculado',matriculaController.removeCursoMatriculado)
router.get('/getinfomatriculadosporcurso/:idcurso',matriculaController.getInfoMatriculadosPorCurso)
router.get('/getmatriculas/:documento',matriculaController.getMatriculaByDocument)
router.delete('/deleteMatricula/:idcurso',matriculaController.removeCursoMatriculado)


module.exports = router