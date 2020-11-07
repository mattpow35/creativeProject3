<template>
<div>
  <h1>Journal Entries</h1>
  <div v-if="this.$root.$data.entries.length === 0">
    <hr/>
    <div class="problem">
      <p>You currently have no journal entries.</p>
    </div>
  </div>
  <div v-for="entry in entries" v-bind:key="entry.id">
    <hr/>
    <div class="ticket">
      <div class="problem">

        <p><b>{{entry.title}}</b></p>
        <p><i>{{entry.date}}</i></p>
        <p>{{entry.problem}}</p>

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
    entries() {
      return this.$root.$data.getEntries();
    }
  }
}
</script>
