var DI = require('../js/DI/index');

function DIPlugin(options) {
    this.options = options;
}

DIPlugin.prototype.apply = function(compiler) {
    var op = this.options;
    compiler.plugin('compilation', function(compilation, data) {
        data.normalModuleFactory.plugin('parser', function(parser, options) {
            parser.plugin("call DI.inject", function(expr) {
                (function(options){console.log(expr)})(op);
            });
        });
    });

    // compiler.plugin('compilation', function(compilation) {
    //     compilation.plugin('build-module', function(module) {
    //         console.log('build module');
    //         console.log(module);
    //         DI.inject('vm_issue_list_page', {
    //             Issues: __dirname + '/js/model/IssuesImpl'
    //         });
    //     })
        
    //     console.log('Done Dependency Injection!!');
    // });
}

module.exports = DIPlugin;