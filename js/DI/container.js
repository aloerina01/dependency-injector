'use strict'

const map = require('./map');
// import map from './map';

/**
 * 
 * @param {Symbol} containerKey 
 */
module.exports = function(containerKey) {
    if (containerKey) {
        const path = map.get(containerKey);
        // TODO: create array which has instances
        return path;
    }
    return map;
}