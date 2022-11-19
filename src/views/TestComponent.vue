<template>
  <PrimaryButton type="button" label="Toggle" @click="toggle"/>
  <MyMenu id="overlay_menu" ref="menubar" :model="items" :popup="true" />
  <MyToast position="top-right" />
  <PrimaryButton @click="showTemplate" label="Confirm" />
  <ScrollPanel style="height: 100px">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Vitae et leo duis ut diam.
      Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
      Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
      Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
      Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
      Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
      Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
      Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
      Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
      Mattis aliquam faucibus purus in massa tempor nec.
    </p>
    <!-- <MyMenu :model="items"/> -->
    <!-- <div class="div">
      <ToggleButton v-model="checked"/>
    </div>
    <PrimaryButton label="Submit" icon="pi pi-search"/>   -->
  </ScrollPanel>
  <!-- <PrimaryButton icon="pi pi-arrow-right" @click="visibleLeft = true" /> -->

</template>

<script>
  export default {
    name: 'TestComponent',
    data() {
      return {
        checked: true,
        visibleLeft: false,
        items: [
        {
          label: 'Options',
          items: [{
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
              this.$toast.add({severity:'error', summary:'Updated', detail:'Data Updated', life: 3000});
            }
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
              this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
            }
          }]
        },
        {
          label: 'Navigate',
          items: [{
            label: 'Vue Website',
            icon: 'pi pi-external-link',
            url: 'https://vuejs.org/'
          },
          {
            label: 'Router',
            icon: 'pi pi-upload',
            command: () => {
              window.location.hash = "/fileupload"
            }
          }]
        }
        ]
      }
    },
    methods: {
      toggle(event) {
        this.$refs.menu.toggle(event);
      },
      save() {
        this.$toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
      },
      showTemplate() {
        this.$toast.add({severity: 'warn', summary: 'Are you sure?', detail: 'Proceed to confirm'});
      },
    }
  }
</script>
