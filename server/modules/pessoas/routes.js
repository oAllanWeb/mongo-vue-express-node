const express = require('express');
const router = express.Router();
const auth = require('../../lib/auth');
const md5 = require('md5');

const Controller = require('./controller');

router.get("/", auth.authorize, (req, res, next) => {
  let filter = {};
  if (req.query && req.query.name) {
    filter.name = new RegExp(req.query.name, "gi");
  }
  Controller.find(req, res, filter);
});

router.get('/:id', auth.authorize, (req, res, next) =>
    Controller.findOne(req, res)
);

router.post('/', auth.authorize, (req, res, next) =>{
    req.body.password = md5(req.body.password);
    Controller.create(req, res, {})
}
);

router.put("/:id", auth.authorize, (req, res, next) =>
  Controller.update(req, res)
);

router.delete("/:id", auth.authorize, (req, res, next) =>
  Controller.remove(req, res)
);

module.exports = router;