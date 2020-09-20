// ts 需要配置，不然无法找到引入的.vue文件
declare module '*.vue' {
  import { Component } from 'vue'
  const component: Component
  export default component
}
