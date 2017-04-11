'use strict';

const map = require('./map');

module.exports = function(dependencies) {
    // map.put('vm_issue_list_page',  + '~/js/model/IssuesImpl.js');
    // map.put('test', 'test');
    dependencies();
    console.log(map);

    return map;
};
