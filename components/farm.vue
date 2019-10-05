<template>
  <div class="container ripple" :class="{'shake': shake, 'purchasable': $store.state.turtleClicker.turtleCount >= basePrice}">
    <div class="farm grid-container" @click="onClick">
      <h2 class="Index">{{index}}</h2>
      <div>
        <b class="Amount">{{amount}}</b>
      </div>
      <p class="Description">{{description}}</p>
      <h1 class="Name">{{name}}</h1>
      <p class="Price" :style="{fontSize: '20px', display: 'flex', justifyContent: 'center'}">
        <turtle-icon />
        <b :style="{marginLeft: '6px'}">{{basePrice}}</b>
      </p>
    </div>
  </div>
</template>

<script>
import TurtleIcon from './turtle-icon'
export default {
  name: 'Farm',
  data() {
    return {
      amount: 0
    }
  },
  props: {
    key: String,
    index: String,
    name: String,
    description: String,
    rate: Number,
    groupSize: Number,
    basePrice: Number,
    priceExponent: Number
  },
  methods: {
    onClick() {
      if ( this.$store.state.turtleClicker.turtleCount >= this.basePrice) {
        this.$store.commit('turtleClicker/addTurtle', -1 * (this.basePrice))
        this.amount++
      }
    }
  },
  components: {
    TurtleIcon
  }
}
</script>

<style scoped>
.container {
  min-height: 75px;
  border-style: solid;
  border-width: 1px 1px 0px 1px;
  padding: 5px;
  user-select: none;
}

p {
  margin-top: 0;
}

.grid-container {
  display: grid;
  grid-template-columns: 0.7fr 2.7fr 0.7fr;
  grid-template-rows: auto auto;
}

.Index {
  grid-area: 1 / 1 / 2 / 2;
}

.Amount {
  grid-area: 1 / 3 / 2 / 5;
  float: right;
}

.Description {
  grid-area: 2 / 1 / 3 / 4;
}

.Name {
  grid-area: 1 / 2 / 2 / 3;
  text-align: center;
}

.Price {
  grid-area: 1 / 2 / 2 / 3;
  text-align: center;
}

.ripple {
  background-position: center;
  transition: background 0.8s;
  opacity: 0.25;
}

.ripple.purchasable {
  opacity: 1;
}

.ripple:active.purchasable {
  background-color: #7fff00;
  background-size: 100%;
  transition: background 0s;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(20px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-40px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(40px, 0, 0);
  }
}
</style>