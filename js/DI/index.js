'use strict'

const inject = require('./inject');
const container = require('./container');
const register = require('./register');
const test = require('./test');
const initialize = require('./initialize');
// const init = require('./utils/read')();
// import inject from './inject';
// import container from './container';
// import register from './register';
// import test from './test';

module.exports = { inject, container, register, test, initialize };
// export default { inject, container, register, test };