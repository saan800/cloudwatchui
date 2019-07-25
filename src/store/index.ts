import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // TODO:
    //  - make work as datasource in toolbar nav
    //  - save preferences in cookie?
    //  - get regions from aws config?
    currentAwsRegion: 'eu-west-1',
    awsRegions: ['eu-west-1', 'eu-central-1']
  },
  mutations: {},
  actions: {}
});
