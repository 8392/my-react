import Home from "../pages/Home/index";
import Login from "../pages/Login/index";
import Detail from "../pages/Detail/index";
import List from "../pages/List/index";

const route = [{
    path: '/home',
    component: Home,
    title: '首页',
},{
    path: '/login',
    component: Login,
    title: '登录',
},{
    path: '/detail/:id',
    component: Detail,
    title: '详情',
},{
    path: '/list',
    component: List,
    title: '列表',
}];

export default route;

