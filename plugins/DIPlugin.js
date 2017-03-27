var DI = require('../js/DI/index');

function DIPlugin(options) {
    console.log('Dependency=' + options);
}

DIPlugin.prototype.apply = function(compiler) {
    compiler.plugin('compile', function(params) {
        DI.inject('vm_issue_list_page', {
            Issues: __dirname + '/js/model/IssuesImpl'
        });
        console.log('Done Dependency Injection!!');
        DI.test();
    });
}

module.exports = DIPlugin;