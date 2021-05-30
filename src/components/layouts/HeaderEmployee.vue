<template>
  <div>
    <header>
      <div class="header">
        <!--Logo-->
        <div class="header-left">
          <router-link to="/index" class="logo">

            <img src="../../assets/logo.png" width="40" height="40" alt="">
          </router-link>

        </div>

        <!-- Header Title -->
        <div class="page-title-box">
          <h3>Klodovsky's Technologies</h3>
        </div>
        <!-- /Header Title -->
        <a id="mobile_btn" class="mobile_btn" href="#sidebar"><i class="fa fa-bars"></i></a>
        <!-- Header Menu -->
        <ul class="nav user-menu">
          <!-- Search -->
          <li class="nav-item">
            <div class="top-nav-search">
              <a href="javascript:void(0);" class="responsive-search">
                <i class="fa fa-search"></i>
              </a>
              <form action="search">
                <input class="form-control" type="text" placeholder="Search here">
                <button class="btn" type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div>
          </li>
          <!-- /Search -->
          <!-- Flag -->
          <li class="nav-item dropdown has-arrow flag-nav">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button">
              <img src="../../assets/flags/us.png" alt="" height="20"> <span>English</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <a href="javascript:void(0);" class="dropdown-item">
                <img src="../../assets/flags/us.png" alt="" height="16"> English
              </a>
              <a href="javascript:void(0);" class="dropdown-item">
                <img src="../../assets/flags/fr.png" alt="" height="16"> French
              </a>
              <a href="javascript:void(0);" class="dropdown-item">
                <img src="../../assets/flags/es.png" alt="" height="16"> Spanish
              </a>
              <a href="javascript:void(0);" class="dropdown-item">
                <img src="../../assets/flags/de.png" alt="" height="16"> German
              </a>
            </div>
          </li>
          <!-- /Flag -->
          <!-- Notifications -->
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <i class="fa fa-bell-o"></i> <span class="badge badge-pill">3</span>
            </a>
            <div class="dropdown-menu notifications">
              <div class="topnav-dropdown-header">
                <span class="notification-title">Notifications</span>
                <a href="javascript:void(0)" class="clear-noti"> Clear All </a>
              </div>
              <div class="noti-content">
                <ul class="notification-list">
                  <li class="notification-message">

                    <router-link to="/activities">
                      <div class="media">
                        <span class="avatar">
                          <img alt="" src="../../assets/profiles/avatar-02.jpg">
                        </span>
                        <div class="media-body">
                          <p class="noti-details"><span class="noti-title">John Doe</span> added new task <span
                              class="noti-title">Patient appointment booking</span></p>
                          <p class="noti-time"><span class="notification-time">4 mins ago</span></p>
                        </div>
                      </div>

                    </router-link>
                  </li>
                  <li class="notification-message">

                    <router-link to="/activities">
                      <div class="media">
                        <span class="avatar">
                          <img alt="" src="../../assets/profiles/avatar-03.jpg">
                        </span>
                        <div class="media-body">
                          <p class="noti-details"><span class="noti-title">Tarah Shropshire</span> changed the task name
                            <span class="noti-title">Appointment booking with payment gateway</span></p>
                          <p class="noti-time"><span class="notification-time">6 mins ago</span></p>
                        </div>
                      </div>

                    </router-link>
                  </li>
                  <li class="notification-message">

                    <router-link to="/activities">
                      <div class="media">
                        <span class="avatar">
                          <img alt="" src="../../assets/profiles/avatar-06.jpg">
                        </span>
                        <div class="media-body">
                          <p class="noti-details"><span class="noti-title">Misty Tison</span> added <span
                              class="noti-title">Domenic Houston</span> and <span class="noti-title">Claire Mapes</span>
                            to project <span class="noti-title">Doctor available module</span></p>
                          <p class="noti-time"><span class="notification-time">8 mins ago</span></p>
                        </div>
                      </div>

                    </router-link>
                  </li>
                  <li class="notification-message">

                    <router-link to="/activities">
                      <div class="media">
                        <span class="avatar">
                          <img alt="" src="../../assets/profiles/avatar-17.jpg">
                        </span>
                        <div class="media-body">
                          <p class="noti-details"><span class="noti-title">Rolland Webber</span> completed task <span
                              class="noti-title">Patient and Doctor video conferencing</span></p>
                          <p class="noti-time"><span class="notification-time">12 mins ago</span></p>
                        </div>
                      </div>

                    </router-link>
                  </li>
                  <li class="notification-message">

                    <router-link to="/activities">
                      <div class="media">
                        <span class="avatar">
                          <img alt="" src="../../assets/profiles/avatar-13.jpg">
                        </span>
                        <div class="media-body">
                          <p class="noti-details"><span class="noti-title">Bernardo Galaviz</span> added new task <span
                              class="noti-title">Private chat module</span></p>
                          <p class="noti-time"><span class="notification-time">2 days ago</span></p>
                        </div>
                      </div>

                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="topnav-dropdown-footer">

                <router-link to="/activities">View all Notifications</router-link>
              </div>
            </div>
          </li>
          <!-- /Notifications -->
          <!-- Message Notifications -->
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <i class="fa fa-comment-o"></i> <span class="badge badge-pill">8</span>
            </a>
            <div class="dropdown-menu notifications">
              <div class="topnav-dropdown-header">
                <span class="notification-title">Messages</span>
                <a href="javascript:void(0)" class="clear-noti"> Clear All </a>
              </div>
              <div class="noti-content">
                <ul class="notification-list">
                  <li class="notification-message">

                    <router-link to="/chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">
                            <img alt="" src="../../assets/profiles/avatar-09.jpg">
                          </span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">Richard Miles </span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>

                    </router-link>
                  </li>
                  <li class="notification-message">

                    <router-link to="/chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">
                            <img alt="" src="../../assets/profiles/avatar-02.jpg">
                          </span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">John Doe</span>
                          <span class="message-time">6 Mar</span>
                          <div class="clearfix"></div>
                          <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>

                    </router-link>
                  </li>
                  <li class="notification-message">

                    <router-link to="/chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">
                            <img alt="" src="../../assets/profiles/avatar-03.jpg">
                          </span>
                        </div>
                        <div class="list-body">
                          <span class="message-author"> Tarah Shropshire </span>
                          <span class="message-time">5 Mar</span>
                          <div class="clearfix"></div>
                          <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>

                    </router-link>
                  </li>
                  <li class="notification-message">

                    <router-link to="/chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">
                            <img alt="" src="../../assets/profiles/avatar-05.jpg">
                          </span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">Mike Litorus</span>
                          <span class="message-time">3 Mar</span>
                          <div class="clearfix"></div>
                          <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>

                    </router-link>
                  </li>
                  <li class="notification-message">

                    <router-link to="/chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">
                            <img alt="" src="../../assets/profiles/avatar-08.jpg">
                          </span>
                        </div>
                        <div class="list-body">
                          <span class="message-author"> Catherine Manseau </span>
                          <span class="message-time">27 Feb</span>
                          <div class="clearfix"></div>
                          <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>

                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="topnav-dropdown-footer">

                <router-link to="/chat">View all Messages</router-link>
              </div>
            </div>
          </li>
          <!-- /Message Notifications -->
          <li class="nav-item dropdown has-arrow main-drop">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <span class="user-img"><img src="../../assets/profiles/avatar-21.jpg" alt="">
                <span class="status online"></span></span>
              <span>Admin</span>
            </a>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/profile">My Profile</router-link>
              <router-link class="dropdown-item" to="/settings">Settings</router-link>
              <router-link class="dropdown-item" to="/login">Logout</router-link>
            </div>
          </li>
        </ul>
        <!-- Mobile Menu -->
        <div class="dropdown mobile-user-menu">
          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
              class="fa fa-ellipsis-v"></i></a>
          <div class="dropdown-menu dropdown-menu-right">
            <router-link class="dropdown-item" to="/profile">My Profile</router-link>
            <router-link class="dropdown-item" to="/settings">Settings</router-link>
            <router-link class="dropdown-item" to="/login">Logout</router-link>
          </div>
        </div>

        <!-- /Header Menu -->
      </div>
    </header>
  </div>
</template>
<script>
  export default {
    mounted() {
       // Variables declarations
    var $wrapper = $('.main-wrapper');
 
    
      $('body').append('<div class="sidebar-overlay"></div>');
    $(document).on('click', '#mobile_btn', function() {
    $wrapper.toggleClass('slide-nav');
    $('.sidebar-overlay').toggleClass('opened');
    $('html').addClass('menu-opened');
    $('#task_window').removeClass('opened');
    return false;
    });
    $(".sidebar-overlay").on("click", function () {
    $('html').removeClass('menu-opened');
    $(this).removeClass('opened');
    $wrapper.removeClass('slide-nav');
    $('.sidebar-overlay').removeClass('opened');
    $('#task_window').removeClass('opened');
    });



      $(document).on('click', '.top-nav-search .responsive-search', function() {
    $('.top-nav-search').toggleClass('active');
    });
      $('.sidebar-menu ul li:not(.submenu) a').click(function () {
        $("html").removeClass('menu-opened');
        $(".sidebar-overlay").removeClass('opened');
      });
    }
  };
</script>