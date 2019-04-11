<template>
    <!--只能存在一个根容器-->
    <div class="">
      Page is search
      <ul>
        <li v-for="(item,index) in list" :key="index">
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
      // nick:{
      //  type:String,
      //  default:'国民老公'
      // },

      // 对象或数组默认值必须从一个工厂函数获取
      // girlFriends:{
      //  type:Array,
      //  default:function(){
      //    return ['g1','g2']
      // }
      // }
    },
    // 所有的初始化状态全部放入data中
    data() {
      return {
        list: []
      }
    },

    async mounted() {
      let self = this
      let {status, data: {list}} = await axios.get('/city/list')
      if (status === 200) {
        self.list = list
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
