<template>
  
  <!-- <div id="app"> -->
    <div>
      <router-view></router-view>
  
  </div>
</template>
  <script>
    export default {
      name: "App",
    
      created() {
        DataTableEventBus.$on("editData", data =>
          console.log("editing " + data.id)
        );
        DataTableEventBus.$on("viewData", data =>
          console.log("showing " + data.id)
        );
        DataTableEventBus.$on("deleteData", data =>
          console.log("deleting " + data.id)
        );
      },
    
      computed: {
        users() {
          return this.$store.state.users;
        },
    
        parameters() {
          return {
            data: this.users,
            actionColumn: true,
            columns: this.keys.map(key => ({ key }))
          };
        }
      },
    
      data() {
        return {
          keys: ["name", "email", "gender", "country", "job", "city", "created_at"]
        };
      }
    };
    </script>
    