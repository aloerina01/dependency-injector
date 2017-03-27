var DI = require('../js/DI/index');
// import DI from '../js/DI/index';

function DIPlugin(options) {
    console.log('Dependency=' + options);
}

DIPlugin.prototype.apply = function(compiler) {
    compiler.plugin('done', function() {
        DI.test();
        DI.inject('vm_issue_list_page', {
            Issues: __dirname + '/js/model/IssuesImpl'
        });
        console.log('Done Dependency Injection!!');
    });
}

module.exports = DIPlugin;