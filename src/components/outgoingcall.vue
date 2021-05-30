<template>
  <div class="outgoingcall">
    <div class="main-wrapper">
      <layout-header></layout-header>
      <layout-sidebarEmployee></layout-sidebarEmployee>
      <!-- Page Wrapper -->
      <div class="page-wrapper" style="min-height: 657px;
   left: 0;
   padding-top: 60px;">
        <!-- Outgoing Call -->
        <div class="call-box outgoing-box">
          <div class="call-wrapper">
            <div class="call-inner">
              <div class="call-user">
                <img alt="" src="../assets/profiles/avatar-02.jpg" class="call-avatar">
                <h4>John Doe</h4>
                <span>Connecting...</span>
              </div>
              <div class="call-items">
                <a href="javascript:void(0);" class="btn call-item"><i class="material-icons">mic</i></a>
                <a href="javascript:void(0);" class="btn call-item"><i class="material-icons">videocam</i></a>
                <router-link to="/chat" class="btn call-item call-end"><i class="material-icons vcend">call_end</i>
                </router-link>
                <a href="javascript:void(0);" class="btn call-item"><i class="material-icons">person_add</i></a>
                <a href="javascript:void(0);" class="btn call-item"><i class="material-icons">volume_up</i></a>
              </div>
            </div>
          </div>
        </div>
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
    name: 'outgoingcall'
  }
</script>