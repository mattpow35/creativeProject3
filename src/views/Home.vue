<template>
<div>
  <h1>Journal Entries</h1>
  <div v-if="this.$root.$data.tickets.length === 0">
    <hr/>
    <div class="problem">
      <p>You currently have no journal entries.</p>
    </div>
  </div>
  <div v-for="ticket in tickets" v-bind:key="ticket.id">
    <hr/>
    <div class="ticket">
      <div class="problem">

        <p><b>{{ticket.title}}</b></p>
        <p><i>{{ticket.date}}</i></p>
        <p>{{ticket.problem}}</p>

      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {}
  },
  computed: {
    tickets() {
      return this.$root.$data.getTickets();
    }
  }
}
</script>
