<template>
  <div class="container">
    <div class="border-box">
      <farm
        v-for="(data, index) in farmData"
        :key="data.name"
        :index="index"
        :name="data.name"
        :description="data.description"
        :groupSize="data.groupSize"
        :basePrice="data.basePrice"
        :priceExponent="data.priceExponent"
        :perTick="data.perTick"
        :intervalMs="data.intervalMs"
      />
    </div>
  </div>
</template>

<script>
import farmData from '~/assets/farmData.json'
import farm from './farm'
export default {
  data() {
    return {
      farmData: farmData
    }
  },
  components: { farm }
}
</script>

<style scoped>
.border-box {
  border-bottom: 1px solid grey;
}

.border-box {
  display: grid;
}
</style>

