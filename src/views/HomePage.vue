<template>
  <main>
    <MySteps :model="items" aria-label="Form Steps"/>
    <router-view @prevPage="prevPage($event)" @nextPage="nextPage($event)" />
  </main>
</template>

<script>

export default {
  name: 'HomePage',

  data() {
    return {
      items: [{
        label: 'Page 1',
        to: 'p1'
      }, {
        label: 'Page 2',
        to: 'p2'
      }, {
        label: 'Page 3',
        to: 'p3'
      }]
    }
  },

  methods: {
    nextPage(event) {
      // console.log(event.data);
      this.$router.push(this.items[event.pageIndex + 1].to);
    },
    prevPage(event) {
      console.log(event.pageIndex);
      this.$router.push(this.items[event.pageIndex - 1].to);
    }
  }
}
</script>

<style>
  main {
    padding: 0 1rem;
    min-height: 100vh;
  }
</style>
