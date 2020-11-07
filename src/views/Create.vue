<template>
<div>
  <h1>Add New Journal Entry</h1>
  <form v-if="creating" @submit.prevent="addEntry">
    <input v-model="title" placeholder="Title">
    <p></p>
    <textarea v-model="problem" placeholder="Type your journal entry here..."></textarea>

    <br />

    <button type="submit">Add to Journal</button><br>


  </form>
  <div v-else>
    <p>Journal entry added successfully!</p>
    <p><a @click="toggleForm" href="#">Add another entry</a></p>
  </div>
</div>
</template>

<script>
export default {
  name: 'create',
  data() {
    return {
      creating: true,
      title: '',
      problem: '',
    }
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    addEntry() {
      this.$root.$data.addEntry(this.title, this.problem, true);
      this.title = "";
      this.problem = "";
      this.creating = false;
    },

  }
}
</script>

<style scoped>
input {
  font-size: 1.2em;
  height: 30px;
  width: 200px;
}

textarea {
  font-size: 1.6em;
  width: 100%;
  max-width: 500px;
  height: 100px;
}

button {
  margin-top: 20px;
  font-size: 1.2em;
}


</style>
