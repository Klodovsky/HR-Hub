<template>
    <div>
         <!-- Sidebar -->
         <div class="sidebar" id="sidebar">
            <div class="sidebar-inner v-slimscroll">
                <div class="sidebar-menu">
                    <ul>
                        <li> 
                            <router-link to="/index"><i class="la la-home"></i> <span>Back to Home</span></router-link>
                        </li>
                        <li class="menu-title">Projects <a href="#" data-toggle="modal" data-target="#create_project"><i class="fa fa-plus"></i></a></li>
                        <li> 
                            <router-link to="/#">Project Management</router-link>
                        </li>
                        <li class="tasks"> 
                            <router-link to="/tasks">Hospital Administration</router-link>
                        </li>
                        <li> 
                            <router-link to="/#">Video Calling App</router-link>
                        </li>
                        <li>
                            <router-link to="/#">Office Management</router-link> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /Sidebar -->
        
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