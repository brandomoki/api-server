'use strict';

const router = express.Router();
const express = require('express');
const { jediInterface } = require('../models/index');


router.get('/jedi', getJedi);
async function getJedi(request, response, next) {
  try {
    let results = await jediInterface.read();
    response.status(200).send(results);

  } catch (error) {
    next(error);
  }
}

router.get('/jedi/:id', getOneJedi);
async function getOneJedi(request, response, next) {
  const { id } = request.params;
  try {
    let results = await jediInterface.read(id);
    response.status(200).send(results);

  } catch (error) {
    next(error);
  }
}


router.post('/jedi', postJedi);
async function postJedi(request, response, next) {
  console.log(request.body);
  try {
    const newJedi = await jediInterface.create(request.body);
    response.status(201).send(newJedi);

  } catch (error) {
    next(error);
  }
}


router.delete('/jedi/:id', deleteJedi);
async function deleteJedi(request, response, next) {
  const { id } = request.params;
  console.log(id);
  try {
    await jediInterface.delete(id);
    response.status(204).send('success!');
  } catch (error) {
    next(error);
  }
}


router.put('/jedi/:id', putJedi);
async function putJedi(request, response, next){
  let { id } = request.params;
  try {
    const updateJedi = await jediInterface.update(request.body, id);
    response.status(201).send(updateJedi);

  } catch (error) {
    next(error);

  }
}

module.exports = router;
