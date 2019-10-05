<template>
  <div class="container">
    <div class="header">
      <img alt src="~/assets/turtle.png" />
      <h1>Turtle Clicker</h1>
      <img alt src="~/assets/turtle.png" />
    </div>
    <div class="grid-container">
      <div class="Farms grid-area">
        <h1>Farms</h1>
        <h2>Click to buy</h2>
        <farms />
      </div>
      <div class="Turtle grid-area">
        <h1>Click!</h1>
        <div id="turtle-count">
          <turtle-icon />
          <h2>{{ turtleCount }}</h2>
        </div>
        <turtle @click.native="click" ref="turtle" id="turtle" />
      </div>
      <div class="Upgrades grid-area">
        <h1>Upgrades</h1>
      </div>
      <div class="Turtles grid-area">
        <h1>Turtles</h1>
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
  }
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-height: 100px;
}

.header > img {
  height: 100px;
  width: auto;
  margin: 0 25px 0 25px;
}

.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.grid-container {
  display: grid;
  grid-template-columns: auto 0.7fr 1fr 1fr;
  grid-template-rows: 0fr 1.2fr 1.8fr;
  grid-template-areas: '. . . .' 'Turtle Status Status Farms' 'Turtles Status Status Farms';
}

.grid-area {
  border: 1px solid grey;
  margin: 4px;
  padding: 10px;
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

.Upgrades {
  grid-area: Status;
}

.Turtles {
  grid-area: Turtles;
}

.Farms {
  grid-area: Farms;
  padding: 5px;
}
</style>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 8px;
}

#turtle-count {
  display: flex;
  align-items: center;
}
</style>