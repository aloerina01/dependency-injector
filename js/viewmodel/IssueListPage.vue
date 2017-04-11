<template src="../view/IssueListPage.html"></template>

<script>
import DI from 'DI/index';
import IssuesImpl from '../model/IssuesImpl';

// const VM_ISSUE_LIST_PAGE = Symbol('vm_issue_list_page');
const VM_ISSUE_LIST_PAGE = 'vm_issue_list_page';
console.log(`1: ${VM_ISSUE_LIST_PAGE}`);
const container = DI.container(VM_ISSUE_LIST_PAGE);
const Issues = container.Issues;
console.log(Issues);
console.log(IssuesImpl); // TODO: importしたかたちと一致しないよ！！

export default {
    data: function() {        
        return {
            issues: new Issues()
        }
    }
}
</script>