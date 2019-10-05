<template>
  <div class="container">
    <div class="header">
      <img alt src="~/assets/turtle.png" />
      <h1>Turtle Clicker</h1>
    </div>
    <div class="grid-container">
      <div class="Farms grid-area">
        <h1>Farms</h1>
        <h2>Click to buy</h2>
        <farms />
      </div>
      <div class="Upgrades grid-area"></div>
      <div class="Turtle grid-area">
        <h1 id="clickTitle">Click!</h1>
        <div id="turtle-count">
          <turtle-icon />
          <h2>{{ turtleCount }}</h2>
        </div>
        <turtle @click.native="click" ref="turtle" id="turtle" />
      </div>
    </div>
  </div>
</template>

<script>
import turtle from '~/components/turtle'
import farms from '~/components/farms'
import TurtleIcon from '~/components/turtle-icon'

export default {
  computed: {
    turtleCount() {
      return this.$store.state.turtleClicker.turtleCount
    }
  },
  components: { turtle, farms, TurtleIcon },
  methods: {
    click() {
      this.$store.commit('turtleClicker/addTurtle', 1)
    }
  },
  head() {
    return {
      title: "Turtle Clicker"
    }
  }
}
</script>

<style scoped>
#clickTitle {
  font-size: 2em;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  white-space: nowrap;
  flex-basis: 1;
  flex-shrink: 1;
}

.header > img {
  max-height: 100px;
  width: auto;
}

.header > h1 {
  font-size: 2em;
}

.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.grid-container {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'Turtle Farms' 'Upgrades Farms';
}

.Farms {
  grid-area: Farms;
}

.Upgrades {
  grid-area: Upgrades;
}

.Turtle {
  grid-area: Turtle;
}

.grid-area {
  border: 1px solid grey;
  margin: 4px;
  padding: 5%;
}

.Turtle {
  grid-area: Turtle;
}

#turtle {
  transition: all 0.25s ease;
}

#turtle:active {
  font-size: 1rem;
  transform: scale(0.75);
}
</style>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 8px;
}

html {
  touch-action: manipulation;
}

#turtle-count {
  display: flex;
  align-items: center;
}
</style>