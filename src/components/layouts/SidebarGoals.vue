<template>
    <div>
        <!-- Sidebar -->
        <div class="sidebar stickyside" id="sidebar">
            <div class="sidebar-inner v-slimscroll">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title"> 
                            Components
                        </li>
                        <li> 
                            <a href="#comp_alerts" class="active">Alerts</a>
                        </li>
                        <li> 
                            <a href="#comp_breadcrumbs">Breadcrumbs</a>
                        </li>
                        <li> 
                            <a href="#comp_buttons">Buttons</a>
                        </li>
                        <li> 
                            <a href="#comp_cards">Cards</a>
                        </li>
                        <li> 
                            <a href="#comp_dropdowns">Dropdowns</a>
                        </li>
                        <li> 
                            <a href="#comp_pagination">Pagination</a>
                        </li>
                        <li> 
                            <a href="#comp_progress">Progress</a>
                        </li>
                        <li> 
                            <a href="#comp_tabs">Tabs</a>
                        </li>
                        <li> 
                            <a href="#comp_typography">Typography</a>
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