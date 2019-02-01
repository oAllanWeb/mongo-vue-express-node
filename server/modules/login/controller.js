const Model = require('../users/model');
const ACTION_PATH = './../../actions/';


function mountPath(action) {
    return require(ACTION_PATH + action)(Model);
}
const login = mountPath('login');

module.exports = {
    login
};