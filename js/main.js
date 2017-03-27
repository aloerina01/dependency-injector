import Vue from 'vue';
import Router from 'vue-router';

import dependency from './dependency';
dependency();

import App from './App';
import IssueListPage from './viewmodel/IssueListPage';



const routes = [
    { path: App.ROOT_PATH, component: IssueListPage }
];

Vue.use(Router);
const router = new Router({ routes });

new Vue({
    App,
    router,
    render: (h) => {
        return h(App);
    }
}).$mount('#app');