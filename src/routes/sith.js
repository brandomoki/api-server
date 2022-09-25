'use strict';

const express = require('express');
const { sithInterface } = require('../models/index');
const router = express.Router();


router.get('/sith', getSith);
async function getSith(request, response, next) {
  try {
    let results = await sithInterface.read();
    response.status(200).send(results);

  } catch (error) {
    next(error);
  }
}

router.get('/sith/:id', getOneSith);
async function getOneSith(request, response, next) {
  const { id } = request.params;
  try {
    let results = await sithInterface.read(id);
    response.status(200).send(results);

  } catch (error) {
    next(error);
  }
}


router.post('/sith', postSith);
async function postSith(request, response, send) {
  console.log(request.body);
  //   try {
  const newSith = await sithInterface.create(request.body);
  response.status(201).send(newSith);

//   } catch (error) {
//     next(error);
//   }
}


router.delete('/sith/:id', deleteSith);
async function deleteSith(request, response, next) {
  const { id } = request.params;
  console.log(id);
  try {
    await sithInterface.delete(id);
    response.status(204).send('success!');
  } catch (error) {
    next(error);
  }
}


router.put('/sith/:id', putSith);
async function putSith(request, response, next){
  let { id } = request.params;
  try {
    const updateSith = await sithInterface.update(request.body, id);
    response.status(201).send(updateSith);

  } catch (error) {
    next(error);

  }
}

module.exports = router;
