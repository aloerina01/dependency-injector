import DI from './js/DI/index';
// import { VM_ISSUE_LIST_PAGE } from './viewmodel/IssueListPage';

export default function() {
    DI.inject('vm_issue_list_page', {
        Issues: require('./js/model/IssuesImpl')
    });
}
