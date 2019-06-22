const express = require('express');
const Cliente = require('../models/clientes');
const router = express.Router();

router.get("/", (req,res) => 
    Cliente.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
          }));

router.get("/:id", (req, res) => {
    Cliente.findOne({
        where: {
            codigo: req.params.id,
        }
    }).then(result => {
        if (result) {
            res.json(result);
        } else {
            res.sendStatus(404);
        }
    }).catch(error => {
        res.status(412).json({msg: error.message});
    });
})

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/search/params', (req, res) => {
    var query = `%${req.query.nome}%`;
  
    console.log(query)
    Cliente.findAll({ where: { nome: { [Op.like]: query } } })
      .then(clientes => res.json(clientes))
      .catch(err => console.log(err));
  });
  

router.post('/', (req,res) => {
    console.log(req.body);
    Cliente.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    });    
    
router.put('/', (req,res) => {
    Cliente.update(req.body, { 
        where: {
        codigo: req.body.codigo
        }
      })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    }); 
    
router.delete("/:id", (req,res) => {
    Cliente.destroy({
        where: {
            codigo: req.params.id
        }
    })
    .then(result => res.sendStatus(204))
    .catch(error => {
                res.status(412).json({msg: error.message});
            });
        });    

module.exports = router;