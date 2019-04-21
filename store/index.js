import Vue from 'vue'
import Vuex from 'vuex'
import city from './modules/city'
import navbar from './modules/navbar'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    city,
    navbar
  },
  actions: {
    // 我想把请求过来的一些数据不想在浪费一次请求的机会如何再传递给客户端？
    // 数据的同步状态是要用vuex
    nuxtServerInit({ commit }, { req }) {     // req:请求
      if (req.session && req.session.authUser) {
        commit('city', req.session.authUser)  // 提交是将session中的数据回传给浏览器端
                                              // 就是说把当前的用户，用户名提交给Vuex的状态
                                              // 服务端再把提交的数据同步给浏览器端
                                              // 达到的效果就是浏览器端并没有做任何的额外的请求
                                              // 就可以拿到当前登录的用户名
      }
    }
  }
})

export default store
