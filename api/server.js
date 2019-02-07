const express = require('express');

const hobbits = require('../hobbits/hobbitsModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/hobbits', async (req, res) => {
  const rows = await hobbits.getAll();

  res.status(200).json(rows);
});

server.post('/hobbits', async (req, res)=>{
  const body = req.body;
  console.log('body', body.name);
  // const promise = await hobbits.insert(body);

  res.status(201).json([1]);

  // use if else to chack that correct data is sent in
})

module.exports = server;
