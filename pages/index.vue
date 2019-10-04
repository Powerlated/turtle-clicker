<template>
  <div class="container">
    <div class="header">
      <img alt src="~/assets/turtle.png" />
      <h1>Turtle Clicker</h1>
      <img alt src="~/assets/turtle.png" />
    </div>
    <div class="grid-container">
      <div class="Farms grid-area">Farms</div>
      <div class="Turtle grid-area">
        <h1>Click!</h1>
        <h2>{{ cookieCount }}</h2>
        <turtle @click.native="click" ref="turtle" />
      </div>
      <div class="Upgrades grid-area">Upgrades</div>
      <div class="Turtles grid-area">Turtles</div>
    </div>
  </div>
</template>

<script>
import turtle from '~/components/turtle'

export default {
  data() {
    return {
      cookieCount: 0
    }
  },
  components: { turtle },
  methods: {
    click() {
      this.cookieCount++
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  grid-template-rows: 0.1fr 1.2fr 1.8fr;
  grid-template-areas: '. . . .' 'Turtle Status Status Farms' 'Turtles Status Status Farms';
}

.Farms {
  grid-area: Farms;
}

.Turtle {
  grid-area: Turtle;
}

.Upgrades {
  grid-area: Status;
}

.Turtles {
  grid-area: Turtles;
}

.grid-area {
  border: 1px solid grey;
  margin: 4px;
  padding: 10px;
}
</style>