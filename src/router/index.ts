/**
 * @Author QINGYU FAN
 * @Version
 * @Description router配置文件
 * @date 2020/9/20 5:47 下午
 */
import {createRouter, createWebHashHistory} from'vue-router'

// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  // 路由地址
  routes: [
    {
      path: '/todolist',
      // 必须添加.vue后缀
      component: () => import('../pages/todo-list.vue')
    }
  ]
})
