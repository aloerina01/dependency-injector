'use strict'

const map = require('./map');
// import map from './map';

/**
 * 
 * @param {Symbol} containerKey 
 */
module.exports = function(containerKey) {
    if (!containerKey) {
        return map;
    }
    const container = {};
    const dependencyMap = map.get(containerKey);
    Object.keys(dependencyMap).forEach((key) => {
        let dependencyPath = dependencyMap[key];
        container[key] = (require('../' + dependencyPath));
    })
    return container;
}