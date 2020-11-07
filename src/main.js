import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from './mock-data.js'


Vue.config.productionTip = false;

let data = {
  publicPosts: mock,
  currentID: 0,
  entries: [],
  getEntries() {
    return this.entries;
  },
  addEntry(name, problem) {
    var d = new Date()

    this.entries.push({
      id: this.currentID,
      title: name,
      problem: problem,
      date: d.toDateString()
    });
    this.currentID += 1;
  }
}

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount("#app");
