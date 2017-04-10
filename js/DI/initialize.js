'use strict';

const map = require('./map');

module.exports = function() {
    map.put('vm_issue_list_page', 'success');
    map.put('test', 'test');
    console.log(map);
    console.log(JSON.stringify(map));
    return map;
};
