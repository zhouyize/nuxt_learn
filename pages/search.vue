<template>
    <!--只能存在一个根容器-->
    <div class="">
      Page is search
      <ul>
        <!--从Vuex中取数据-->
        <li v-for="(item,index) in $store.state.city.list" :key="index">
          {{item}}
        </li>
      </ul>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    layout: 'search',
    name: '',
    components: {},
    // props:[],
    props: {
    },
    // 所有的初始化状态全部放入data中
    data() {
      return {
        // list: []
      }
    },
//  mounted这样页面是获取到数据了但是查看源码中是没有的(下发的模板中没有)，就是因为mounted这个过程在服务器端渲染是不执行这个过程的，
//    只有create是在服务端渲染也就是开启ssr过程中会执行，所以mounted在服务器端是不被执行的，只有在浏览器端执行，
//    所以这段代码只在浏览器端执行和发生了效果（浏览器会闪烁）在下发的模板中找不到指定内容
//    async mounted() {
//      let self = this
//      let {status, data: {list}} = await axios.get('/city/list')
//      if (status === 200) {
//        self.list = list
//      }
//    },

    // 涉及ssr原理
    // 1:服务器端把他编辑好的内容下发给你，2：把异步获取的数据同时扔给浏览器端（查看源码就可以找数据）
    // asyncData和fetch之间的区别     可以查看nuxt官方文档
    // asyncData-->处理组件数据 ；
    // fetch-->处理跟vuex相关的数据（拿到数据用来提交vuex状态的）
    async asyncData() {     // 做ssr就是想在下发模板的过程中把数据就渲染过去,界面不会发生闪烁
      // let self = this  这里不能这么写，因为还没有app实例
      let {status, data: {list}} = await axios.get('http://localhost:3001/city/list')
      if (status === 200) {
        return {
          list    // list赋值给data
        }
      }
    },
    methods: {},
    // 计算属性
    computed: {},

    // 实时监听数据变化，可以在这里做相关判断
    watch: {}

  }
</script>

<!--样式-->
<!--
Add "scoped" attribute to limit CSS to this component only
添加scoped属性限制样式只在当前组件中生效
-->
<style scoped>

</style>
