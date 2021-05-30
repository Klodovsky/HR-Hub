<template>
    <div>
        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <div class="sidebar-menu">
                    <ul>
                        <li> 
                            <router-link to="/index"><i class="la la-home"></i> <span>Back to Home</span></router-link>
                        </li>
                        <li class="inbox"> 
                            <router-link to="/inbox">Inbox<span class="mail-count">(21)</span></router-link>
                        </li>
                        <li> 
                            <a href="#">Starred</a>
                        </li>
                        <li> 
                            <a href="#">Sent Mail</a>
                        </li>
                        <li> 
                            <a href="#">Draft <span class="mail-count">(8)</span></a>
                        </li>
                        <li> 
                            <a href="#">Trash</a>
                        </li>
                       
                        <li class="menu-title">Label <a href="#"><i class="fa fa-plus"></i></a></li>
                        <li> 
                            <a href="#"><i class="fa fa-circle text-success mail-label"></i> Work</a>
                        </li>
                        <li> 
                            <a href="#"><i class="fa fa-circle text-danger mail-label"></i> Office</a>
                        </li>
                        <li> 
                            <a href="#"><i class="fa fa-circle text-warning mail-label"></i> Personal</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
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