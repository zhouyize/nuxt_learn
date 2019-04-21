
const state = () => ({
  bars: ['a', 'c']
})

const mutations = {
  add(state, text) {
    state.bars.push(text)
  }
}

const actions = {
  add: ({ commit }, text) => {
    commit('add', text)
  }
}

export default{
  namespaced: true,
  state,
  mutations,
  actions
}
