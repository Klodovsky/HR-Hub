<template>
    <div>
        <header>
            <!-- Header -->
            <div class="header">

                <!-- Logo -->
                <div class="header-left">
                    <router-link to="/index" class="logo">
                        <img src="../../assets/logo.png" width="40" height="40" alt="">
                    </router-link>
                </div>
                <!-- /Logo -->

                <!-- Header Title -->
                <div class="page-title-box float-left">
                    <h3>Klodovsky's Technologies</h3>
                </div>
                <!-- /Header Title -->

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

                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/register">Register</router-link>
                    </li>
                </ul>
                <!-- /Header Menu -->

                <!-- Mobile Menu -->
                <div class="dropdown mobile-user-menu">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                            class="fa fa-ellipsis-v"></i></a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <router-link class="dropdown-item" to="/login">Login</router-link>
                        <router-link class="dropdown-item" to="/register">Register</router-link>
                    </div>
                </div>
                <!-- /Mobile Menu -->

            </div>
            <!-- /Header -->
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