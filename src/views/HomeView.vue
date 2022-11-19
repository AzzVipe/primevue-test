<template>
  <TabMenu :model="items"></TabMenu>
</template>

<script>

  export default {
    name: 'HomeView',

    data() {
      return {
        items: [
        {
          label: 'Test',
          // icon: 'pi pi-fw pi-home',
          to: '/test'
        }
        ]
      }
    }
  }

</script>

<style>

  #app {
    font-family: "Poppins", sans-serif;
  }

</style>

