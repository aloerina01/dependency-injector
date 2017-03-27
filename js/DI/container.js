'use strict'

const map = require('./map');
// import map from './map';

/**
 * 
 * @param {Symbol} containerKey 
 */
module.exports = function(containerKey) {
    if (containerKey) {
        return map.get(containerKey);
    }
    return map;
}