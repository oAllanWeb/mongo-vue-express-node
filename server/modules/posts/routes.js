const express = require('express');
const router = express.Router();


const Controller = require('./controller');

router.get('/', (req, res, next) => {
    let filter = {};
    if (req.query && req.query.name) {
        filter.name = new RegExp(req.query.name, 'gi');
    }
    Controller.find(req, res, filter);
});

router.get('/:id', (req, res, next) =>
    Controller.findOne(req, res)
);

router.post('/', (req, res, next) =>
    Controller.create(req, res, {})
);

router.put('/:id', (req, res, next) =>
    Controller.update(req, res)
);

router.delete('/:id', (req, res, next) =>
    Controller.remove(req, res)
);

module.exports = router;