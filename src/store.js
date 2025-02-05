import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    habitat: null,
    waterQuality: null,
    habitatGraphVariable: null,
    waterQualityGraphVariable: null,
    habitatIndex: null,
    baseLayer: false,
    pointsLayer: false,
    habitatMetricLayer: false,
    habitatIndexLayer: false,
    embayment: null,
    station: null,
    activeTab: null
  },
  mutations: {
    SET_HABITAT: (state, payload) => {
      state.habitat = payload;
    },
    SET_WATER_QUALITY: (state, payload) => {
      state.waterQuality = payload;
    },
    SET_HABITAT_GRAPH_VARIABLE: (state, payload) => {
      state.habitatGraphVariable = payload;
    },
    SET_WATER_QUALITY_GRAPH_VARIABLE: (state, payload) => {
      state.waterQualityGraphVariable = payload;
    },    
    SET_STATION: (state, payload) => {
      state.station = payload;
    },
    SET_EMBAYMENT: (state, payload) => {
      state.embayment = payload;
    },   
    SWITCH_BASE_LAYER: state => {
      state.baseLayer = !state.baseLayer;
    },
    SWITCH_POINTS_LAYER: state => {
      state.pointsLayer = !state.pointsLayer;
    },
    ON_POINTS_LAYER: state => {
      state.pointsLayer = true;
    },
    ON_BASE_LAYER: state => {
      state.baseLayer = true;
    },
    SWITCH_HABITAT_METRIC_LAYER: state => {
      state.habitatMetricLayer = !state.habitatMetricLayer;
    },
    SWITCH_HABITAT_INDEX_LAYER: state => {
      state.habitatIndexLayer = !state.habitatIndexLayer;
    },
    SET_ACTIVE_TAB: (state, payload) => {
      state.activeTab = payload;
    }
  },
  actions: {
    setHabitat: ({commit}, payload) => {
      commit('SET_HABITAT', payload);
    },
    setWaterQuality: ({commit}, payload) => {
      commit('SET_WATER_QUALITY', payload);
    },
    setHabitatGraphVariable: ({commit}, payload) => {
      commit('SET_HABITAT_GRAPH_VARIABLE', payload);
    },
    setWaterQualityGraphVariable: ({commit}, payload) => {
      commit('SET_WATER_QUALITY_GRAPH_VARIABLE', payload);
    },
    setStation: ({commit}, payload) => {
      commit('SET_STATION', payload);
    },
    setEmbayment: ({commit}, payload) => {
      commit('SET_EMBAYMENT', payload);
    },
    switchBaseLayer: ({commit}) => {
      commit('SWITCH_BASE_LAYER');
    },
    switchPointsLayer: ({commit}) => {
      commit('SWITCH_POINTS_LAYER');
    },
    onPointsLayer: ({commit, state}) => {
      if (state.pointsLayer == false) {
        commit('ON_POINTS_LAYER');
      }
    },
    onBaseLayer: ({commit, state}) => {
      if (state.baseLayer == false) {
        commit('ON_BASE_LAYER');
      }
    },
    switchHabitatMetricLayer: ({commit, state}) => {
      commit('SWITCH_HABITAT_METRIC_LAYER');
      if (state.habitatIndexLayer == true && state.habitatMetricLayer == true) {
        commit('SWITCH_HABITAT_INDEX_LAYER');
      }
    },
    switchHabitatIndexLayer: ({commit, state}) => {
      commit('SWITCH_HABITAT_INDEX_LAYER');
      if (state.habitatIndexLayer == true && state.habitatMetricLayer == true) {
        commit('SWITCH_HABITAT_METRIC_LAYER');
      }
    },
    setActiveTab: ({commit}, payload) => {
      commit('SET_ACTIVE_TAB', payload);
    } 
  }
});