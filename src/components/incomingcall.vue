<template>
  <div class="incomingcall">
    <div class="main-wrapper">
      <layout-header></layout-header>
      <layout-sidebarEmployee></layout-sidebarEmployee>
      <!-- Page Wrapper -->
      <div class="page-wrapper" style="min-height: 657px;
   left: 0;
   padding-top: 60px;">

        <!-- Outgoing Call -->
        <!-- <div class="call-box outgoing-box"> -->
        <!-- Incoming Call -->
        <div class="call-box incoming-box">
          <div class="call-wrapper">
            <div class="call-inner">
              <div class="call-user">
                <img class="call-avatar" src="../assets/profiles/avatar-11.jpg" alt="">
                <h4>Wilmer Deluna</h4>
                <span>Calling ...</span>
              </div>
              <div class="call-items">
                <router-link to="/chat" class="btn call-item call-end"><i class="material-icons">call_end</i>
                </router-link>
                <router-link to="/videocall" class="btn call-item call-start"><i class="material-icons">call</i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- /Incoming Call -->
        <!-- </div> -->
        <!-- Outgoing Call -->

      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import LayoutHeader from '@/components/layouts/Header.vue'
  import LayoutSidebarEmployee from '@/components/layouts/SidebarEmployee.vue'
  export default {
    components: {
      LayoutHeader,
      LayoutSidebarEmployee,
    },
    name: 'incomingcall'
  }
</script>