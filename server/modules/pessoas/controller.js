const Model = require('./model');
const ACTION_PATH = './../../actions/';


function mountPath(action) {
    return require(ACTION_PATH + action)(Model);
}
const find = mountPath('find');

const create = mountPath('create');

const findOne = mountPath('findOne');

const update = mountPath('update');

const remove = mountPath('delete');


module.exports = {
    find,
    create,
    findOne,
    update,
    remove
};