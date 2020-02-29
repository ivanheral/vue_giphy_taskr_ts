import Search from '../pages/search.vue';
import Router from 'vue-router';

const Bar = {
    template: '<div>BAR</div>'
}

const routes = [{
    path: '/',
    component: Search
}, {
    path: '/bar',
    component: Bar
}]

export default new Router({
    mode: 'history',
    routes
});
