<template src="../view/IssueListPage.html"></template>

<script>
import DI from '../DI/index';

// const VM_ISSUE_LIST_PAGE = Symbol('vm_issue_list_page');
const VM_ISSUE_LIST_PAGE = 'vm_issue_list_page';
const container = DI.container(VM_ISSUE_LIST_PAGE);
console.log(container);

export default {
    data: function(container) {
        // console.log(global.test);
        console.log(process.env.NODE_ENV);
        console.log(process.env.DI_CONTAINER);
        DI.test();
        let cont = DI.container(VM_ISSUE_LIST_PAGE);
        // let Issues = System.import(Issues.);
        // console.log(require('/js/model/IssuesImpl'));
        return {
            // issues: new require(container.Issues)()
        }
    }
}
</script>