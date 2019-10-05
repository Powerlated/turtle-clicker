export const state = () => ({ turtleCount: 0, farmsCount: {}  })

export const mutations = {
  addTurtle(state, n = 1) {
    state.turtleCount += n;
  },

}