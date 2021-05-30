<template>
    <div>
        <!-- Sidebar -->
        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner v-slimscroll">
                <div class="sidebar-menu">
                    <ul>
                        <li class="index"> 
                          <router-link to="/index"><i class="la la-home"></i> <span>Back to Home</span></router-link>
                        </li>
                        <li class="menu-title">Settings</li>
                        <li class="settings"> 
                          <router-link to="/settings"><i class="la la-building"></i> <span>Company Settings</span></router-link>
                        </li>
                        <li class="localization"> 
                          <router-link to="/localization"><i class="la la-clock-o"></i> <span>Localization</span></router-link>
                        </li>
                        <li class="themesettings"> 
                          <router-link to="/themesettings"><i class="la la-photo"></i><span>Theme Settings</span></router-link>
                        </li>
                        <li class="rolespermissions"> 
                          <router-link to="/rolespermissions"><i class="la la-key"></i> <span>Roles & Permissions</span></router-link>
                        </li>
                        <li class="emailsettings"> 
                          <router-link to="/emailsettings"><i class="la la-at"></i> <span>Email Settings</span></router-link>
                        </li>
                        <li class="invoicesettings"> 
                          <router-link to="/invoicesettings"><i class="la la-pencil-square"></i> <span>Invoice Settings</span></router-link>
                        </li>
                        <li class="salarysettings"> 
                          <router-link to="/salarysettings"><i class="la la-money"></i><span>Salary Settings</span></router-link>
                        </li>
                        <li class="notificationssettings"> 
                          <router-link to="/notificationssettings"><i class="la la-globe"></i> <span>Notifications</span></router-link>
                        </li>
                        <li class="changepassword"> 
                          <router-link to="/changepassword"><i class="la la-lock"></i> <span>Change Password</span></router-link>
                        </li>
                        <li class="leavetype"> 
                          <router-link to="/leavetype"><i class="la la-cogs"></i> <span>Leave Type</span></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Sidebar -->
    </div>
</template>
<script>  
  export default {
   
    computed: {
      currentpage() {
        return this.$route.path;
      },
    },
  data() {
    return {
activeClass: 'active',
    };
            //  isactive : true
  },
        }
       
        </script>
<style> 
 
  .sidebar {
    height: 100vh;
      overflow: auto;
  }
  
  .sidebar::-webkit-scrollbar {
    width: 7px;
  }
  
  /* Track */
  .sidebar::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px grey;  */
    box-shadow: none;
    border-radius: 10px;
  }
   
  /* Handle */
  .sidebar::-webkit-scrollbar-thumb {
    /* background: red;  */
    border-radius: 10px;
    /* background: rgb(204, 204, 204); */
    background-color: transparent;
  }
  
  /* Handle on hover */
  .sidebar::-webkit-scrollbar-thumb:hover {
    /* background: #b30000;  */
    background: rgb(204, 204, 204);
  }
  .sidebar-menu ul ul a.class-active {
  color: #00c5fb;
  text-decoration: underline;
}
  </style> 