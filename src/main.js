import Vue from "vue";
import App from "./App.vue";
import router from "./router";


Vue.config.productionTip = false;

let data = {
  currentID: 0,
  tickets: [],
  getTickets() {
    return this.tickets;
  },
  addTicket(name, problem) {
    var d = new Date()
    
    this.tickets.push({
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
