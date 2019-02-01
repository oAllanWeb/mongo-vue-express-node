const express = require('express');
const router = express.Router();
const auth = require('../../lib/auth');
const md5 = require('md5');

const Controller = require('./controller');

router.post("/", (req, res, next) => {
  req.body.password = md5(req.body.password);
  Controller.login(req, res, req.body);

});

// router.get('/:id', auth.authorize, (req, res, next) =>
//     Controller.findOne(req, res)
// );

// router.post('/', (req, res, next) =>{
//     req.body.password = md5(req.body.password);
//     Controller.create(req, res, {})
// }
// );

// router.put("/:id", auth.authorize, (req, res, next) =>
//   Controller.update(req, res)
// );

// router.delete("/:id", auth.authorize, (req, res, next) =>
//   Controller.remove(req, res)
// );

module.exports = router;