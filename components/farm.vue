<template>
  <div
    class="container ripple"
    :class="{'shake': shake, 'purchasable': $store.state.turtleClicker.turtleCount >= price}"
  >
    <div class="farm grid-container" @click="onClick">
      <h2 :style="{marginTop: 0}" class="Index">{{index}}</h2>
      <div>
        <b class="Amount">{{amount}}</b>
      </div>
      <p class="Description">{{description}}</p>
      <h1 class="Name">{{name}}</h1>
      <p class="Price" :style="{fontSize: '20px', display: 'flex', justifyContent: 'center'}">
        <turtle-icon />
        <b :style="{marginLeft: '6px'}">{{price}}</b>
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
  computed: {
    price() {
      return Math.round(
        this.basePrice + Math.pow(this.amount * this.priceExponent, 3)
      )
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
    priceExponent: Number,
    perTick: Number,
    intervalMs: Number
  },
  methods: {
    onClick() {
      if (this.$store.state.turtleClicker.turtleCount >= this.price) {
        this.$store.commit('turtleClicker/addTurtle', -Math.round(this.price))
        this.amount++
      }
    }
  },
  components: {
    TurtleIcon
  },
  updated() {
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      if (this.amount > 0)
        this.$store.commit('turtleClicker/addTurtle', this.perTick)
    }, this.intervalMs / this.amount)
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
  margin-bottom: 0;
}

h1 {
  margin: 0;
  margin-bottom: 12px;
}

.grid-container {
  display: grid;
  grid-template-columns: 0.7fr 2.7fr 0.7fr;
  grid-template-rows: auto auto auto;
}

.Index {
  grid-area: 1 / 1;
}

.Amount {
  grid-area: 1 / 3;
  float: right;
}

.Description {
  grid-area: 3 / 1 / 4 / 4;
}

.Name {
  grid-area: 2 / 2;
  text-align: center;
}

.Price {
  grid-area: 1 / 2;
  text-align: center;
  transform: translateY(-3%);
  align-items: center;
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