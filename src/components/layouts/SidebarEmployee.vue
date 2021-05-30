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
                    <li class="menu-title"><span>Chat Groups</span> <a href="#" data-toggle="modal" data-target="#add_group"><i class="fa fa-plus"></i></a></li>
                    <li> 
                        <router-link to="/#">
                            <span class="chat-avatar-sm user-img">
                                <img class="rounded-circle" alt="" src="../../assets/user.jpg">
                            </span> 
                            <span class="chat-user">#General</span>
                        </router-link>
                    </li>
                    <li> 
                        <router-link to="/#">
                            <span class="chat-avatar-sm user-img">
                                <img class="rounded-circle" alt="" src="../../assets/user.jpg">
                            </span> 
                            <span class="chat-user">#Video Responsive Survey</span>
                        </router-link>
                    </li>
                    <li> 
                        <router-link to="/#">
                            <span class="chat-avatar-sm user-img">
                                <img class="rounded-circle" alt="" src="../../assets/user.jpg">
                            </span> 
                            <span class="chat-user">#500rs</span>
                        </router-link>
                    </li>
                    <li> 
                        <router-link to="/#">
                            <span class="chat-avatar-sm user-img">
                                <img class="rounded-circle" alt="" src="../../assets/user.jpg">
                            </span> 
                            <span class="chat-user">#warehouse</span>
                        </router-link>
                    </li>
                    <li class="menu-title">Direct Chats <a href="#" data-toggle="modal" data-target="#add_chat_user"><i class="fa fa-plus"></i></a></li>
                    <li>
                        <router-link to="/#">
                            <span class="chat-avatar-sm user-img">
                                <img class="rounded-circle" alt="" src="../../assets/profiles/avatar-02.jpg"><span class="status online"></span>
                            </span> 
                            <span class="chat-user">John Doe</span> <span class="badge badge-pill bg-danger">1</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/#">
                            <span class="chat-avatar-sm user-img">
                                <img class="rounded-circle" alt="" src="../../assets/profiles/avatar-09.jpg"><span class="status offline"></span>
                            </span> 
                            <span class="chat-user">Richard Miles</span> <span class="badge badge-pill bg-danger">7</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/#">
                            <span class="chat-avatar-sm user-img">
                                <img class="rounded-circle" alt="" src="../../assets/profiles/avatar-10.jpg"><span class="status away"></span>
                            </span> 
                            <span class="chat-user">John Smith</span>
                        </router-link>
                    </li>
                    <li class="active">
                        <router-link to="/chat">
                            <span class="chat-avatar-sm user-img">
                                <img class="rounded-circle" alt="" src="../../assets/profiles/avatar-05.jpg"><span class="status online"></span>
                            </span> 
                            <span class="chat-user">Mike Litorus</span> <span class="badge badge-pill bg-danger">2</span>
                        </router-link>
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