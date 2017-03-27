'use strict'

const map = require('./map');
// import map from './map';

/**
 * 
 * @param {Symbol} containerKey 
 */
module.exports = function(containerKey) {
    return map.get(containerKey);
}