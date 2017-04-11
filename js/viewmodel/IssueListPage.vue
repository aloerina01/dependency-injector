<template src="../view/IssueListPage.html"></template>

<script>
import DI from 'DI/index';

// const VM_ISSUE_LIST_PAGE = Symbol('vm_issue_list_page');
const VM_ISSUE_LIST_PAGE = 'vm_issue_list_page';
console.log(`1: ${VM_ISSUE_LIST_PAGE}`);
const container = DI.container(VM_ISSUE_LIST_PAGE);
console.log(`1: ${container}`);


export default {
    data: function() {        
        DI.test();
        console.log(`2: ${VM_ISSUE_LIST_PAGE}`);
        console.log(`2: ${container}`);
        // let impl = System.import('/Users/JP21369/Desktop/private/dependency-injector/js/model/IssuesImpl.js');
        // console.log(impl);
        let cont = DI.container(VM_ISSUE_LIST_PAGE);
        // let Issues = require(cont.Issues);
        let Issues1 = require('model/IssuesImpl');
        let modulePath = 'model/IssuesImpl';
        console.log(modulePath);
        let Issues2 = require(modulePath);
        // console.log(require('/js/model/IssuesImpl'));
        return {
            // issues: new require(container.Issues)()
        }
    }
}
</script>