// ts 需要配置，不然无法找到引入的.vue文件
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}
