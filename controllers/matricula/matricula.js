'use strict'

const Matricula = require('../../models/matriculado')

function addMatricula(req, res) {
  Matricula.findOne({ documento: req.body.documento, idcurso: req.body.curso.idcurso }, (error, response) => {
    if (error) {
      res.status(400).send(error)
    } else {
      if (response != null) {
        res
          .status(200)
          .send({ message: 'No puedes matricular este curso nuevamente' })
      } else {
        const matricula = new Matricula({
          documento: parseInt(req.body.documento),
          nombre: req.body.nombre,
          correo: req.body.correo,
          curso: req.body.curso,
          idcurso: req.body.curso.idcurso
        })
        matricula.save(matricula, (error, response) => {
          if (response != null) {
            res.status(200).send({ message: 'curso matriculado' })
          } else {
            res.status(200).send({ error: error })
          }
        })
      }
    }
  })
}

//Variable de sesion para aspirante?? 5-HU
function getCursosMatriculados(req, res) {
  Matricula.find({ documento: req.body.documento }, (error, response) => {
    if (error) {
      return res.status(500).send(error)
    } else {
      if (response == null) {
        res
          .status(200)
          .send({ message: 'No tiene cursos matriculados' })
      } else {
        return res.status(200).send(response)
      }
    }
  })
}

function getMatriculaByDocument(req, res) {
  Matricula.find({ documento: req.params.documento }, (error, response) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.status(200).send(response)
    }
  })
}
function removeCursoMatriculado(req, res) {
  Matricula.findOneAndDelete({ idcurso: req.params.idcurso }, (error, response) => {
    if (error) {
      return res.status(500).send(error)
    } else {
      if (!response) {
        res
          .status(400)
          .send({ message: 'no tiene matricula en el curso' })
      } else {
        return res.status(200).send({ message: 'Eliminado correctamente' })
      }
    }
  })
}

//J-9HU
function getInfoMatriculadosPorCurso(req, res) {
  console.log(req.body.curso)
  Matricula.find({ curso: req.body.curso }, (error, response) => {
    if (error) {
      return res.status(500).send(error)
    } else {
      return res.status(200).send(response)
    }
  })
}




module.exports = {
  addMatricula,
  getCursosMatriculados,
  removeCursoMatriculado,
  getInfoMatriculadosPorCurso,
  getMatriculaByDocument
}
