<template>
  <div>
    <div class="row align-items-center">
      <div class="col-1" style="min-width: 100px"> 
        <div class="row justify-content-center" style="padding-top: 20px">
          <h6 class="water-quality-main">Water Quality</h6>
        </div>
        <div class="row justify-content-center">
            <toggle-button color="#00B0F0" v-model="pointsLayer" :sync="true"></toggle-button>
        </div>
      </div>
      <div class="col-10">
        <div class="row">
          <div class="col-4">
            <div class="form-check" v-for="selection in waterQualitySelections.slice(0,3)" :key="selection">
              <input class="form-check-input" type="radio" id="key" :value="selection" v-model="waterQuality">
              <label class="form-check-label" for="key" style="color: white"> {{selection}} </label>
            </div>
          </div>
          <div class="col-3">
            <div class="form-check" v-for="selection in waterQualitySelections.slice(3,6)" :key="selection">
              <input class="form-check-input" type="radio" id="key" :value="selection" v-model="waterQuality">
              <label class="form-check-label" for="key" style="color: white"> {{selection}} </label>
            </div>
          </div>
          <div class="col-5">
            <div class="form-check" v-for="selection in waterQualitySelections.slice(6,9)" :key="selection">
              <input class="form-check-input" type="radio" id="key" :value="selection" v-model="waterQuality">
              <label class="form-check-label" for="key" style="color: white"> {{selection}} </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { waterQualitySelections } from '../lib/constants'
export default {
  data () {
    return {
      waterQualitySelections: waterQualitySelections,
      selWq: null
    }
  },
  computed: {
    pointsLayer: {
      get () {
        return this.$store.state.pointsLayer;
      },
      set () {
        this.$store.dispatch('switchPointsLayer');
      }      
    },
    waterQuality: {
      get () {
        return this.$store.state.waterQuality;
      },
      set (newWq) {
        this.$store.dispatch('setWaterQuality', newWq);
        this.$store.dispatch('onPointsLayer');
        this.$store.dispatch('setActiveTab', 'water quality');
      }      
    }
  }
}
</script>

<style>

</style>