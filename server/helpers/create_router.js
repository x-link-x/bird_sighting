const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  const catchError = (err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
  };
  
  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch(catchError)
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
      .catch(catchError)
  });

  router.post('/', (req, res) => {
    const data = req.body;
    collection
    .insertOne(data)
    .then((result) =>{
      res.json(result.ops[0])
    })
    .catch(catchError)
  });

  router.delete('/:id', (req, res) =>{
    const id = req.params.id;
    collection
      .deleteOne({_id: ObjectID(id)})
      .then(
        collection
          .find()
          .toArray()
          .then((docs) => res.json(docs))
          .catch(catchError)
      )
      .catch(catchError)
  })

  return router;
};

module.exports = createRouter;
